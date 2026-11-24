import { useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { EntertainmentProject } from '../types';

interface LightboxModalProps {
  projects: EntertainmentProject[];
  activeIndex: number | null;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
}

export function LightboxModal({
  projects,
  activeIndex,
  onClose,
  onNavigate,
}: LightboxModalProps) {
  const isOpen = activeIndex !== null && projects[activeIndex] !== undefined;
  const current = isOpen && activeIndex !== null ? projects[activeIndex] : null;

  useEffect(() => {
    if (!isOpen || activeIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        onNavigate((activeIndex - 1 + projects.length) % projects.length);
      }
      if (e.key === 'ArrowRight') {
        onNavigate((activeIndex + 1) % projects.length);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, activeIndex, projects.length, onClose, onNavigate]);

  if (!isOpen || !current || activeIndex === null) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4 sm:p-6 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-label={`${current.title} artwork preview`}
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[92vh] w-full max-w-5xl flex-col lg:flex-row overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close gallery preview"
          className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-slate-950/75 text-white hover:bg-slate-800 transition-colors cursor-pointer"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Artwork Viewer — preserves full natural aspect ratio */}
        <div className="relative flex flex-1 items-center justify-center bg-slate-950 p-4 sm:p-6 min-h-[320px] max-h-[65vh] lg:max-h-[90vh]">
          <img
            src={current.image}
            alt={current.imageAlt}
            referrerPolicy="no-referrer"
            className="max-h-full max-w-full object-contain rounded-lg"
          />

          <button
            type="button"
            onClick={() => onNavigate((activeIndex - 1 + projects.length) % projects.length)}
            aria-label="Previous project artwork"
            className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/80 text-white hover:bg-emerald-600 transition-colors cursor-pointer"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => onNavigate((activeIndex + 1) % projects.length)}
            aria-label="Next project artwork"
            className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/80 text-white hover:bg-emerald-600 transition-colors cursor-pointer"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Details Column */}
        <div className="w-full lg:w-80 shrink-0 border-t lg:border-t-0 lg:border-l border-slate-800 p-6 text-slate-100 flex flex-col justify-between overflow-y-auto">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              {current.format}
            </p>
            <h3 className="mt-1 font-display text-2xl font-bold text-white">
              {current.title}
            </h3>
            <p className="mt-1 text-sm text-slate-400">{current.subtitle}</p>
            <p className="mt-4 text-sm italic text-emerald-200/90">
              “{current.tagline}”
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              {current.description}
            </p>
            {current.credits && (
              <p className="mt-4 text-xs text-slate-400 border-t border-slate-800 pt-3">
                {current.credits}
              </p>
            )}
          </div>
          <p className="mt-6 text-xs font-mono tabular-nums text-slate-500">
            Artwork {activeIndex + 1} of {projects.length}
          </p>
        </div>
      </div>
    </div>
  );
}
