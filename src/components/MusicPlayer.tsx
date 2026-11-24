import { useEffect, useRef, useState } from 'react';
import {
  Disc3,
  Music2,
  Pause,
  Play,
  SkipBack,
  SkipForward,
  Upload,
  Volume2,
  VolumeX,
} from 'lucide-react';
import { MusicTrack } from '../types';
import { StudioAudioEngine } from '../utils/audioEngine';

interface MusicPlayerProps {
  initialTracks: MusicTrack[];
}

function formatTime(sec: number): string {
  const safe = Math.max(0, Math.floor(sec));
  const mins = Math.floor(safe / 60);
  const secs = safe % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

export function MusicPlayer({ initialTracks }: MusicPlayerProps) {
  const [tracks, setTracks] = useState<MusicTrack[]>(initialTracks);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(initialTracks[0]?.durationSec ?? 180);
  const [volume, setVolume] = useState(0.75);
  const [isMuted, setIsMuted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const engineRef = useRef<StudioAudioEngine | null>(null);

  const currentTrack = tracks[currentIndex] ?? tracks[0];

  useEffect(() => {
    const engine = new StudioAudioEngine({
      onTimeUpdate: (timeSec, durSec) => {
        setCurrentTime(timeSec);
        setDuration(durSec);
      },
      onEnded: () => {
        setIsPlaying(false);
        setCurrentTime(0);
      },
    });
    engineRef.current = engine;

    return () => {
      engine.stop();
    };
  }, []);

  useEffect(() => {
    engineRef.current?.setVolume(volume);
  }, [volume]);

  useEffect(() => {
    engineRef.current?.setMuted(isMuted);
  }, [isMuted]);

  const handleTogglePlay = async () => {
    const engine = engineRef.current;
    if (!engine || !currentTrack) return;
    if (isPlaying) {
      engine.pause();
      setIsPlaying(false);
    } else {
      await engine.playTrack(currentTrack, currentTime);
      setIsPlaying(true);
    }
  };

  const handleSelectTrack = async (index: number) => {
    const target = tracks[index];
    if (!target || !engineRef.current) return;
    setCurrentIndex(index);
    setCurrentTime(0);
    setDuration(target.durationSec);
    await engineRef.current.playTrack(target, 0);
    setIsPlaying(true);
  };

  const handlePrev = () => {
    const nextIdx = (currentIndex - 1 + tracks.length) % tracks.length;
    void handleSelectTrack(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % tracks.length;
    void handleSelectTrack(nextIdx);
  };

  const handleSeek = (value: number) => {
    if (!currentTrack || !engineRef.current) return;
    setCurrentTime(value);
    engineRef.current.seek(value, currentTrack);
  };

  const handleUploadAudio = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const uploadedTracks: MusicTrack[] = Array.from(files).map((file, idx) => {
      const cleanTitle = file.name.replace(/\.[^/.]+$/, '');
      return {
        id: `uploaded-${Date.now()}-${idx}`,
        title: cleanTitle,
        artist: 'Client Audio Upload',
        project: 'Illurei Music Library',
        durationSec: 180,
        bpm: 100,
        rootHz: 220,
        chordHz: [220, 261.63, 329.63],
        audioUrl: URL.createObjectURL(file),
      };
    });

    const newList = [...uploadedTracks, ...tracks];
    setTracks(newList);
    setCurrentIndex(0);
    setCurrentTime(0);
    if (engineRef.current) {
      void engineRef.current.playTrack(uploadedTracks[0], 0);
      setIsPlaying(true);
    }
    e.target.value = '';
  };

  const progressPct = duration > 0 ? Math.min(100, (currentTime / duration) * 100) : 0;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      {/* Now Playing Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
        <div className="flex items-center gap-4 min-w-0">
          <div
            className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200/70 ${
              isPlaying ? 'shadow-sm' : ''
            }`}
          >
            {isPlaying ? (
              <Disc3 className="h-7 w-7 animate-spin" style={{ animationDuration: '4s' }} />
            ) : (
              <Music2 className="h-7 w-7" />
            )}
          </div>
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
              {currentTrack?.audioUrl ? 'Client Audio Track' : 'Studio Score Preview'}
            </p>
            <h4 className="font-display text-lg font-bold text-slate-900 truncate">
              {currentTrack?.title}
            </h4>
            <p className="text-sm text-slate-600 truncate">
              {currentTrack?.artist} · {currentTrack?.project}
            </p>
          </div>
        </div>

        <div className="shrink-0">
          <input
            ref={fileInputRef}
            type="file"
            accept="audio/*"
            multiple
            onChange={handleUploadAudio}
            className="hidden"
          />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors cursor-pointer whitespace-nowrap"
          >
            <Upload className="h-3.5 w-3.5" />
            Load Audio File
          </button>
        </div>
      </div>

      {/* Scrub Bar & Timestamps */}
      <div className="mt-5 space-y-2">
        <div className="relative flex items-center">
          <input
            type="range"
            min={0}
            max={duration || 100}
            step={0.5}
            value={currentTime}
            onChange={(e) => handleSeek(Number(e.target.value))}
            aria-label="Seek track position"
            className="w-full accent-emerald-600 cursor-pointer h-1.5 rounded-lg bg-slate-200"
            style={{
              background: `linear-gradient(to right, #059669 ${progressPct}%, #e2e8f0 ${progressPct}%)`,
            }}
          />
        </div>
        <div className="flex items-center justify-between text-xs font-mono tabular-nums text-slate-500">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Playback Controls */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous track"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors cursor-pointer"
          >
            <SkipBack className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => void handleTogglePlay()}
            aria-label={isPlaying ? 'Pause track' : 'Play track'}
            className="flex h-11 px-5 items-center justify-center gap-2 rounded-lg bg-emerald-600 text-sm font-semibold text-white hover:bg-emerald-700 transition-colors cursor-pointer whitespace-nowrap"
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            <span>{isPlaying ? 'Pause' : 'Play'}</span>
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next track"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors cursor-pointer"
          >
            <SkipForward className="h-4 w-4" />
          </button>
        </div>

        {/* Volume */}
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => setIsMuted((m) => !m)}
            aria-label={isMuted ? 'Unmute audio' : 'Mute audio'}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors cursor-pointer"
          >
            {isMuted || volume === 0 ? (
              <VolumeX className="h-4 w-4" />
            ) : (
              <Volume2 className="h-4 w-4" />
            )}
          </button>
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={isMuted ? 0 : volume}
            onChange={(e) => {
              const v = Number(e.target.value);
              setVolume(v);
              if (v > 0 && isMuted) setIsMuted(false);
            }}
            aria-label="Volume"
            className="w-24 accent-emerald-600 cursor-pointer h-1.5 rounded-lg bg-slate-200"
          />
        </div>
      </div>

      {/* Tracklist Queue */}
      <div className="mt-6 pt-5 border-t border-slate-100">
        <div className="flex items-center justify-between mb-3">
          <h5 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Track Queue
          </h5>
          <span className="text-xs font-mono tabular-nums text-slate-400">
            {tracks.length} tracks
          </span>
        </div>
        <div className="divide-y divide-slate-100">
          {tracks.map((track, idx) => {
            const active = idx === currentIndex;
            return (
              <button
                key={track.id}
                type="button"
                onClick={() => void handleSelectTrack(idx)}
                className={`flex w-full items-center justify-between gap-3 py-2.5 px-3 rounded-lg text-left transition-colors cursor-pointer ${
                  active
                    ? 'bg-emerald-50/80 text-emerald-900'
                    : 'hover:bg-slate-50 text-slate-700'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="w-5 text-xs font-mono tabular-nums text-slate-400 shrink-0">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold truncate">{track.title}</p>
                    <p className="text-xs text-slate-500 truncate">{track.project}</p>
                  </div>
                </div>
                <span className="text-xs font-mono tabular-nums text-slate-500 shrink-0">
                  {formatTime(track.durationSec)}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
