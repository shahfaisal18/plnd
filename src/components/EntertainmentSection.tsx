import { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Award,
  ExternalLink,
  Film,
  Maximize2,
  Music,
  Video,
} from 'lucide-react';
import {
  CORPORATE_VIDEO_URL,
  DEFAULT_MUSIC_TRACKS,
  ENTERTAINMENT_PROJECTS,
  ENTERTAINMENT_STREAMING_LINKS,
  IMDB_PROFILE_URL,
} from '../data/siteData';
import { SectionId } from '../types';
import { LightboxModal } from './LightboxModal';
import { MusicPlayer } from './MusicPlayer';

interface EntertainmentSectionProps {
  onNavigateSection: (section: SectionId) => void;
}

export function EntertainmentSection({ onNavigateSection }: EntertainmentSectionProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filmProjects = ENTERTAINMENT_PROJECTS.filter((p) => p.id !== 'levon-live');
  const levonProjectIndex = ENTERTAINMENT_PROJECTS.findIndex((p) => p.id === 'levon-live');
  const levonProject = ENTERTAINMENT_PROJECTS[levonProjectIndex];

  return (
    <div className="w-full">
      {/* Entertainment Hero — Exact Logo Slate, Cyan & Gold Palette */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-radial from-[#00adef]/22 to-transparent blur-2xl" />
          <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-radial from-[#f59e0b]/20 to-transparent blur-2xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#38bdf8]">
                Illurei Entertainment Division
              </p>
              <h1 className="mt-3 font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-white [text-wrap:balance]">
                Film, Television &amp; Original Music
              </h1>
              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
                International cinema, U.S. episodic television, original music releases, and live
                stage productions led by creator Ivon Skula.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={IMDB_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-lg bg-white px-5 py-3 text-sm font-bold text-slate-950 shadow-sm hover:bg-sky-50 transition-colors whitespace-nowrap"
              >
                <span className="rounded bg-[#f59e0b] px-1.5 py-0.5 text-xs font-extrabold tracking-tight text-slate-950">
                  IMDb
                </span>
                <span>View IMDb Profile</span>
                <ExternalLink className="h-4 w-4 text-slate-600" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Film & Television Productions — All Uploaded Client Posters at Original Aspect Ratios */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2 text-sm font-semibold text-[#0082b8]">
                <Film className="h-4 w-4" />
                <span>Motion Pictures &amp; Television</span>
              </div>
              <h2 className="mt-1 font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                Film &amp; Series Slate
              </h2>
            </div>
            <p className="text-sm text-slate-600 max-w-md">
              Select any poster or feature dossier to inspect the full-resolution artwork and
              production details.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {filmProjects.map((project) => {
              const globalIndex = ENTERTAINMENT_PROJECTS.findIndex((p) => p.id === project.id);
              return (
                <article
                  key={project.id}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs hover:shadow-lg hover:border-[#00adef]/60 transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => setLightboxIndex(globalIndex)}
                    className={`relative w-full overflow-hidden cursor-zoom-in focus-visible:outline-2 focus-visible:outline-[#00adef] ${
                      project.id === 'the-thought' ? 'bg-slate-950' : 'bg-slate-50'
                    }`}
                    style={{ aspectRatio: project.aspectRatio }}
                    aria-label={`Inspect ${project.title} artwork`}
                  >
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                    <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-lg bg-slate-950/80 px-3 py-1.5 text-xs font-medium text-white opacity-90 group-hover:opacity-100 transition-opacity backdrop-blur-xs">
                      <Maximize2 className="h-3.5 w-3.5" />
                      <span>Full View</span>
                    </span>
                  </button>

                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#0082b8]">
                        {project.subtitle}
                      </p>
                      <h3 className="mt-1 font-display text-2xl font-bold text-slate-900">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm italic text-slate-700">“{project.tagline}”</p>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
                      <span>{project.credits}</span>
                      <button
                        type="button"
                        onClick={() => setLightboxIndex(globalIndex)}
                        className="font-semibold text-[#0082b8] hover:text-[#006994] cursor-pointer"
                      >
                        Inspect Artwork
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dedicated Music & Live Stage Section — Time of Greatness, United & LEVON */}
      <section className="bg-slate-50 py-16 sm:py-24 border-y border-slate-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-slate-200/80">
            <div>
              <div className="flex items-center gap-2 text-sm font-semibold text-[#d97706]">
                <Music className="h-4 w-4" />
                <span>Music &amp; Live Stage</span>
              </div>
              <h2 className="mt-1 font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                Illurei Music — Time of Greatness, United &amp; LEVON
              </h2>
            </div>
            <p className="text-sm text-slate-600 max-w-md">
              Listen with the audio player, load local MP3/WAV audio tracks, or open official
              streaming links.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Levon Stage Visual — preserves exact portrait ratio */}
            {levonProject && (
              <div className="lg:col-span-5">
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 shadow-sm">
                  <button
                    type="button"
                    onClick={() => setLightboxIndex(levonProjectIndex)}
                    className="group relative block w-full cursor-zoom-in focus-visible:outline-2 focus-visible:outline-[#00adef]"
                    aria-label="Inspect Levon live performance photography"
                  >
                    <img
                      src={levonProject.image}
                      alt={levonProject.imageAlt}
                      referrerPolicy="no-referrer"
                      className="mx-auto max-h-[560px] w-full object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                    />
                    <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-lg bg-slate-900/80 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-xs">
                      <Maximize2 className="h-3.5 w-3.5" />
                      <span>Expand</span>
                    </span>
                  </button>
                  <div className="bg-white p-5 border-t border-slate-200">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#d97706]">
                      {levonProject.subtitle}
                    </p>
                    <h3 className="mt-1 font-display text-xl font-bold text-slate-900">
                      {levonProject.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-slate-600">{levonProject.description}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Music Player, Official Streaming Platforms & IMDb Credits Spotlight */}
            <div className="lg:col-span-7 space-y-6">
              <MusicPlayer initialTracks={DEFAULT_MUSIC_TRACKS} />

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
                <h3 className="font-display text-lg font-bold text-slate-900">
                  Stream Ivon Skula — Official Platforms
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  Direct links from the official Illurei press release:
                </p>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {ENTERTAINMENT_STREAMING_LINKS.map((item) => (
                    <a
                      key={item.url}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-2 rounded-lg border border-slate-200 bg-slate-50/70 px-3.5 py-2.5 text-sm font-medium text-slate-800 hover:border-[#00adef] hover:bg-sky-50/60 hover:text-[#0082b8] transition-colors"
                    >
                      <span className="truncate font-semibold">{item.platform}</span>
                      <ExternalLink className="h-3.5 w-3.5 shrink-0 text-slate-400 group-hover:text-[#0082b8]" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-[#d97706] border border-amber-200">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-slate-900">
                      Official IMDb Credits &amp; Filmography
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      Explore verified acting, producing, music, and filmography credits on IMDb.
                    </p>
                  </div>
                </div>
                <a
                  href={IMDB_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 transition-colors shrink-0 whitespace-nowrap"
                >
                  <span>Open IMDb Profile</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Compact Corporate Aerial Video Showcase (1000089678_898abdbd.mp4 is 640x360, presented cleanly at compact size) */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0082b8]">
                  <Video className="h-4 w-4" />
                  <span>Corporate Reel Clip</span>
                </div>
                <h3 className="mt-2 font-display text-xl font-bold text-slate-900">
                  Illurei Skyline Identity Clip
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Compact twilight aerial reel featuring the Illurei corporate tower visual.
                  Presented at native 360p aspect proportions for clean playback across desktop and
                  mobile.
                </p>
              </div>
              <div className="md:col-span-7 flex justify-center md:justify-end">
                <div className="w-full max-w-md overflow-hidden rounded-xl border border-slate-200 bg-slate-950 shadow-sm">
                  <video
                    src={CORPORATE_VIDEO_URL}
                    controls
                    playsInline
                    preload="metadata"
                    className="aspect-video w-full object-contain"
                  >
                    Your browser does not support embedded video playback.
                  </video>
                </div>
              </div>
            </div>
          </div>

          {/* Side-to-Side Navigation Footer */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-xs">
            <button
              type="button"
              onClick={() => onNavigateSection('about')}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to About &amp; Press</span>
            </button>
            <button
              type="button"
              onClick={() => onNavigateSection('contact')}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0082b8] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#006994] transition-colors cursor-pointer"
            >
              <span>Proceed to Contact</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <LightboxModal
        projects={ENTERTAINMENT_PROJECTS}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(next) => setLightboxIndex(next)}
      />
    </div>
  );
}
