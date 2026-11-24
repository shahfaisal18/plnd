import { useEffect, useState } from 'react';
import {
  ArrowLeft,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react';
import { CONTACT_INFO } from '../data/siteData';
import { ContactInquiryPrefill, SectionId } from '../types';

interface ContactSectionProps {
  prefill: ContactInquiryPrefill | null;
  onNavigateSection: (section: SectionId) => void;
}

export function ContactSection({ prefill, onNavigateSection }: ContactSectionProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [formError, setFormError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterError, setNewsletterError] = useState<string | null>(null);
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  useEffect(() => {
    if (prefill) {
      setSubject(prefill.subject);
      setMessage(prefill.message);
      setSubmitted(false);
      setFormError(null);
    }
  }, [prefill]);

  const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setFormError('Please complete all required fields before sending.');
      return;
    }
    if (!isValidEmail(email)) {
      setFormError('Please enter a valid email address.');
      return;
    }
    setFormError(null);
    setSubmitted(true);
  };

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidEmail(newsletterEmail)) {
      setNewsletterError('Please enter a valid email address.');
      return;
    }
    setNewsletterError(null);
    setNewsletterSuccess(true);
    setNewsletterEmail('');
  };

  const mailtoDraftHref = `mailto:illureiinc@gmail.com?subject=${encodeURIComponent(
    subject || 'Inquiry — Illurei Entertainment'
  )}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;

  return (
    <div className="w-full bg-white">
      {/* Main Get In Touch Block — Matches illurei.vercel.app Contact layout */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-emerald-600">
              Contact Illurei
            </p>
            <h1 className="mt-2 font-display text-3xl sm:text-5xl font-bold tracking-tight text-slate-900">
              Get In Touch
            </h1>
            <p className="mt-3 text-base text-slate-600">
              Connect with us to learn more or join our initiatives
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Contact Details */}
            <div className="lg:col-span-5 space-y-8">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="space-y-1.5">
                  <h2 className="font-display text-base font-bold text-slate-900">Email</h2>
                  {CONTACT_INFO.emails.map((item) => (
                    <div key={item.address}>
                      <a
                        href={`mailto:${item.address}`}
                        className="text-sm font-medium text-slate-700 hover:text-emerald-700 underline decoration-slate-300 hover:decoration-emerald-600 underline-offset-4 transition-colors block"
                      >
                        {item.address}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="space-y-1.5">
                  <h2 className="font-display text-base font-bold text-slate-900">Phone</h2>
                  {CONTACT_INFO.phones.map((phone) => (
                    <div key={phone.display}>
                      <a
                        href={phone.href}
                        className="text-sm font-medium text-slate-700 hover:text-emerald-700 transition-colors tabular-nums block"
                      >
                        {phone.display}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h2 className="font-display text-base font-bold text-slate-900">Location</h2>
                  {CONTACT_INFO.locations.map((loc) => (
                    <p key={loc} className="text-sm text-slate-600">
                      {loc}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Send Us a Message Card */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
                <h2 className="font-display text-xl font-bold text-slate-900">
                  Send us a message
                </h2>

                {submitted ? (
                  <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50/70 p-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-display text-base font-bold text-slate-900">
                          Message prepared for delivery
                        </h3>
                        <p className="mt-1 text-sm text-slate-600">
                          Thank you, {name}. Your message has been recorded. You can also open it
                          directly in your email client to send to{' '}
                          <a
                            href="mailto:illureiinc@gmail.com"
                            className="font-semibold text-emerald-700 underline"
                          >
                            illureiinc@gmail.com
                          </a>
                          .
                        </p>
                        <div className="mt-4 flex flex-wrap gap-3">
                          <a
                            href={mailtoDraftHref}
                            className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700 transition-colors"
                          >
                            <Send className="h-4 w-4" />
                            <span>Open in Email App</span>
                          </a>
                          <button
                            type="button"
                            onClick={() => {
                              setSubmitted(false);
                              setName('');
                              setEmail('');
                              setSubject('');
                              setMessage('');
                            }}
                            className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                          >
                            Send Another
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-5 space-y-4" noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-name" className="sr-only">
                          Name
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          placeholder="Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-600 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-email" className="sr-only">
                          Email
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-600 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-subject" className="sr-only">
                        Subject
                      </label>
                      <input
                        id="contact-subject"
                        type="text"
                        placeholder="Subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                        className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-600 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="sr-only">
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        rows={4}
                        placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-600 focus:outline-none resize-y"
                      />
                    </div>

                    {formError && (
                      <p className="text-sm font-medium text-rose-600" role="alert">
                        {formError}
                      </p>
                    )}

                    <button
                      type="submit"
                      className="w-full rounded-lg bg-emerald-600 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-700 transition-colors cursor-pointer"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stay Updated Newsletter Band */}
      <section className="bg-slate-50 py-14 border-t border-slate-100">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <h2 className="font-display text-2xl font-bold text-slate-900">Stay Updated</h2>
          <p className="mt-2 text-sm text-slate-600">
            Subscribe to our newsletter for the latest updates on our projects and initiatives.
          </p>

          {newsletterSuccess ? (
            <div className="mt-5 inline-flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-2.5 text-sm font-medium text-emerald-800">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              <span>Thank you for subscribing to Illurei updates.</span>
            </div>
          ) : (
            <form
              onSubmit={handleNewsletter}
              className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 max-w-md mx-auto"
              noValidate
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Your email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Your email address"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
                className="flex-1 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-600 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700 transition-colors cursor-pointer whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          )}
          {newsletterError && (
            <p className="mt-2 text-xs font-medium text-rose-600" role="alert">
              {newsletterError}
            </p>
          )}

          {/* Side-to-Side Return Navigation */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => onNavigateSection('entertainment')}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Entertainment</span>
            </button>
            <button
              type="button"
              onClick={() => onNavigateSection('innovations')}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <span>Return to Innovations</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
