import { useState } from "react";
import { X } from "lucide-react";
import heroImg from "@/assets/hero-bridal.jpg";
import aboutImg from "@/assets/about-bridal.jpg";
import ScrollFadeIn from "@/components/ScrollFadeIn";

const categories = ["All", "Bridal", "Arabic", "Rajasthani", "3D", "Festival"];

const galleryImages = [
  { src: heroImg, cat: "Bridal", alt: "Bridal mehndi design Delhi" },
  { src: aboutImg, cat: "Bridal", alt: "Bridal henna art" },
  { src: heroImg, cat: "Arabic", alt: "Arabic mehndi design" },
  { src: aboutImg, cat: "Rajasthani", alt: "Rajasthani mehndi" },
  { src: heroImg, cat: "3D", alt: "3D mehndi art" },
  { src: aboutImg, cat: "Festival", alt: "Festival mehndi design" },
  { src: heroImg, cat: "Bridal", alt: "Premium bridal mehndi" },
  { src: aboutImg, cat: "Arabic", alt: "Arabic henna art Delhi" },
];

const GallerySection = () => {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = filter === "All" ? galleryImages : galleryImages.filter((i) => i.cat === filter);

  return (
    <section id="gallery" className="section-padding mehndi-pattern-bg">
      <div className="container mx-auto text-center">
      <ScrollFadeIn>
        <p className="font-body text-accent tracking-[0.25em] uppercase text-xs mb-3">Our Work</p>
        <h2 className="section-heading mx-auto mb-2">Mehndi Design Gallery</h2>
        <p className="section-subheading mx-auto mb-8">188+ Designs Available — Browse Our Best Work</p>
      </ScrollFadeIn>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-5 py-2 rounded-full text-sm font-body tracking-wide transition-all duration-200 ${
                filter === c
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card text-foreground/70 hover:bg-muted border border-border"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {filtered.map((img, i) => (
            <div
              key={i}
              className="break-inside-avoid cursor-pointer group overflow-hidden rounded-xl"
              onClick={() => setLightbox(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-6 right-6 text-cream" aria-label="Close">
            <X size={32} />
          </button>
          <img src={lightbox} alt="Mehndi design" className="max-w-full max-h-[90vh] rounded-xl object-contain" />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
