import { Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => (
  <>
    {/* WhatsApp floating button */}
    <a
      href="https://wa.me/919838984387?text=Hi%2C%20I%20want%20to%20book%20bridal%20mehndi%20in%20Delhi."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-4 md:bottom-8 md:right-8 z-50 w-14 h-14 rounded-full bg-[#25D366] text-cream flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={26} />
    </a>

    {/* Mobile sticky call button */}
    <div className="fixed bottom-0 left-0 right-0 md:hidden z-50 bg-primary p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.2)]">
      <a
        href="tel:+919838984387"
        className="btn-gold w-full flex items-center justify-center gap-2 text-base py-3"
      >
        <Phone size={18} /> Call Now — Book Bridal Mehndi
      </a>
    </div>
  </>
);

export default FloatingButtons;
