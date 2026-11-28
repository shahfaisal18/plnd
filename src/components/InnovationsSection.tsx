import { useRef, useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
  Building2,
  ExternalLink,
  FileText,
  Leaf,
  Mail,
  Maximize2,
  Music,
  Recycle,
  Zap,
} from 'lucide-react';
import {
  BIO_CITIES_PILLARS,
  ENTERTAINMENT_PROJECTS,
  INNOVATIONS_EXTERNAL_URL,
  MISSION_STEPS,
  PRESS_RELEASE_DATA,
  PRESS_RELEASE_PDF_URL,
  VISION_METRICS,
} from '../data/siteData';
import { ContactInquiryPrefill, SectionId } from '../types';
import {
  BioCityVisionIllustration,
  MobilityInitiativeIllustration,
} from './BioCityIllustration';
import { LightboxModal } from './LightboxModal';

interface InnovationsSectionProps {
  onNavigateSection: (section: SectionId, prefill?: ContactInquiryPrefill) => void;
}

const PILLAR_ICONS = {
  leaf: Leaf,
  zap: Zap,
  recycle: Recycle,
  building: Building2,
} as const;

export function InnovationsSection({ onNavigateSection }: InnovationsSectionProps) {
  const visionRef = useRef<HTMLElement | null>(null);
  const missionRef = useRef<HTMLElement | null>(null);

  const [donationAmount, setDonationAmount] = useState<string>('$50');
  const [partnerTier, setPartnerTier] = useState<string>('$25/mo');
  const [customDonation, setCustomDonation] = useState<string>('');
  const [customPartner, setCustomPartner] = useState<string>('');
  const [showPdfPreview, setShowPdfPreview] = useState<boolean>(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const scrollToElement = (el: HTMLElement | null) => {
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleDonationSubmit = () => {
    const selected = donationAmount === 'Custom' && customDonation ? customDonation : donationAmount;
    onNavigateSection('contact', {
      subject: `One-Time Contribution (${selected})`,
      message: `Hello Illurei team,\n\nI would like to support the Bio Cities Project with a one-time contribution of ${selected}. Please share the next steps.`,
    });
  };

  const handlePartnerSubmit = () => {
    const selected = partnerTier === 'Custom' && customPartner ? customPartner : partnerTier;
    onNavigateSection('contact', {
      subject: `Partnership Inquiry (${selected})`,
      message: `Hello Illurei team,\n\nI would like to join as a monthly partner at the ${selected} tier to support ongoing Bio Cities initiatives.`,
    });
  };

  const handleSponsorSubmit = () => {
    onNavigateSection('contact', {
      subject: 'Corporate Sponsorship Inquiry',
      message:
        'Hello Illurei team,\n\nWe are interested in corporate sponsorship, showcase event participation, and collaboration opportunities.',
    });
  };

  return (
    <div className="w-full">
      {/* Corporate About & Innovations Hero Banner — Exact Logo Slate, Cyan & Gold Palette */}
      <section className="relative overflow-hidden bg-linear-to-br from-slate-950 via-[#072a40] to-[#005f8a] text-white">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-16 top-12 h-56 w-56 rounded-full border border-[#00adef]/25 bg-[#00adef]/8" />
          <div className="absolute left-1/4 top-10 h-16 w-16 rotate-12 rounded-2xl border border-[#f59e0b]/25 bg-[#f59e0b]/10" />
          <div className="absolute right-20 top-14 h-44 w-44 rounded-full border border-white/15 bg-white/5" />
          <div className="absolute bottom-12 left-16 h-24 w-24 rotate-45 rounded-xl bg-white/5 border border-white/10" />
          <div className="absolute bottom-8 right-1/4 h-28 w-14 rounded-full border border-[#00adef]/20 bg-white/5" />
        </div>

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-16 pb-16 sm:pt-24 sm:pb-24 text-center">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#38bdf8] mb-4">
            About Illurei · Innovations &amp; Press Room
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white [text-wrap:balance] mx-auto max-w-3xl">
            Inspiring Healthy Future Cities
          </h1>
          <p className="mt-5 text-base sm:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Breakthroughs &amp; Bio-Sustainable Living Through Innovation, Creativity &amp; Collaboration
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href={INNOVATIONS_EXTERNAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#00adef] px-6 py-3 text-sm font-semibold text-slate-950 shadow-sm hover:bg-[#38bdf8] transition-colors whitespace-nowrap"
            >
              <span>Visit Illurei Innovations</span>
              <ExternalLink className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={() => scrollToElement(visionRef.current)}
              className="rounded-lg border border-white/75 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-xs hover:bg-white/20 transition-colors cursor-pointer whitespace-nowrap"
            >
              Explore Our Vision
            </button>
          </div>

          <button
            type="button"
            onClick={() => scrollToElement(visionRef.current)}
            className="mt-12 inline-flex flex-col items-center gap-1.5 text-xs font-medium text-sky-100/90 hover:text-white transition-colors cursor-pointer"
          >
            <span>Scroll to discover</span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </button>
        </div>
      </section>

      {/* About Illurei & Official Press Release ("USA FOR IMMEDIATE RELEASE.pdf") */}
      <section className="bg-slate-50 py-16 sm:py-24 border-b border-slate-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <p className="text-sm font-semibold text-[#0082b8]">Corporate Overview</p>
              <h2 className="mt-1 font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                About Illurei
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600">
                Illurei is at the forefront of creating innovative solutions for healthier, more
                sustainable urban environments. Our interdisciplinary team combines expertise in urban
                planning, environmental science, technology, and creative design to reimagine how
                cities can function in harmony with nature while meeting the needs of their
                inhabitants.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                We believe that entertainment, art, and creativity are crucial in engaging audiences
                on a deeper level about how to digest information, feel safe, and lead a healthy
                life. Through our bio cities project, we&apos;re developing practical frameworks for
                implementing these ideas in real-world settings.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-800 font-medium">
                {PRESS_RELEASE_DATA.aboutCompany}
              </p>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative flex h-64 w-64 sm:h-72 sm:w-72 items-center justify-center rounded-full bg-white border border-slate-200/80 shadow-sm p-8 text-center">
                <div className="absolute inset-4 rounded-full border border-dashed border-[#00adef]/40" />
                <div className="relative space-y-2">
                  <span className="font-display text-3xl font-extrabold tracking-tight">
                    <span className="text-[#00adef]">illur</span>
                    <span className="text-[#f59e0b]">ei</span>
                  </span>
                  <p className="text-xs font-medium uppercase tracking-widest text-slate-500">
                    Entertainment · Innovations
                  </p>
                  <p className="text-xs text-slate-500 pt-1">
                    Los Angeles · Vienna · New York
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Official USA Press Release Content & Original Hyperlinks */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xs space-y-8">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-100">
              <div className="space-y-2 max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#0082b8]">
                  {PRESS_RELEASE_DATA.banner} · {PRESS_RELEASE_DATA.dateline}
                </p>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 leading-snug [text-wrap:balance]">
                  {PRESS_RELEASE_DATA.headline}
                </h3>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                <a
                  href={PRESS_RELEASE_PDF_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#0082b8] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#006994] transition-colors whitespace-nowrap"
                >
                  <FileText className="h-4 w-4" />
                  <span>Open Original PDF</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <button
                  type="button"
                  onClick={() => setShowPdfPreview((prev) => !prev)}
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer whitespace-nowrap"
                >
                  <span>{showPdfPreview ? 'Hide PDF Preview' : 'Preview PDF'}</span>
                </button>
              </div>
            </div>

            {/* Full Press Release Copy */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4 text-sm sm:text-base leading-relaxed text-slate-600">
                <p>{PRESS_RELEASE_DATA.lead}</p>

                <blockquote className="rounded-xl border border-sky-200/80 bg-sky-50/50 p-5 text-slate-800">
                  <p className="italic leading-relaxed">{PRESS_RELEASE_DATA.quote}</p>
                  <footer className="mt-2 text-xs font-semibold uppercase tracking-wider text-[#0082b8]">
                    — {PRESS_RELEASE_DATA.quoteAttribution}
                  </footer>
                </blockquote>

                <p>{PRESS_RELEASE_DATA.internationalAcclaim}</p>
                <p>{PRESS_RELEASE_DATA.musicSection}</p>
                <p className="text-slate-700 font-medium">{PRESS_RELEASE_DATA.closing}</p>
              </div>

              {/* All Original Streaming & Music Platform Hyperlinks from PDF */}
              <div className="lg:col-span-5 space-y-5">
                <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 sm:p-6">
                  <div className="flex items-center gap-2.5">
                    <Music className="h-4 w-4 text-[#d97706]" />
                    <h4 className="font-display text-base font-bold text-slate-900">
                      Music &amp; Streaming Platforms
                    </h4>
                  </div>
                  <p className="mt-1.5 text-xs text-slate-500">
                    Official links from the Illurei press release:
                  </p>

                  <ul className="mt-4 space-y-2.5">
                    {PRESS_RELEASE_DATA.streamingLinks.map((item) => (
                      <li key={item.url}>
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center justify-between gap-3 rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-medium text-slate-800 hover:border-[#00adef] hover:bg-sky-50/50 hover:text-[#0082b8] transition-colors"
                        >
                          <div className="min-w-0">
                            <p className="text-[11px] font-semibold uppercase tracking-wider text-[#0082b8]">
                              {item.platform}
                            </p>
                            <p className="truncate text-sm font-semibold text-slate-900 group-hover:text-[#0082b8]">
                              {item.label}
                            </p>
                          </div>
                          <ExternalLink className="h-4 w-4 shrink-0 text-slate-400 group-hover:text-[#0082b8]" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Press Office Media Contact */}
                <div className="rounded-xl border border-slate-200 bg-white p-5">
                  <div className="flex items-center gap-2.5">
                    <Mail className="h-4 w-4 text-[#0082b8]" />
                    <h4 className="font-display text-sm font-bold text-slate-900">
                      Media Contact
                    </h4>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">
                    {PRESS_RELEASE_DATA.mediaContact.office}
                  </p>
                  <a
                    href={`mailto:${PRESS_RELEASE_DATA.mediaContact.email}`}
                    className="mt-1 inline-block text-sm font-semibold text-[#0082b8] hover:text-[#006994] underline underline-offset-4"
                  >
                    {PRESS_RELEASE_DATA.mediaContact.email}
                  </a>
                </div>
              </div>
            </div>

            {showPdfPreview && (
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
                <iframe
                  src={PRESS_RELEASE_PDF_URL}
                  title="USA For Immediate Release Official PDF"
                  className="h-[520px] w-full"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Our Vision — Reimagining Urban Environments */}
      <section ref={visionRef} className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6">
              <p className="text-sm font-semibold text-[#0082b8]">Our Vision</p>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 [text-wrap:balance]">
                Reimagining Urban Environments
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600">
                Through technology, innovation, research, and education, we are inviting people to
                collaborate and create hubs for breakthroughs and bio-sustainable living. Our
                approach combines entertainment, art, and creativity to engage audiences on a deeper
                level about how to digest information, feel safe, and lead a healthy life.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-slate-100">
                {VISION_METRICS.map((metric, idx) => (
                  <div key={metric.value}>
                    <p
                      className={`font-display text-3xl sm:text-4xl font-bold tabular-nums ${
                        idx === 1 ? 'text-[#d97706]' : 'text-[#0082b8]'
                      }`}
                    >
                      {metric.value}
                    </p>
                    <p className="mt-1 text-xs sm:text-sm text-slate-500 leading-snug">
                      {metric.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <BioCityVisionIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* Bio Cities Project */}
      <section className="bg-slate-50 py-16 sm:py-24 border-y border-slate-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Bio Cities Project
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Creating sustainable urban environments that harmonize with nature
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BIO_CITIES_PILLARS.map((pillar, idx) => {
              const IconComponent = PILLAR_ICONS[pillar.icon];
              const isGold = idx % 2 === 1;
              return (
                <div
                  key={pillar.id}
                  className="rounded-xl border border-slate-200/80 bg-white p-6 shadow-xs hover:shadow-md hover:border-[#00adef]/60 transition-all duration-200"
                >
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                      isGold
                        ? 'bg-amber-50 text-[#d97706]'
                        : 'bg-sky-50 text-[#0082b8]'
                    }`}
                  >
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-slate-900">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Initiatives & Productions Strip */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Featured Initiatives
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6">
              <MobilityInitiativeIllustration />
            </div>
            <div className="lg:col-span-6">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
                Zero-Emission Mobility
              </h3>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Redesigning transportation systems to prioritize walking, cycling, and electric
                public transit to reduce pollution and improve health.
              </p>
              <div className="mt-6">
                <button
                  type="button"
                  onClick={() => onNavigateSection('entertainment')}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0082b8] hover:text-[#006994] transition-colors cursor-pointer"
                >
                  <span>Explore Entertainment &amp; Media Storytelling</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* 5 Client Visuals Showcase */}
          <div className="mt-20 pt-16 border-t border-slate-100">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-[#d97706]">
                  Entertainment, Art &amp; Creativity
                </p>
                <h3 className="mt-1 font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                  Film, Series &amp; Live Stage Productions
                </h3>
              </div>
              <button
                type="button"
                onClick={() => onNavigateSection('entertainment')}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0082b8] hover:text-[#006994] transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>Open Full Entertainment &amp; Music Studio</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 items-stretch">
              {ENTERTAINMENT_PROJECTS.map((project, idx) => (
                <article
                  key={project.id}
                  className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs hover:shadow-md hover:border-[#00adef]/60 transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => setLightboxIndex(idx)}
                    className={`relative w-full overflow-hidden cursor-zoom-in focus-visible:outline-2 focus-visible:outline-[#00adef] aspect-[2/3] ${
                      project.id === 'levon-live' || project.id === 'the-thought'
                        ? 'bg-slate-950'
                        : 'bg-slate-50'
                    }`}
                    aria-label={`View ${project.title} full artwork`}
                  >
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                    <span className="absolute right-2.5 top-2.5 inline-flex items-center justify-center rounded-lg bg-slate-900/75 p-1.5 text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-xs">
                      <Maximize2 className="h-3.5 w-3.5" />
                    </span>
                  </button>
                  <div className="p-3.5 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-[#0082b8]">
                        {project.format}
                      </p>
                      <h4 className="mt-0.5 font-display text-sm font-bold text-slate-900">
                        {project.title}
                      </h4>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Mission */}
      <section ref={missionRef} className="bg-slate-50 py-16 sm:py-24 border-t border-slate-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Join Our Mission
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {MISSION_STEPS.map((item, idx) => (
              <div key={item.step} className="relative">
                <div className="flex items-center gap-4">
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white tabular-nums ${
                      idx % 2 === 1 ? 'bg-[#d97706]' : 'bg-[#0082b8]'
                    }`}
                  >
                    {item.step}
                  </span>
                  <div className="h-px flex-1 bg-slate-200" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Our Vision */}
      <section className="bg-white py-16 sm:py-24 border-t border-slate-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Support Our Vision
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Help us create healthier, more sustainable urban environments
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* One-Time Donation */}
            <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-xs">
              <div>
                <h3 className="font-display text-lg font-bold text-slate-900">
                  One-Time Donation
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Make a direct impact with a one-time contribution to our projects.
                </p>

                <div className="mt-5 grid grid-cols-2 gap-2.5">
                  {['$25', '$50', '$100', 'Custom'].map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => setDonationAmount(amt)}
                      className={`rounded-lg border px-3 py-2 text-sm font-medium transition-colors cursor-pointer ${
                        donationAmount === amt
                          ? 'border-[#0082b8] bg-sky-50 text-[#006994]'
                          : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {amt}
                    </button>
                  ))}
                </div>

                {donationAmount === 'Custom' && (
                  <input
                    type="text"
                    placeholder="Enter amount (e.g. $250)"
                    value={customDonation}
                    onChange={(e) => setCustomDonation(e.target.value)}
                    className="mt-3 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-[#00adef] focus:outline-none"
                  />
                )}
              </div>

              <button
                type="button"
                onClick={handleDonationSubmit}
                className="mt-6 w-full rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                Donate Now
              </button>
            </div>

            {/* Become a Partner */}
            <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-xs">
              <div>
                <h3 className="font-display text-lg font-bold text-slate-900">
                  Become a Partner
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Join our community of monthly supporters to sustain our ongoing initiatives.
                </p>

                <div className="mt-5 grid grid-cols-2 gap-2.5">
                  {['$10/mo', '$25/mo', '$50/mo', 'Custom'].map((tier) => (
                    <button
                      key={tier}
                      type="button"
                      onClick={() => setPartnerTier(tier)}
                      className={`rounded-lg border px-3 py-2 text-sm font-medium transition-colors cursor-pointer ${
                        partnerTier === tier
                          ? 'border-[#0082b8] bg-sky-50 text-[#006994]'
                          : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {tier}
                    </button>
                  ))}
                </div>

                {partnerTier === 'Custom' && (
                  <input
                    type="text"
                    placeholder="Enter monthly tier (e.g. $100/mo)"
                    value={customPartner}
                    onChange={(e) => setCustomPartner(e.target.value)}
                    className="mt-3 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-[#00adef] focus:outline-none"
                  />
                )}
              </div>

              <button
                type="button"
                onClick={handlePartnerSubmit}
                className="mt-6 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                Join as Partner
              </button>
            </div>

            {/* Corporate Sponsorship */}
            <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-xs">
              <div>
                <h3 className="font-display text-lg font-bold text-slate-900">
                  Corporate Sponsorship
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Align your brand with sustainable innovation and make a significant impact.
                </p>
                <ul className="mt-5 space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#00adef] shrink-0" />
                    <span>Brand visibility on our platforms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#f59e0b] shrink-0" />
                    <span>Participation in showcase events</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#00adef] shrink-0" />
                    <span>Collaboration opportunities</span>
                  </li>
                </ul>
              </div>

              <button
                type="button"
                onClick={handleSponsorSubmit}
                className="mt-6 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                Contact for Details
              </button>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-slate-500">
            For other ways to support our work or for specific project funding, please{' '}
            <button
              type="button"
              onClick={() => onNavigateSection('contact')}
              className="font-semibold text-[#0082b8] hover:text-[#006994] underline cursor-pointer"
            >
              contact us
            </button>
            .
          </p>

          {/* Side-to-Side Section Progression Bar */}
          <div className="mt-14 flex items-center justify-between rounded-2xl border border-sky-200/80 bg-slate-50 px-6 py-5 shadow-xs">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#0082b8]">
                Next Section
              </p>
              <p className="font-display text-lg font-bold text-slate-900">
                Entertainment — Film, Television &amp; Music
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigateSection('entertainment')}
              className="inline-flex items-center gap-2 rounded-lg bg-[#0082b8] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#006994] transition-colors cursor-pointer whitespace-nowrap"
            >
              <span>Explore Entertainment</span>
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
