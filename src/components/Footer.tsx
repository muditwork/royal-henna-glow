import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-cream py-12">
    <div className="container mx-auto text-center">
      <h3 className="font-heading text-2xl font-bold mb-2">
        R J <span className="text-gold">Mehandi</span> Artist
      </h3>
      <p className="font-body text-cream/60 text-sm mb-6">Best Bridal Mehndi Artist in Delhi NCR | Anand Vihar</p>

      <div className="max-w-2xl mx-auto mb-8">
        <p className="font-body text-cream/50 text-xs leading-relaxed">
          R J Mehandi Artist is a professional bridal mehndi service based in Anand Vihar, Delhi. With over 15 years of experience in the art of henna, we specialize in bridal mehndi, Arabic mehndi, Rajasthani mehndi, portrait mehndi, and designer mehndi for weddings, engagements, Karva Chauth, and festive occasions. Our mehndi artist provides doorstep service across Delhi NCR including East Delhi, Laxmi Nagar, Preet Vihar, Vivek Vihar, Karkardooma, Shahdara, Noida, Ghaziabad, Greater Noida, and Faridabad. We use only 100% natural and organic henna to ensure a deep, dark stain that lasts 10 to 15 days. Every design is customized to reflect the bride's personality and love story. Whether you need full bridal mehndi up to elbows and knees, engagement mehndi, guest mehndi for family members, or trendy Instagram-worthy designer patterns, R J Mehandi Artist delivers stunning results every time. We are rated 5 stars by our clients and have created over 188 unique mehndi designs. Book your appointment today and let us make your special day truly memorable with beautiful henna artistry. Contact us for affordable bridal mehndi packages starting from ₹5,000 with a dark stain guarantee.
        </p>
      </div>

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
