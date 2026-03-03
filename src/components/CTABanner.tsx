import { Phone } from "lucide-react";
import ScrollFadeIn from "@/components/ScrollFadeIn";

const CTABanner = () => (
  <section className="py-16 bg-gradient-to-r from-primary via-maroon-light to-primary text-center relative overflow-hidden">
    <div className="absolute inset-0 mehndi-pattern-bg opacity-10" />
    <div className="container mx-auto relative z-10 px-4">
      <ScrollFadeIn>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-cream mb-4">
          Ready to Book Your Dream Mehndi?
        </h2>
        <p className="font-body text-cream/80 mb-8 max-w-xl mx-auto">
          Limited slots available for this wedding season. Secure your date with Delhi's most loved bridal mehndi artist.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#contact" className="btn-gold text-base">Book Bridal Mehndi</a>
          <a href="tel:+919999999999" className="btn-outline-gold text-base border-gold-light text-gold-light hover:bg-gold-light hover:text-foreground flex items-center justify-center gap-2">
            <Phone size={16} /> Call Now
          </a>
        </div>
      </ScrollFadeIn>
    </div>
  </section>
);

export default CTABanner;
