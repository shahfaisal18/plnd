import { MusicTrack } from '../types';

/**
 * Dual-mode audio engine:
 * - Plays standard audio files (mp3/wav/ogg/m4a) via HTMLAudioElement when `audioUrl` or user-loaded file is active.
 * - Falls back seamlessly to a warm polyphonic Web Audio API ambient/cinematic synth score
 *   when previewing built-in tracks without external MP3 assets attached.
 */
export class StudioAudioEngine {
  private audioEl: HTMLAudioElement | null = null;
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private oscNodes: OscillatorNode[] = [];
  private lfoNode: OscillatorNode | null = null;
  private stepTimer: number | null = null;
  private progressTimer: number | null = null;
  private currentMode: 'html5' | 'synth' = 'synth';
  private isPlayingState = false;
  private currentTimeSec = 0;
  private durationSec = 180;
  private volume = 0.75;
  private muted = false;

  private onTimeUpdate?: (timeSec: number, durationSec: number) => void;
  private onEnded?: () => void;

  constructor(callbacks?: {
    onTimeUpdate?: (timeSec: number, durationSec: number) => void;
    onEnded?: () => void;
  }) {
    this.onTimeUpdate = callbacks?.onTimeUpdate;
    this.onEnded = callbacks?.onEnded;
  }

  public setVolume(vol: number) {
    this.volume = Math.max(0, Math.min(1, vol));
    const effective = this.muted ? 0 : this.volume;
    if (this.audioEl) {
      this.audioEl.volume = effective;
    }
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(effective * 0.18, this.ctx.currentTime, 0.05);
    }
  }

  public setMuted(muted: boolean) {
    this.muted = muted;
    this.setVolume(this.volume);
  }

  public async playTrack(track: MusicTrack, startAtSec = 0) {
    this.stopInternal(false);
    this.currentTimeSec = startAtSec;
    this.durationSec = track.durationSec;

    if (track.audioUrl) {
      try {
        this.currentMode = 'html5';
        const audio = new Audio(track.audioUrl);
        audio.volume = this.muted ? 0 : this.volume;
        audio.currentTime = startAtSec;
        audio.addEventListener('loadedmetadata', () => {
          if (audio.duration && Number.isFinite(audio.duration)) {
            this.durationSec = Math.round(audio.duration);
          }
          this.onTimeUpdate?.(audio.currentTime, this.durationSec);
        });
        audio.addEventListener('timeupdate', () => {
          this.currentTimeSec = audio.currentTime;
          this.onTimeUpdate?.(this.currentTimeSec, this.durationSec);
        });
        audio.addEventListener('ended', () => {
          this.isPlayingState = false;
          this.onEnded?.();
        });
        this.audioEl = audio;
        await audio.play();
        this.isPlayingState = true;
        return;
      } catch {
        // Fallback cleanly to built-in Web Audio preview if external file fails
      }
    }

    this.currentMode = 'synth';
    this.startSynthScore(track);
    this.isPlayingState = true;
  }

  public pause() {
    this.isPlayingState = false;
    if (this.currentMode === 'html5' && this.audioEl) {
      this.audioEl.pause();
    } else {
      this.stopSynthNodes();
    }
    if (this.progressTimer !== null) {
      window.clearInterval(this.progressTimer);
      this.progressTimer = null;
    }
  }

  public seek(timeSec: number, track: MusicTrack) {
    const clamped = Math.max(0, Math.min(this.durationSec, timeSec));
    this.currentTimeSec = clamped;
    if (this.currentMode === 'html5' && this.audioEl) {
      this.audioEl.currentTime = clamped;
      this.onTimeUpdate?.(clamped, this.durationSec);
    } else {
      this.onTimeUpdate?.(clamped, this.durationSec);
      if (this.isPlayingState) {
        this.playTrack(track, clamped);
      }
    }
  }

  public stop() {
    this.stopInternal(true);
  }

  private stopInternal(resetTime: boolean) {
    this.isPlayingState = false;
    if (this.audioEl) {
      this.audioEl.pause();
      this.audioEl.src = '';
      this.audioEl = null;
    }
    this.stopSynthNodes();
    if (this.progressTimer !== null) {
      window.clearInterval(this.progressTimer);
      this.progressTimer = null;
    }
    if (resetTime) {
      this.currentTimeSec = 0;
    }
  }

  private startSynthScore(track: MusicTrack) {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;

    if (!this.ctx) {
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      void this.ctx.resume();
    }

    const ctx = this.ctx;
    const master = ctx.createGain();
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 920;
    filter.Q.value = 1.2;

    const effective = this.muted ? 0 : this.volume;
    master.gain.setValueAtTime(0.0001, ctx.currentTime);
    master.gain.exponentialRampToValueAtTime(Math.max(0.001, effective * 0.16), ctx.currentTime + 0.6);

    filter.connect(master);
    master.connect(ctx.destination);
    this.masterGain = master;

    // Gentle LFO breathing on the filter cutoff
    const lfo = ctx.createOscillator();
    const lfoGain = ctx.createGain();
    lfo.frequency.value = 0.18;
    lfoGain.gain.value = 260;
    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);
    lfo.start();
    this.lfoNode = lfo;

    // Warm pad voices from track chord
    const padVoices = track.chordHz.slice(0, 3);
    padVoices.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const voiceGain = ctx.createGain();
      osc.type = idx === 0 ? 'triangle' : 'sine';
      osc.frequency.value = freq;
      osc.detune.value = idx === 1 ? -5 : idx === 2 ? 6 : 0;
      voiceGain.gain.value = idx === 0 ? 0.45 : 0.28;
      osc.connect(voiceGain);
      voiceGain.connect(filter);
      osc.start();
      this.oscNodes.push(osc);
    });

    // Subtle melodic arpeggio pulse
    let stepIndex = 0;
    const beatMs = Math.round((60 / track.bpm) * 1000);
    const notes = [...track.chordHz, track.chordHz[1] * 2, track.chordHz[2] * 2];

    this.stepTimer = window.setInterval(() => {
      if (!this.ctx || !this.isPlayingState) return;
      const now = this.ctx.currentTime;
      const pluck = this.ctx.createOscillator();
      const pluckGain = this.ctx.createGain();
      pluck.type = 'sine';
      pluck.frequency.value = notes[stepIndex % notes.length];
      pluckGain.gain.setValueAtTime(0.0001, now);
      pluckGain.gain.exponentialRampToValueAtTime(0.14, now + 0.04);
      pluckGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.55);
      pluck.connect(pluckGain);
      pluckGain.connect(filter);
      pluck.start(now);
      pluck.stop(now + 0.6);
      stepIndex += 1;
    }, beatMs);

    this.progressTimer = window.setInterval(() => {
      if (!this.isPlayingState) return;
      this.currentTimeSec += 0.25;
      if (this.currentTimeSec >= this.durationSec) {
        this.currentTimeSec = this.durationSec;
        this.onTimeUpdate?.(this.currentTimeSec, this.durationSec);
        this.pause();
        this.onEnded?.();
        return;
      }
      this.onTimeUpdate?.(this.currentTimeSec, this.durationSec);
    }, 250);
  }

  private stopSynthNodes() {
    if (this.stepTimer !== null) {
      window.clearInterval(this.stepTimer);
      this.stepTimer = null;
    }
    this.oscNodes.forEach((osc) => {
      try {
        osc.stop();
        osc.disconnect();
      } catch {
        // ignore already stopped
      }
    });
    this.oscNodes = [];
    if (this.lfoNode) {
      try {
        this.lfoNode.stop();
        this.lfoNode.disconnect();
      } catch {
        // ignore
      }
      this.lfoNode = null;
    }
    if (this.masterGain) {
      try {
        this.masterGain.disconnect();
      } catch {
        // ignore
      }
      this.masterGain = null;
    }
  }
}
