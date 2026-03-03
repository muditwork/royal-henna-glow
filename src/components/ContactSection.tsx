import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ScrollFadeIn from "@/components/ScrollFadeIn";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", event: "", date: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi, I'm ${form.name}. I'd like to book mehndi for my ${form.event} on ${form.date}. ${form.message}`;
    window.open(`https://wa.me/919999999999?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="contact" className="section-padding mehndi-pattern-bg">
      <div className="container mx-auto">
        <ScrollFadeIn>
          <div className="text-center mb-12">
            <p className="font-body text-accent tracking-[0.25em] uppercase text-xs mb-3">Get in Touch</p>
            <h2 className="section-heading">Book Your Bridal Mehndi</h2>
          </div>
        </ScrollFadeIn>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="card-luxury p-8">
            <h3 className="font-heading text-2xl font-bold text-primary mb-6">Contact Details</h3>
            <div className="space-y-5">
              {[
                { icon: Phone, label: "Phone", value: "+91 99999 99999", href: "tel:+919999999999" },
                { icon: Mail, label: "Email", value: "rjmehandiartist@gmail.com", href: "mailto:rjmehandiartist@gmail.com" },
                { icon: MapPin, label: "Location", value: "Anand Vihar, Delhi NCR" },
                { icon: Clock, label: "Available", value: "7 AM – 10 PM, All Days" },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-body text-xs text-muted-foreground uppercase tracking-wide">{label}</p>
                    {href ? (
                      <a href={href} className="font-body font-semibold text-foreground hover:text-primary transition-colors">{value}</a>
                    ) : (
                      <p className="font-body font-semibold text-foreground">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="mt-6 rounded-xl overflow-hidden border border-border aspect-video bg-muted flex items-center justify-center">
              <iframe
                title="R J Mehandi Artist Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.5!2d77.316!3d28.646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM4JzQ1LjYiTiA3N8KwMTgnNTcuNiJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Booking Form */}
          <div className="card-luxury p-8">
            <h3 className="font-heading text-2xl font-bold text-primary mb-6">Booking Form</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { name: "name" as const, label: "Your Name", type: "text", placeholder: "Enter your name" },
                { name: "phone" as const, label: "Phone Number", type: "tel", placeholder: "+91 XXXXX XXXXX" },
              ].map((f) => (
                <div key={f.name}>
                  <label className="font-body text-xs text-muted-foreground uppercase tracking-wide mb-1 block">{f.label}</label>
                  <input
                    type={f.type}
                    required
                    placeholder={f.placeholder}
                    value={form[f.name]}
                    onChange={(e) => setForm({ ...form, [f.name]: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow"
                  />
                </div>
              ))}

              <div>
                <label className="font-body text-xs text-muted-foreground uppercase tracking-wide mb-1 block">Event Type</label>
                <select
                  required
                  value={form.event}
                  onChange={(e) => setForm({ ...form, event: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                >
                  <option value="">Select event type</option>
                  <option>Wedding</option>
                  <option>Engagement</option>
                  <option>Karva Chauth</option>
                  <option>Festival</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="font-body text-xs text-muted-foreground uppercase tracking-wide mb-1 block">Event Date</label>
                <input
                  type="date"
                  required
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                />
              </div>

              <div>
                <label className="font-body text-xs text-muted-foreground uppercase tracking-wide mb-1 block">Message</label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your requirements..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none"
                />
              </div>

              <button type="submit" className="btn-gold w-full text-base mt-2">
                Book Now via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
