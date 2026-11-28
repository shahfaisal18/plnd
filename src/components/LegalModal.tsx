import { X } from 'lucide-react';

export type LegalDocType = 'privacy' | 'terms' | null;

interface LegalModalProps {
  docType: LegalDocType;
  onClose: () => void;
}

export function LegalModal({ docType, onClose }: LegalModalProps) {
  if (!docType) return null;

  const isPrivacy = docType === 'privacy';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-label={isPrivacy ? 'Privacy Policy' : 'Terms of Service'}
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl rounded-2xl bg-white p-6 sm:p-8 shadow-xl border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <h3 className="font-display text-xl font-bold text-slate-900">
              {isPrivacy ? 'Privacy Policy' : 'Terms of Service'}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">Illurei Entertainment · www.illureientertainment.com</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-600 max-h-[60vh] overflow-y-auto pr-1">
          {isPrivacy ? (
            <>
              <p>
                Illurei Entertainment respects your privacy. Information submitted through our contact or newsletter forms is used solely to respond to inquiries regarding our environmental innovations, film productions, music, and partnership opportunities.
              </p>
              <p>
                We do not sell or rent personal contact details to third parties. For questions or data removal requests, please email{' '}
                <a href="mailto:illureiinc@gmail.com" className="text-[#0082b8] font-medium underline">
                  illureiinc@gmail.com
                </a>{' '}
                or{' '}
                <a href="mailto:contact@luminouscapital.com" className="text-[#0082b8] font-medium underline">
                  contact@luminouscapital.com
                </a>.
              </p>
            </>
          ) : (
            <>
              <p>
                All original film artwork, promotional stills, music compositions, and environmental innovation concepts presented on this website are the property of Illurei Entertainment and its respective production partners.
              </p>
              <p>
                Materials are provided for informational, press, and partnership evaluation purposes. Unauthorized commercial reproduction or redistribution without written consent is prohibited.
              </p>
            </>
          )}
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
