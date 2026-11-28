import { useState } from 'react';
import { ExternalLink, Menu, X } from 'lucide-react';
import { motion } from 'motion/react';
import { INNOVATIONS_EXTERNAL_URL } from '../data/siteData';
import { SectionId } from '../types';

interface NavbarProps {
  activeSection: SectionId;
  onSelectSection: (section: SectionId) => void;
  isScrolled: boolean;
}

const NAV_ITEMS: { id: SectionId; label: string }[] = [
  { id: 'welcome', label: 'Welcome' },
  { id: 'about', label: 'About' },
  { id: 'entertainment', label: 'Entertainment' },
  { id: 'contact', label: 'Contact' },
];

export function Navbar({ activeSection, onSelectSection, isScrolled }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (section: SectionId) => {
    onSelectSection(section);
    setMobileOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs'
          : 'bg-white border-b border-slate-100'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single-line Brand Wordmark matching exact Logo Cyan + Gold */}
        <button
          type="button"
          onClick={() => handleNav('welcome')}
          className="font-display text-2xl font-bold tracking-tight transition-opacity hover:opacity-85 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00adef] cursor-pointer"
          aria-label="Illurei Welcome"
        >
          <span className="text-[#00adef]">illur</span>
          <span className="text-[#f59e0b]">ei</span>
        </button>

        {/* Zone 2: Clean Single-Line Section Links */}
        <nav aria-label="Primary sections" className="hidden md:flex items-center gap-7">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNav(item.id)}
                className={`relative py-2 text-sm font-semibold tracking-wide uppercase transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00adef] ${
                  isActive ? 'text-[#0082b8]' : 'text-slate-600 hover:text-slate-900'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-active-underline"
                    transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                    className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-linear-to-r from-[#00adef] to-[#f59e0b]"
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Single Primary Action -> Innovations Portal */}
        <div className="hidden md:flex items-center shrink-0">
          <a
            href={INNOVATIONS_EXTERNAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-[#0082b8] px-4 py-2 text-sm font-semibold text-white hover:bg-[#006994] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00adef]"
          >
            <span>Innovations</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="inline-flex md:hidden items-center justify-center rounded-lg p-2.5 text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 py-3 space-y-1">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNav(item.id)}
                className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-semibold uppercase tracking-wide transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-sky-50 text-[#0082b8]'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{item.label}</span>
                {isActive && <span className="text-xs font-medium text-[#0082b8]">Active</span>}
              </button>
            );
          })}
          <a
            href={INNOVATIONS_EXTERNAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="mt-2 flex w-full items-center justify-between rounded-lg bg-[#0082b8] px-3 py-2.5 text-sm font-semibold uppercase tracking-wide text-white"
          >
            <span>Innovations Portal</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      )}
    </header>
  );
}
