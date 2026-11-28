import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ContactSection } from './components/ContactSection';
import { EntertainmentSection } from './components/EntertainmentSection';
import { Footer } from './components/Footer';
import { InnovationsSection } from './components/InnovationsSection';
import { IntroLogoAnimation } from './components/IntroLogoAnimation';
import { LegalDocType, LegalModal } from './components/LegalModal';
import { Navbar } from './components/Navbar';
import { WelcomeSection } from './components/WelcomeSection';
import { ContactInquiryPrefill, SectionId } from './types';

const SECTION_ORDER: Record<SectionId, number> = {
  welcome: 0,
  about: 1,
  entertainment: 2,
  contact: 3,
};

function getInitialSection(): SectionId {
  if (typeof window === 'undefined') return 'welcome';
  const hash = window.location.hash.replace('#', '').toLowerCase();
  if (hash === 'about' || hash === 'entertainment' || hash === 'contact' || hash === 'welcome') {
    return hash;
  }
  return 'welcome';
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction >= 0 ? '4%' : '-4%',
    opacity: 0,
  }),
  center: {
    x: '0%',
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction >= 0 ? '-4%' : '4%',
    opacity: 0,
  }),
};

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionId>(getInitialSection);
  const [direction, setDirection] = useState<number>(1);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [contactPrefill, setContactPrefill] = useState<ContactInquiryPrefill | null>(null);
  const [legalDoc, setLegalDoc] = useState<LegalDocType>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onHashChange = () => {
      const next = getInitialSection();
      setActiveSection((prev) => {
        if (prev !== next) {
          setDirection(SECTION_ORDER[next] >= SECTION_ORDER[prev] ? 1 : -1);
        }
        return next;
      });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const handleSelectSection = useCallback(
    (nextSection: SectionId, prefill?: ContactInquiryPrefill) => {
      if (prefill) {
        setContactPrefill(prefill);
      }
      if (nextSection !== activeSection) {
        const nextDir = SECTION_ORDER[nextSection] >= SECTION_ORDER[activeSection] ? 1 : -1;
        setDirection(nextDir);
        setActiveSection(nextSection);
        window.history.replaceState(null, '', `#${nextSection}`);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [activeSection]
  );

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-sky-100 selection:text-[#006994]">
      <IntroLogoAnimation />

      <Navbar
        activeSection={activeSection}
        onSelectSection={(s) => handleSelectSection(s)}
        isScrolled={isScrolled}
      />

      <main className="flex-1 overflow-x-clip">
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.div
            key={activeSection}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 0.28,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {activeSection === 'welcome' && (
              <WelcomeSection onNavigateSection={(s) => handleSelectSection(s)} />
            )}
            {activeSection === 'about' && (
              <InnovationsSection onNavigateSection={handleSelectSection} />
            )}
            {activeSection === 'entertainment' && (
              <EntertainmentSection onNavigateSection={(s) => handleSelectSection(s)} />
            )}
            {activeSection === 'contact' && (
              <ContactSection
                prefill={contactPrefill}
                onNavigateSection={(s) => handleSelectSection(s)}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer
        onSelectSection={(s) => handleSelectSection(s)}
        onOpenLegal={(doc) => setLegalDoc(doc)}
      />

      <LegalModal docType={legalDoc} onClose={() => setLegalDoc(null)} />
    </div>
  );
}
