import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { CLIENT_LOGO_URL } from '../data/siteData';

interface IntroLogoAnimationProps {
  onComplete?: () => void;
}

export function IntroLogoAnimation({ onComplete }: IntroLogoAnimationProps) {
  const prefersReducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const duration = prefersReducedMotion ? 500 : 2300;
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
          key="illurei-logo-intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-white"
          role="dialog"
          aria-label="Illurei Entertainment opening logo presentation"
        >
          {/* Subtle Cyan & Gold Brand Aura matching the original logo beams */}
          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1.05 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none absolute h-[520px] w-[520px] rounded-full bg-radial from-[#00adef]/14 via-[#f59e0b]/8 to-transparent blur-2xl"
          />

          {/* Subtle Light Sweep Across Stage */}
          <motion.div
            aria-hidden="true"
            initial={{ x: '-120%', opacity: 0 }}
            animate={{ x: '120%', opacity: [0, 0.45, 0] }}
            transition={{ duration: 1.4, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none absolute inset-y-0 w-1/3 skew-x-[-22deg] bg-linear-to-r from-transparent via-[#00adef]/12 to-transparent"
          />

          {/* Original Uploaded Client Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: 'blur(6px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-2xl px-6"
          >
            <img
              src={CLIENT_LOGO_URL}
              alt="Illurei Entertainment Innovations official logo"
              referrerPolicy="no-referrer"
              className="mx-auto w-full max-h-[58vh] object-contain select-none"
            />
          </motion.div>

          {/* Subtle Corporate Accent Bar Below Logo */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 h-0.5 w-36 origin-center rounded-full bg-linear-to-r from-[#00adef] via-slate-300 to-[#f59e0b]"
          />

          <button
            type="button"
            onClick={handleSkip}
            className="absolute bottom-8 right-8 rounded-lg border border-slate-200 bg-white/90 px-4 py-2 text-xs font-semibold text-slate-600 shadow-xs hover:border-[#00adef] hover:text-[#0082b8] transition-colors cursor-pointer"
          >
            Skip Intro
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
