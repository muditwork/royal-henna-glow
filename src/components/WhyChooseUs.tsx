import { Shield, Clock, IndianRupee, MapPin, Leaf, Award } from "lucide-react";
import ScrollFadeIn from "@/components/ScrollFadeIn";

const reasons = [
  { icon: Shield, title: "Dark Stain Guarantee", desc: "We guarantee deep, rich mehndi color that lasts." },
  { icon: Clock, title: "Professional & Punctual", desc: "Always on time, always prepared for your big day." },
  { icon: IndianRupee, title: "Affordable Bridal Packages", desc: "Luxury mehndi artistry at honest, transparent prices." },
  { icon: MapPin, title: "Doorstep Service Across Delhi NCR", desc: "We come to you — home, venue, or hotel." },
  { icon: Leaf, title: "Natural & Skin-Friendly Mehndi", desc: "100% organic henna, safe for all skin types." },
  { icon: Award, title: "15+ Years of Experience", desc: "Thousands of happy brides across Delhi." },
];

const WhyChooseUs = () => (
  <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
    <div className="absolute inset-0 mehndi-pattern-bg opacity-10" />
    <div className="container mx-auto relative z-10 text-center">
      <ScrollFadeIn>
        <p className="font-body text-gold-light tracking-[0.25em] uppercase text-xs mb-3">Why Choose Us</p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-cream tracking-wide mb-12">
          Why Brides Trust R J Mehandi
        </h2>
      </ScrollFadeIn>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map(({ icon: Icon, title, desc }, i) => (
          <ScrollFadeIn key={title} delay={i * 0.1}>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gold/20 flex items-center justify-center">
                <Icon size={28} className="text-gold" />
              </div>
              <h3 className="font-heading text-lg font-bold text-cream mb-2">{title}</h3>
              <p className="font-body text-cream/70 text-sm leading-relaxed">{desc}</p>
            </div>
          </ScrollFadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
