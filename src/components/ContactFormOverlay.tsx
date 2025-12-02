import { useEffect } from "react";

type ContactFormOverlayProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ContactFormOverlay({
  isOpen,
  onClose,
}: ContactFormOverlayProps) {
  // Guard for SSR
  const canUseDOM =
    typeof window !== "undefined" && typeof document !== "undefined";

  useEffect(() => {
    if (!canUseDOM || !isOpen) return;

    const scrollY = window.scrollY;
    const { style } = document.body;

    style.position = "fixed";
    style.top = `-${scrollY}px`;
    style.width = "100%";

    return () => {
      style.position = "";
      style.top = "";
      window.scrollTo(0, scrollY);
    };
  }, [isOpen, canUseDOM]);

  if (!isOpen) return null;

  return (
    <div
      className="overlay fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      role="dialog"
      aria-modal="true"
      aria-label="Contact form"
      onClick={(e) => e.currentTarget === e.target && onClose()}
    >
      <div className="iframe-container rounded-lg relative w-11/12 md:w-3/4 h-[80vh] shadow-lg">
        <button
          className="btn btn-circle btn-lg absolute -top-4 -right-4 md:top-2 md:right-2 bg-error text-error-content hover:bg-error/80 shadow-xl z-10"
          onClick={onClose}
          aria-label="Close contact form"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfyO6gHuGkORu2BPgmduoPRKaW1Wvpww_VuxuUtrRcgwqpcBQ/viewform?embedded=true"
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="Contact Form"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}
