import { Phone, Camera, Star, Home } from "lucide-react";
import heroImg from "@/assets/hero-bridal.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Bridal Mehndi Art by R J Mehandi Artist" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center px-4 pt-20">
        <p className="animate-fade-up font-body text-gold-light tracking-[0.3em] uppercase text-xs md:text-sm mb-4">
          Delhi's Most Trusted Bridal Mehndi Artist
        </p>

        <h1 className="animate-fade-up-delay-1 font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-cream leading-tight mb-6">
          Best Mehandi Artist<br />
          <span className="text-gold">in Delhi</span>
        </h1>

        <p className="animate-fade-up-delay-2 font-body text-cream/80 text-sm md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Bridal Mehndi Specialist in Delhi NCR&nbsp;|&nbsp;15+ Years Experience&nbsp;|&nbsp;Dark Stain Guarantee
        </p>

        {/* Trust Badges */}
        <div className="animate-fade-up-delay-2 flex flex-wrap justify-center gap-4 md:gap-8 mb-10">
          {[
            { icon: Star, text: "5-Star Rated" },
            { icon: Camera, text: "188+ Designs" },
            { icon: Home, text: "Doorstep Service" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-gold-light text-sm md:text-base">
              <Icon size={16} className="text-gold" />
              <span>{text}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row justify-center gap-4">
          <a href="#contact" className="btn-gold text-base">
            Book Bridal Mehndi
          </a>
          <a href="tel:+919999999999" className="btn-maroon text-base flex items-center justify-center gap-2">
            <Phone size={16} /> Call Now
          </a>
          <a href="#gallery" className="btn-outline-gold text-base">
            View Gallery
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
