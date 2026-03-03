import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-cream py-12">
    <div className="container mx-auto text-center">
      <h3 className="font-heading text-2xl font-bold mb-2">
        R J <span className="text-gold">Mehandi</span> Artist
      </h3>
      <p className="font-body text-cream/60 text-sm mb-6">Best Bridal Mehndi Artist in Delhi NCR | Anand Vihar</p>

      <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
        {["Home", "About", "Services", "Gallery", "Testimonials", "Contact"].map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            className="font-body text-cream/60 hover:text-gold transition-colors tracking-wide"
          >
            {l}
          </a>
        ))}
      </div>

      <div className="border-t border-cream/10 pt-6">
        <p className="font-body text-cream/40 text-xs flex items-center justify-center gap-1">
          Made with <Heart size={12} className="text-gold" /> © 2024 R J Mehandi Artist. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
