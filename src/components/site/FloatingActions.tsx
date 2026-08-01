import { useEffect, useState } from "react";
import { Phone, ArrowUp, MessageCircle } from "lucide-react";

export function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col items-end gap-3">
      {show && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="grid h-11 w-11 place-items-center rounded-full bg-white shadow-lg border border-border text-ink hover:bg-brand-soft"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
      <a
        href="tel:+916380605550"
        className="grid h-12 w-12 place-items-center rounded-full bg-brand text-white shadow-xl"
        aria-label="Call"
      >
        <Phone className="h-5 w-5" />
      </a>
      <a
        href="https://wa.me/917338936926?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20your%20products."
        target="_blank"
        rel="noreferrer"
        className="grid h-14 w-14 place-items-center rounded-full text-white shadow-xl animate-pulse-ring"
        style={{ background: "#25D366" }}
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
