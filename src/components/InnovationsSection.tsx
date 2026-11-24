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
      {/* Hero Banner — Preserves illurei.vercel.app emerald gradient & floating geometric canvas */}
      <section className="relative overflow-hidden bg-linear-to-br from-emerald-400 via-emerald-500 to-teal-700 text-white">
        {/* Subtle geometric motifs matching reference */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-16 top-12 h-56 w-56 rounded-full border border-white/15 bg-white/5" />
          <div className="absolute left-1/4 top-10 h-16 w-16 rotate-12 rounded-2xl border border-white/15 bg-white/10" />
          <div className="absolute right-20 top-14 h-44 w-44 rounded-full border border-white/15 bg-white/5" />
          <div className="absolute bottom-12 left-16 h-24 w-24 rotate-45 rounded-xl bg-white/5 border border-white/10" />
          <div className="absolute bottom-8 right-1/4 h-28 w-14 rounded-full border border-white/15 bg-white/5" />
        </div>

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-16 pb-16 sm:pt-24 sm:pb-24 text-center">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-emerald-50/90 mb-4">
            Illurei Environmental Innovations
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white [text-wrap:balance] mx-auto max-w-3xl">
            Inspiring Healthy Future Cities
          </h1>
          <p className="mt-5 text-base sm:text-xl text-emerald-50/95 max-w-2xl mx-auto leading-relaxed">
            Breakthroughs &amp; Bio-Sustainable Living Through Innovation, Creativity &amp; Collaboration
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => scrollToElement(visionRef.current)}
              className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-emerald-700 shadow-sm hover:bg-emerald-50 transition-colors cursor-pointer whitespace-nowrap"
            >
              Explore Our Vision
            </button>
            <button
              type="button"
              onClick={() => scrollToElement(missionRef.current)}
              className="rounded-lg border border-white/80 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-xs hover:bg-white/20 transition-colors cursor-pointer whitespace-nowrap"
            >
              Join The Movement
            </button>
          </div>

          <button
            type="button"
            onClick={() => scrollToElement(visionRef.current)}
            className="mt-12 inline-flex flex-col items-center gap-1.5 text-xs font-medium text-emerald-50/90 hover:text-white transition-colors cursor-pointer"
          >
            <span>Scroll to discover</span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </button>
        </div>
      </section>

      {/* Our Vision — Reimagining Urban Environments */}
      <section ref={visionRef} className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6">
              <p className="text-sm font-semibold text-emerald-600">Our Vision</p>
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
                {VISION_METRICS.map((metric) => (
                  <div key={metric.value}>
                    <p className="font-display text-3xl sm:text-4xl font-bold text-emerald-600 tabular-nums">
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
            {BIO_CITIES_PILLARS.map((pillar) => {
              const IconComponent = PILLAR_ICONS[pillar.icon];
              return (
                <div
                  key={pillar.id}
                  className="rounded-xl border border-slate-200/80 bg-white p-6 shadow-xs hover:shadow-md hover:border-emerald-200 transition-all duration-200"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
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

      {/* Featured Initiatives */}
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
                  className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition-colors cursor-pointer"
                >
                  <span>Explore Entertainment &amp; Media Storytelling</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Creative & Media Storytelling Showcase — Displays all 5 uploaded client visuals */}
          <div className="mt-20 pt-16 border-t border-slate-100">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-emerald-600">
                  Entertainment, Art &amp; Creativity
                </p>
                <h3 className="mt-1 font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                  Film, Series &amp; Live Stage Productions
                </h3>
              </div>
              <button
                type="button"
                onClick={() => onNavigateSection('entertainment')}
                className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>Open Full Entertainment &amp; Music Studio</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 items-stretch">
              {ENTERTAINMENT_PROJECTS.map((project, idx) => (
                <article
                  key={project.id}
                  className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs hover:shadow-md hover:border-emerald-200 transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => setLightboxIndex(idx)}
                    className={`relative w-full overflow-hidden cursor-zoom-in focus-visible:outline-2 focus-visible:outline-emerald-600 aspect-[2/3] ${
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
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-emerald-600">
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

      {/* About Illurei & Official Press Release */}
      <section className="bg-slate-50 py-16 sm:py-24 border-y border-slate-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
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
              <p className="mt-4 text-base leading-relaxed text-slate-700 font-medium">
                {PRESS_RELEASE_DATA.aboutCompany}
              </p>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative flex h-64 w-64 sm:h-72 sm:w-72 items-center justify-center rounded-full bg-white border border-slate-200/80 shadow-sm p-8 text-center">
                <div className="absolute inset-4 rounded-full border border-dashed border-emerald-200" />
                <div className="relative space-y-2">
                  <span className="font-display text-3xl font-extrabold tracking-tight text-emerald-600">
                    illurei
                  </span>
                  <p className="text-xs font-medium uppercase tracking-widest text-slate-500">
                    Innovations &amp; Entertainment
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
                <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600">
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
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700 transition-colors whitespace-nowrap"
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

                <blockquote className="rounded-xl border border-emerald-200/70 bg-emerald-50/40 p-5 text-slate-800">
                  <p className="italic leading-relaxed">{PRESS_RELEASE_DATA.quote}</p>
                  <footer className="mt-2 text-xs font-semibold uppercase tracking-wider text-emerald-700">
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
                    <Music className="h-4 w-4 text-emerald-600" />
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
                          className="group flex items-center justify-between gap-3 rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-medium text-slate-800 hover:border-emerald-300 hover:bg-emerald-50/50 hover:text-emerald-800 transition-colors"
                        >
                          <div className="min-w-0">
                            <p className="text-[11px] font-semibold uppercase tracking-wider text-emerald-600">
                              {item.platform}
                            </p>
                            <p className="truncate text-sm font-semibold text-slate-900 group-hover:text-emerald-800">
                              {item.label}
                            </p>
                          </div>
                          <ExternalLink className="h-4 w-4 shrink-0 text-slate-400 group-hover:text-emerald-600" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Press Office Media Contact */}
                <div className="rounded-xl border border-slate-200 bg-white p-5">
                  <div className="flex items-center gap-2.5">
                    <Mail className="h-4 w-4 text-emerald-600" />
                    <h4 className="font-display text-sm font-bold text-slate-900">
                      Media Contact
                    </h4>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">
                    {PRESS_RELEASE_DATA.mediaContact.office}
                  </p>
                  <a
                    href={`mailto:${PRESS_RELEASE_DATA.mediaContact.email}`}
                    className="mt-1 inline-block text-sm font-semibold text-emerald-700 hover:text-emerald-800 underline underline-offset-4"
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

      {/* Join Our Mission */}
      <section ref={missionRef} className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Join Our Mission
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {MISSION_STEPS.map((item) => (
              <div key={item.step} className="relative">
                <div className="flex items-center gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white tabular-nums">
                    {item.step}
                  </span>
                  <div className="h-px flex-1 bg-emerald-200/80" />
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
      <section className="bg-slate-50 py-16 sm:py-24 border-t border-slate-100">
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
                          ? 'border-emerald-600 bg-emerald-50 text-emerald-800'
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
                    className="mt-3 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-emerald-600 focus:outline-none"
                  />
                )}
              </div>

              <button
                type="button"
                onClick={handleDonationSubmit}
                className="mt-6 w-full rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 transition-colors cursor-pointer"
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
                          ? 'border-emerald-600 bg-emerald-50 text-emerald-800'
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
                    className="mt-3 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-emerald-600 focus:outline-none"
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
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-600 shrink-0" />
                    <span>Brand visibility on our platforms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-600 shrink-0" />
                    <span>Participation in showcase events</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-600 shrink-0" />
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
              className="font-semibold text-emerald-700 hover:text-emerald-800 underline cursor-pointer"
            >
              contact us
            </button>
            .
          </p>

          {/* Side-to-Side Section Progression Bar */}
          <div className="mt-14 flex items-center justify-between rounded-2xl border border-emerald-200/70 bg-white px-6 py-5 shadow-xs">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
                Next Section
              </p>
              <p className="font-display text-lg font-bold text-slate-900">
                Entertainment — Film, Television &amp; Music
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigateSection('entertainment')}
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700 transition-colors cursor-pointer whitespace-nowrap"
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
