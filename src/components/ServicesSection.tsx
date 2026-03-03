const services = [
  { title: "Bridal Mehndi", desc: "Full bridal mehndi with intricate detailing up to elbows and knees. The perfect design for your special day.", price: "₹5,000", emoji: "👰" },
  { title: "Engagement Mehndi", desc: "Beautiful engagement-ready designs for the ring ceremony that leave a lasting impression.", price: "₹2,500", emoji: "💍" },
  { title: "Guest Mehndi", desc: "Elegant designs for family & guests — quick, beautiful, and event-ready.", price: "₹500", emoji: "👨‍👩‍👧" },
  { title: "Karva Chauth Mehndi", desc: "Traditional Karva Chauth designs with moon, jali & love motifs.", price: "₹1,000", emoji: "🌙" },
  { title: "Traditional & Modern Art Mehndi", desc: "A fusion of classic Indian patterns with contemporary artistic flair.", price: "₹2,000", emoji: "🎨" },
  { title: "Portrait or Theme Mehndi", desc: "Custom portrait, couple, or theme-based mehndi — truly one of a kind.", price: "₹3,500", emoji: "🖼️" },
  { title: "Stylish & Designer Mehndi", desc: "Trendy, Instagram-worthy designer patterns for the modern bride.", price: "₹2,000", emoji: "✨" },
  { title: "Jain Tapasya Mehndi", desc: "Sacred Jain tapasya mehndi designs crafted with devotion and precision.", price: "₹1,500", emoji: "🙏" },
  { title: "Arabic Mehndi", desc: "Elegant flowing Arabic patterns with bold strokes and open spaces.", price: "₹1,500", emoji: "🌿" },
];

import ScrollFadeIn from "@/components/ScrollFadeIn";

const ServicesSection = () => (
  <section id="services" className="section-padding bg-card">
    <div className="container mx-auto text-center">
      <ScrollFadeIn>
        <p className="font-body text-accent tracking-[0.25em] uppercase text-xs mb-3">Our Services</p>
        <h2 className="section-heading mx-auto mb-4">Premium Mehndi Services</h2>
        <p className="section-subheading mx-auto mb-12">
          From bridal to festive — each design crafted with love, tradition, and artistic perfection.
        </p>
      </ScrollFadeIn>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <ScrollFadeIn key={s.title} delay={i * 0.08}>
          <div className="card-luxury p-6 text-left group h-full">
            <span className="text-4xl mb-4 block">{s.emoji}</span>
            <h3 className="font-heading text-xl font-bold text-primary mb-2">{s.title}</h3>
            <p className="font-body text-foreground/70 text-sm mb-4 leading-relaxed">{s.desc}</p>
            <p className="font-heading text-2xl font-bold text-accent mb-4">
              {s.price} <span className="text-sm font-body font-normal text-muted-foreground">onwards</span>
            </p>
            <a
              href="#contact"
              className="inline-block btn-maroon text-sm py-2 px-6 opacity-90 group-hover:opacity-100"
            >
              Book Now
            </a>
          </div>
          </ScrollFadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
