import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'motion/react';
import { SectionId } from '../types';

interface NavbarProps {
  activeSection: SectionId;
  onSelectSection: (section: SectionId) => void;
  isScrolled: boolean;
}

const NAV_ITEMS: { id: SectionId; label: string }[] = [
  { id: 'innovations', label: 'Innovations' },
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
        {/* Zone 1: Single-line Brand Wordmark */}
        <button
          type="button"
          onClick={() => handleNav('innovations')}
          className="font-display text-2xl font-extrabold tracking-tight text-emerald-600 hover:text-emerald-700 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-600 cursor-pointer"
          aria-label="Illurei home"
        >
          illurei
        </button>

        {/* Zone 2: Three Main Section Switcher Links */}
        <nav aria-label="Primary sections" className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNav(item.id)}
                className={`relative py-2 text-sm font-semibold tracking-wide uppercase transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-600 ${
                  isActive ? 'text-emerald-700' : 'text-slate-600 hover:text-slate-900'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-active-underline"
                    transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                    className="absolute inset-x-0 bottom-0 h-0.5 bg-emerald-600 rounded-full"
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Single Primary Action */}
        <div className="hidden md:flex items-center shrink-0">
          <button
            type="button"
            onClick={() => handleNav('contact')}
            className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700 transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
          >
            Join Mission
          </button>
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
                    ? 'bg-emerald-50 text-emerald-700'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{item.label}</span>
                {isActive && <span className="text-xs font-medium text-emerald-600">Active</span>}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
}
