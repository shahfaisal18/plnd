import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

interface IntroLogoAnimationProps {
  onComplete?: () => void;
}

export function IntroLogoAnimation({ onComplete }: IntroLogoAnimationProps) {
  const prefersReducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const duration = prefersReducedMotion ? 450 : 2050;
    const timer = window.setTimeout(() => {
      setVisible(false);
      onComplete?.();
    }, duration);
    return () => window.clearTimeout(timer);
  }, [prefersReducedMotion, onComplete]);

  const handleSkip = () => {
    setVisible(false);
    onComplete?.();
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="illurei-intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-slate-950 text-white"
          role="dialog"
          aria-label="Illurei Entertainment opening animation"
        >
          {/* Ambient Emerald Cinema Radial Glow */}
          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0, scale: 0.82 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none absolute h-[520px] w-[520px] rounded-full bg-radial from-emerald-500/20 via-emerald-700/10 to-transparent blur-2xl"
          />

          {/* Center Emblem + Brand Reveal */}
          <div className="relative flex flex-col items-center px-6 text-center">
            {/* Precision Circular Aperture Ring */}
            <motion.div
              initial={{ scale: 0.84, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-6 flex h-24 w-24 items-center justify-center"
            >
              <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden="true">
                <motion.circle
                  cx="50"
                  cy="50"
                  r="44"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0.4 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="33"
                  fill="none"
                  stroke="rgba(255,255,255,0.22)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  initial={{ opacity: 0, rotate: -30 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                />
              </svg>
              <motion.span
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="absolute font-display text-2xl font-extrabold tracking-tight text-emerald-400"
              >
                i
              </motion.span>
            </motion.div>

            {/* ILLUREI Wordmark */}
            <motion.div
              initial={{ opacity: 0, y: 14, letterSpacing: '0.28em' }}
              animate={{ opacity: 1, y: 0, letterSpacing: '0.14em' }}
              transition={{ duration: 0.75, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase text-white"
            >
              ILLUREI
            </motion.div>

            {/* Hairline Divider */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="my-3.5 h-px w-48 origin-center bg-linear-to-r from-transparent via-emerald-400 to-transparent"
            />

            {/* ENTERTAINMENT Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.72, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-xs sm:text-sm font-semibold uppercase tracking-[0.38em] text-emerald-300"
            >
              ENTERTAINMENT
            </motion.p>
          </div>

          {/* Unobtrusive Skip Action */}
          <button
            type="button"
            onClick={handleSkip}
            className="absolute bottom-8 right-8 rounded-lg border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
          >
            Skip Intro
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
