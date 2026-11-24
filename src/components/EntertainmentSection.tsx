import { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Award,
  ExternalLink,
  Film,
  Maximize2,
  Music,
} from 'lucide-react';
import {
  DEFAULT_MUSIC_TRACKS,
  ENTERTAINMENT_PROJECTS,
  IMDB_PROFILE_URL,
  PRESS_RELEASE_DATA,
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
      {/* Entertainment Hero */}
      <section className="relative overflow-hidden bg-linear-to-br from-emerald-500 via-emerald-600 to-teal-800 text-white">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-12 top-10 h-60 w-60 rounded-full border border-white/15 bg-white/5" />
          <div className="absolute left-16 bottom-10 h-28 w-28 rotate-12 rounded-2xl border border-white/15 bg-white/10" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-emerald-100">
                Illurei Entertainment Division
              </p>
              <h1 className="mt-3 font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-white [text-wrap:balance]">
                Film, Television &amp; Original Music
              </h1>
              <p className="mt-4 text-base sm:text-lg text-emerald-50/95 leading-relaxed">
                Cinema, episodic storytelling, and live musical production designed to engage
                audiences on a deeper emotional and cultural level.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={IMDB_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-lg bg-white px-5 py-3 text-sm font-bold text-slate-900 shadow-sm hover:bg-emerald-50 transition-colors whitespace-nowrap"
              >
                <span className="rounded bg-amber-400 px-1.5 py-0.5 text-xs font-extrabold tracking-tight text-slate-950">
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
              <div className="flex items-center gap-2 text-sm font-semibold text-emerald-600">
                <Film className="h-4 w-4" />
                <span>Motion Pictures &amp; Television</span>
              </div>
              <h2 className="mt-1 font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                Film &amp; Series Slate
              </h2>
            </div>
            <p className="text-sm text-slate-600 max-w-md">
              Select any poster or feature sheet to inspect the full-resolution artwork and credits.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {filmProjects.map((project) => {
              const globalIndex = ENTERTAINMENT_PROJECTS.findIndex((p) => p.id === project.id);
              return (
                <article
                  key={project.id}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs hover:shadow-lg hover:border-emerald-200 transition-all duration-200"
                >
                  {/* Full-Aspect-Ratio Poster Container — Never crops client artwork */}
                  <button
                    type="button"
                    onClick={() => setLightboxIndex(globalIndex)}
                    className={`relative w-full overflow-hidden cursor-zoom-in focus-visible:outline-2 focus-visible:outline-emerald-600 ${
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
                    <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-lg bg-slate-900/75 px-3 py-1.5 text-xs font-medium text-white opacity-90 group-hover:opacity-100 transition-opacity backdrop-blur-xs">
                      <Maximize2 className="h-3.5 w-3.5" />
                      <span>Full View</span>
                    </span>
                  </button>

                  {/* Project Metadata */}
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
                        {project.subtitle}
                      </p>
                      <h3 className="mt-1 font-display text-2xl font-bold text-slate-900">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm italic text-slate-700">
                        “{project.tagline}”
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
                      <span>{project.credits}</span>
                      <button
                        type="button"
                        onClick={() => setLightboxIndex(globalIndex)}
                        className="font-semibold text-emerald-700 hover:text-emerald-800 cursor-pointer"
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

      {/* Dedicated Music & Live Stage Section */}
      <section className="bg-slate-50 py-16 sm:py-24 border-y border-slate-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-slate-200/80">
            <div>
              <div className="flex items-center gap-2 text-sm font-semibold text-emerald-600">
                <Music className="h-4 w-4" />
                <span>Music &amp; Live Stage</span>
              </div>
              <h2 className="mt-1 font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                Illurei Music &amp; Levon Live Showcase
              </h2>
            </div>
            <p className="text-sm text-slate-600 max-w-md">
              Stream score previews, control playback, or load local MP3/WAV tracks directly into
              the player.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Levon Stage Visual — preserves exact portrait ratio */}
            {levonProject && (
              <div className="lg:col-span-5">
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 shadow-sm">
                  <button
                    type="button"
                    onClick={() => setLightboxIndex(levonProjectIndex)}
                    className="group relative block w-full cursor-zoom-in focus-visible:outline-2 focus-visible:outline-emerald-600"
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
                    <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
                      {levonProject.subtitle}
                    </p>
                    <h3 className="mt-1 font-display text-xl font-bold text-slate-900">
                      {levonProject.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-slate-600">
                      {levonProject.description}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Music Player, Official Streaming Platforms & IMDb Credits Spotlight */}
            <div className="lg:col-span-7 space-y-6">
              <MusicPlayer initialTracks={DEFAULT_MUSIC_TRACKS} />

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
                <h3 className="font-display text-lg font-bold text-slate-900">
                  Stream Ivon Skula — Time of Greatness, LEVON &amp; Stony Point
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  Direct links to official streaming profiles and releases:
                </p>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {PRESS_RELEASE_DATA.streamingLinks.map((item) => (
                    <a
                      key={item.url}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-2 rounded-lg border border-slate-200 bg-slate-50/70 px-3.5 py-2.5 text-sm font-medium text-slate-800 hover:border-emerald-300 hover:bg-emerald-50/60 hover:text-emerald-800 transition-colors"
                    >
                      <span className="truncate font-semibold">{item.platform}</span>
                      <ExternalLink className="h-3.5 w-3.5 shrink-0 text-slate-400 group-hover:text-emerald-600" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-700 border border-amber-200">
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
                  className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 transition-colors shrink-0 whitespace-nowrap"
                >
                  <span>Open IMDb Profile</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Side-to-Side Navigation Footer */}
          <div className="mt-14 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-xs">
            <button
              type="button"
              onClick={() => onNavigateSection('innovations')}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Innovations</span>
            </button>
            <button
              type="button"
              onClick={() => onNavigateSection('contact')}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700 transition-colors cursor-pointer"
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
