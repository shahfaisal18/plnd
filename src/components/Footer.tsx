import { ExternalLink } from 'lucide-react';
import { CONTACT_INFO, IMDB_PROFILE_URL, INNOVATIONS_EXTERNAL_URL } from '../data/siteData';
import { SectionId } from '../types';
import { LegalDocType } from './LegalModal';

interface FooterProps {
  onSelectSection: (section: SectionId) => void;
  onOpenLegal: (doc: LegalDocType) => void;
}

export function Footer({ onSelectSection, onOpenLegal }: FooterProps) {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-slate-800">
          {/* Brand matching exact Logo Cyan + Gold */}
          <div>
            <p className="font-display text-2xl font-extrabold tracking-tight">
              <span className="text-[#00adef]">illur</span>
              <span className="text-[#f59e0b]">ei</span>
            </p>
            <p className="text-xs text-slate-400 mt-1">
              entertainment · innovations
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-400 max-w-xs">
              Inspiring healthier choices, breakthroughs &amp; bio-sustainable living through
              innovation, creativity &amp; collaboration.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-sm font-bold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => onSelectSection('welcome')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Welcome
                </button>
              </li>
              <li>
                <a
                  href={INNOVATIONS_EXTERNAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-400 hover:text-[#38bdf8] transition-colors"
                >
                  <span>Innovations</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectSection('about')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  About &amp; Press Release
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectSection('entertainment')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Entertainment
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectSection('contact')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
              <li>
                <a
                  href={IMDB_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-400 hover:text-[#fbbf24] transition-colors"
                >
                  <span>IMDb Profile</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 className="font-display text-sm font-bold text-white">Connect With Us</h3>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed">
              Stay connected for updates and opportunities to get involved.
            </p>
            <div className="mt-4 space-y-1.5 text-sm">
              {CONTACT_INFO.emails.map((item) => (
                <div key={item.address}>
                  <a
                    href={`mailto:${item.address}`}
                    className="text-[#38bdf8] hover:text-[#7dd3fc] transition-colors"
                  >
                    {item.address}
                  </a>
                </div>
              ))}
              <p className="text-xs text-slate-500 pt-1">www.illureientertainment.com</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Illurei Entertainment. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => onOpenLegal('terms')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
