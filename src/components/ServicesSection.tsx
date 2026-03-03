const services = [
  { title: "Bridal Mehndi in Delhi", desc: "Full bridal mehndi with intricate detailing up to elbows and knees.", price: "₹5,000", emoji: "👰" },
  { title: "Engagement Mehndi", desc: "Beautiful engagement-ready designs for the ring ceremony.", price: "₹2,500", emoji: "💍" },
  { title: "Arabic Mehndi Designs", desc: "Elegant flowing Arabic patterns with bold strokes.", price: "₹1,500", emoji: "🌿" },
  { title: "Rajasthani Bridal Mehndi", desc: "Traditional Rajasthani designs with mirror & peacock motifs.", price: "₹4,500", emoji: "🦚" },
  { title: "3D Mehndi", desc: "Stunning three-dimensional mehndi art that stands out.", price: "₹3,000", emoji: "✨" },
  { title: "Festival Mehndi", desc: "Quick & beautiful designs for Karva Chauth, Diwali & more.", price: "₹500", emoji: "🪔" },
];

const ServicesSection = () => (
  <section id="services" className="section-padding bg-card">
    <div className="container mx-auto text-center">
      <p className="font-body text-accent tracking-[0.25em] uppercase text-xs mb-3">Our Services</p>
      <h2 className="section-heading mx-auto mb-4">Premium Mehndi Services</h2>
      <p className="section-subheading mx-auto mb-12">
        From bridal to festive — each design crafted with love, tradition, and artistic perfection.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.title} className="card-luxury p-6 text-left group">
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
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
