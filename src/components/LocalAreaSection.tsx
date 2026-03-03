import { MapPin } from "lucide-react";
import ScrollFadeIn from "@/components/ScrollFadeIn";

const areas = [
  "Anand Vihar", "Karkardooma", "Vivek Vihar", "Preet Vihar",
  "East Delhi", "Laxmi Nagar", "Shahdara", "Noida",
  "Ghaziabad", "Greater Noida", "Faridabad", "Delhi NCR",
];

const LocalAreaSection = () => (
  <section className="section-padding mehndi-pattern-bg">
    <div className="container mx-auto text-center">
      <ScrollFadeIn>
        <p className="font-body text-accent tracking-[0.25em] uppercase text-xs mb-3">Service Areas</p>
        <h2 className="section-heading mx-auto mb-4">Mehndi Artist Near You in Delhi&nbsp;NCR</h2>
        <p className="section-subheading mx-auto mb-10">
          We provide doorstep bridal mehndi service across Delhi and NCR regions.
        </p>
      </ScrollFadeIn>

      <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
        {areas.map((a) => (
          <div
            key={a}
            className="flex items-center gap-2 bg-card border border-border rounded-full px-5 py-2.5 text-sm font-body text-foreground/80 hover:border-accent hover:text-primary transition-colors"
          >
            <MapPin size={14} className="text-accent" />
            {a}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LocalAreaSection;
