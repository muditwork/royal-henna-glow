import { Star } from "lucide-react";
import ScrollFadeIn from "@/components/ScrollFadeIn";

const testimonials = [
  { name: "Priya Sharma", review: "The most beautiful bridal mehndi I've ever seen! My stain was so dark and the design was exactly what I wanted. Highly recommend!", rating: 5 },
  { name: "Anjali Verma", review: "R J ji came to our home and did mehndi for my entire family. So professional, punctual, and talented. Best mehndi artist in Delhi!", rating: 5 },
  { name: "Neha Gupta", review: "I was worried about my sensitive skin but the natural henna was perfect. Beautiful Arabic design and amazing color. Thank you!", rating: 5 },
  { name: "Ritu Kapoor", review: "Booked for my daughter's engagement. Everyone at the event was asking for R J ji's number. Absolutely stunning work!", rating: 5 },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="section-padding bg-card">
    <div className="container mx-auto text-center">
      <ScrollFadeIn>
        <p className="font-body text-accent tracking-[0.25em] uppercase text-xs mb-3">Testimonials</p>
        <h2 className="section-heading mx-auto mb-12">What Our Brides Say</h2>
      </ScrollFadeIn>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((t, i) => (
          <ScrollFadeIn key={t.name} delay={i * 0.1}>
            <div className="card-luxury p-6 text-left h-full">
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="font-body text-foreground/80 text-sm leading-relaxed mb-4 italic">"{t.review}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-heading text-primary font-bold">
                  {t.name[0]}
                </div>
                <span className="font-body font-semibold text-foreground text-sm">{t.name}</span>
              </div>
            </div>
          </ScrollFadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
