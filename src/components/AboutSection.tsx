import { CheckCircle } from "lucide-react";
import aboutImg from "@/assets/about-bridal.jpg";
import ScrollFadeIn from "@/components/ScrollFadeIn";

const highlights = [
  "15+ Years Experience",
  "100% Natural Henna",
  "Customized Bridal Designs",
  "Deep & Long-Lasting Color",
];

const AboutSection = () => (
  <section id="about" className="section-padding mehndi-pattern-bg">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
        <ScrollFadeIn>
          <div className="relative group">
            <div className="absolute -inset-3 bg-gradient-to-br from-gold/20 to-primary/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity" />
            <img
              src={aboutImg}
              alt="Bridal mehndi design by R J Mehandi Artist Delhi"
              className="relative rounded-2xl w-full object-cover aspect-[3/4] shadow-xl"
              loading="lazy"
            />
          </div>
        </ScrollFadeIn>

        <ScrollFadeIn delay={0.2}>
          <div>
            <p className="font-body text-accent tracking-[0.25em] uppercase text-xs mb-3">About Us</p>
            <h2 className="section-heading leading-tight mb-6">
              Delhi's Trusted Bridal Mehndi Artist in Anand&nbsp;Vihar
            </h2>
            <p className="font-body text-foreground/80 leading-relaxed mb-8">
              At R J Mehandi Artist, we believe every bride deserves mehndi that tells her unique love story. 
              With over 15 years of mastering the art of bridal henna, we create stunning, intricate designs 
              that leave lasting impressions — and lasting stains. Based in Anand Vihar, we proudly serve 
              brides across Delhi NCR with doorstep service, premium natural henna, and personalized artistry.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((h) => (
                <div key={h} className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-accent flex-shrink-0" />
                  <span className="font-body font-semibold text-foreground">{h}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-gold inline-block mt-8">
              Book a Consultation
            </a>
          </div>
        </ScrollFadeIn>
      </div>
    </div>
  </section>
);

export default AboutSection;
