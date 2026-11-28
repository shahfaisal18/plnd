import { useState } from 'react';
import {
  ArrowRight,
  Building2,
  Clapperboard,
  ExternalLink,
  FileText,
  Globe2,
  Mail,
  Sparkles,
} from 'lucide-react';
import { motion } from 'motion/react';
import {
  CLIENT_LOGO_URL,
  INNOVATIONS_EXTERNAL_URL,
  VISION_METRICS,
} from '../data/siteData';
import { SectionId } from '../types';

interface WelcomeSectionProps {
  onNavigateSection: (section: SectionId) => void;
}

interface GlowCoordinates {
  x: number;
  y: number;
  active: boolean;
}

export function WelcomeSection({ onNavigateSection }: WelcomeSectionProps) {
  const [innovationsGlow, setInnovationsGlow] = useState<GlowCoordinates>({
    x: 50,
    y: 50,
    active: false,
  });
  const [entertainmentGlow, setEntertainmentGlow] = useState<GlowCoordinates>({
    x: 50,
    y: 50,
    active: false,
  });

  const updateGlow = (
    e: React.MouseEvent<HTMLElement>,
    setter: React.Dispatch<React.SetStateAction<GlowCoordinates>>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setter({ x, y, active: true });
  };

  return (
    <div className="w-full">
      {/* Corporate Welcome Stage inspired by the Client Logo & Reference Aesthetic */}
      <section className="relative overflow-hidden bg-white pt-10 pb-16 sm:pt-14 sm:pb-24 border-b border-slate-100">
        {/* Subtle Radiating Geometric Beams echoing the Client Logo */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-16 -translate-x-1/2 h-[540px] w-[880px] rounded-full bg-radial from-[#00adef]/8 via-[#f59e0b]/5 to-transparent blur-3xl" />
          <svg
            viewBox="0 0 1440 700"
            className="absolute inset-0 h-full w-full opacity-45"
            preserveAspectRatio="xMidYMid slice"
          >
            <line x1="720" y1="220" x2="120" y2="30" stroke="#00adef" strokeWidth="1" strokeOpacity="0.22" />
            <line x1="720" y1="220" x2="1320" y2="30" stroke="#00adef" strokeWidth="1" strokeOpacity="0.22" />
            <line x1="720" y1="220" x2="180" y2="660" stroke="#00adef" strokeWidth="1" strokeOpacity="0.18" />
            <line x1="720" y1="220" x2="1260" y2="660" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.24" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Corporate Logo Header Presentation */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mx-auto mb-5 max-w-md sm:max-w-lg">
              <img
                src={CLIENT_LOGO_URL}
                alt="Illurei Entertainment Innovations corporate logo"
                referrerPolicy="no-referrer"
                className="mx-auto h-40 sm:h-52 w-auto object-contain"
              />
            </div>

            <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 [text-wrap:balance]">
              Global Innovation Meets{' '}
              <span className="text-[#0082b8]">Cinema</span> &amp;{' '}
              <span className="text-[#d97706]">Culture</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              International environmental architecture, bio-sustainable city frameworks, feature film
              &amp; television production, and original music. Select a division to continue.
            </p>
          </motion.div>

          {/* Two Prominent Interactive Options: 1. INNOVATIONS  |  2. ENTERTAINMENT */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {/* Option 1: INNOVATIONS -> redirects to https://illurei.vercel.app/ */}
            <motion.a
              href={INNOVATIONS_EXTERNAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              onMouseMove={(e) => updateGlow(e, setInnovationsGlow)}
              onMouseLeave={() => setInnovationsGlow((prev) => ({ ...prev, active: false }))}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#00adef] hover:shadow-[0_18px_45px_-12px_rgba(0,173,239,0.42)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00adef]"
            >
              {/* Mouse-tracking Cyan Glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 transition-opacity duration-300"
                style={{
                  opacity: innovationsGlow.active ? 1 : 0,
                  background: `radial-gradient(420px circle at ${innovationsGlow.x}% ${innovationsGlow.y}%, rgba(0, 173, 239, 0.16), transparent 65%)`,
                }}
              />
              {/* Ambient Top Edge Glow Bar */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-[#00adef] via-sky-300 to-[#0082b8] opacity-75 group-hover:opacity-100 transition-opacity"
              />

              <div className="relative">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-[#0082b8] border border-sky-200/80 group-hover:bg-[#00adef] group-hover:text-white group-hover:border-[#00adef] transition-colors duration-200">
                    <Globe2 className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 group-hover:text-[#0082b8] transition-colors">
                    01 · Division
                  </span>
                </div>

                <h2 className="mt-7 font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 group-hover:text-[#0082b8] transition-colors">
                  INNOVATIONS
                </h2>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
                  Inspiring healthy future cities through bio-sustainable urban architecture,
                  zero-emission mobility, renewable energy, and circular economy research.
                </p>
              </div>

              <div className="relative mt-8 pt-6 border-t border-slate-100 flex items-center justify-between gap-4">
                <span className="text-sm font-semibold text-[#0082b8] group-hover:text-[#006994] transition-colors">
                  Enter Innovations Portal
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-50 text-[#0082b8] group-hover:bg-[#00adef] group-hover:text-white group-hover:translate-x-0.5 transition-all duration-200">
                  <ExternalLink className="h-4 w-4" />
                </span>
              </div>
            </motion.a>

            {/* Option 2: ENTERTAINMENT -> navigates to Entertainment section */}
            <motion.button
              type="button"
              onClick={() => onNavigateSection('entertainment')}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              onMouseMove={(e) => updateGlow(e, setEntertainmentGlow)}
              onMouseLeave={() => setEntertainmentGlow((prev) => ({ ...prev, active: false }))}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 p-8 sm:p-10 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#f59e0b] hover:shadow-[0_18px_45px_-12px_rgba(245,158,11,0.45)] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f59e0b]"
            >
              {/* Mouse-tracking Golden-Amber Glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 transition-opacity duration-300"
                style={{
                  opacity: entertainmentGlow.active ? 1 : 0,
                  background: `radial-gradient(420px circle at ${entertainmentGlow.x}% ${entertainmentGlow.y}%, rgba(245, 158, 11, 0.24), transparent 65%)`,
                }}
              />
              {/* Ambient Top Edge Glow Bar */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-[#f59e0b] via-[#fde047] to-[#f59e0b] opacity-80 group-hover:opacity-100 transition-opacity"
              />

              <div className="relative">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/15 text-[#fbbf24] border border-amber-400/30 group-hover:bg-[#f59e0b] group-hover:text-slate-950 group-hover:border-[#f59e0b] transition-colors duration-200">
                    <Clapperboard className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 group-hover:text-[#fbbf24] transition-colors">
                    02 · Division
                  </span>
                </div>

                <h2 className="mt-7 font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white group-hover:text-[#fde047] transition-colors">
                  ENTERTAINMENT
                </h2>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-300">
                  Original feature films, U.S. television series, official music releases including
                  Time of Greatness, United &amp; LEVON, and live stage productions.
                </p>
              </div>

              <div className="relative mt-8 pt-6 border-t border-slate-800 flex items-center justify-between gap-4">
                <span className="text-sm font-semibold text-[#fbbf24] group-hover:text-[#fde047] transition-colors">
                  Explore Film, TV &amp; Music
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/15 text-[#fbbf24] group-hover:bg-[#f59e0b] group-hover:text-slate-950 group-hover:translate-x-0.5 transition-all duration-200">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </motion.button>
          </div>
        </div>
      </section>

      {/* Corporate Overview Strip — Preserves illurei.vercel.app Bio Cities & Press Room access */}
      <section className="bg-slate-50 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#0082b8]">
                Corporate Mandate
              </p>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 [text-wrap:balance]">
                Inspiring Healthy Future Cities &amp; Global Storytelling
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
                Founded by Ivon Skula, Illurei bridges ecological urban innovation and
                international film, television, and music production across Los Angeles, New York,
                and Vienna.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => onNavigateSection('about')}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#0082b8] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#006994] transition-colors cursor-pointer"
                >
                  <FileText className="h-4 w-4" />
                  <span>About &amp; Press Release</span>
                </button>
                <button
                  type="button"
                  onClick={() => onNavigateSection('contact')}
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 hover:border-[#00adef] hover:text-[#0082b8] transition-colors cursor-pointer"
                >
                  <Mail className="h-4 w-4" />
                  <span>Corporate Contact</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-3 gap-4 sm:gap-6">
              {VISION_METRICS.map((metric, idx) => (
                <div
                  key={metric.value}
                  className="rounded-xl border border-slate-200/80 bg-white p-5 shadow-xs"
                >
                  <p
                    className={`font-display text-3xl sm:text-4xl font-bold tabular-nums ${
                      idx === 1 ? 'text-[#d97706]' : 'text-[#0082b8]'
                    }`}
                  >
                    {metric.value}
                  </p>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-snug">
                    {metric.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-slate-200/70">
            <button
              type="button"
              onClick={() => onNavigateSection('about')}
              className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 text-left hover:border-[#00adef] transition-colors cursor-pointer"
            >
              <Building2 className="h-5 w-5 text-[#0082b8] shrink-0" />
              <div>
                <p className="font-display text-sm font-bold text-slate-900">Bio Cities &amp; Vision</p>
                <p className="text-xs text-slate-500">Urban sustainability &amp; official USA release</p>
              </div>
            </button>
            <button
              type="button"
              onClick={() => onNavigateSection('entertainment')}
              className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 text-left hover:border-[#f59e0b] transition-colors cursor-pointer"
            >
              <Sparkles className="h-5 w-5 text-[#d97706] shrink-0" />
              <div>
                <p className="font-display text-sm font-bold text-slate-900">Film, TV &amp; Music</p>
                <p className="text-xs text-slate-500">Chill Pill, The Thought, Greenwash &amp; United</p>
              </div>
            </button>
            <button
              type="button"
              onClick={() => onNavigateSection('contact')}
              className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 text-left hover:border-[#00adef] transition-colors cursor-pointer"
            >
              <Mail className="h-5 w-5 text-[#0082b8] shrink-0" />
              <div>
                <p className="font-display text-sm font-bold text-slate-900">Press &amp; Partnerships</p>
                <p className="text-xs text-slate-500">Vienna · New York · Los Angeles</p>
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
