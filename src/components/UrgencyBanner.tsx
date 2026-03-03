import { Sparkles } from "lucide-react";

const UrgencyBanner = () => (
  <div className="bg-primary py-3 text-center">
    <p className="font-body text-cream text-sm flex items-center justify-center gap-2">
      <Sparkles size={14} className="text-gold" />
      <span className="font-semibold">Wedding Season Bookings Filling Fast</span> — Book Your Date Today!
      <Sparkles size={14} className="text-gold" />
    </p>
  </div>
);

export default UrgencyBanner;
