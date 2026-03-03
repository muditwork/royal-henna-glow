import { Play } from "lucide-react";
import { useState } from "react";
import ScrollFadeIn from "@/components/ScrollFadeIn";

const videos = [
  {
    title: "Priya's Bridal Mehndi Experience",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    videoId: "dQw4w9WgXcQ",
    name: "Priya Sharma",
    event: "Bridal Mehndi",
  },
  {
    title: "Anjali's Engagement Mehndi",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    videoId: "dQw4w9WgXcQ",
    event: "Engagement",
    name: "Anjali Verma",
  },
  {
    title: "Neha's Karva Chauth Design",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    videoId: "dQw4w9WgXcQ",
    event: "Karva Chauth",
    name: "Neha Gupta",
  },
];

const VideoTestimonialsSection = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="section-padding bg-background mehndi-pattern-bg">
      <div className="container mx-auto text-center">
        <ScrollFadeIn>
          <p className="font-body text-accent tracking-[0.25em] uppercase text-xs mb-3">
            Video Testimonials
          </p>
          <h2 className="section-heading mx-auto mb-4">
            Hear From Our Happy Brides
          </h2>
          <p className="section-subheading mx-auto mb-12">
            Real stories, real emotions — watch what our clients have to say about their mehndi experience.
          </p>
        </ScrollFadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((v, i) => (
            <ScrollFadeIn key={v.title} delay={i * 0.1}>
              <div className="card-luxury overflow-hidden text-left">
                <div className="relative aspect-video bg-foreground/5">
                  {activeVideo === v.videoId ? (
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${v.videoId}?autoplay=1`}
                      title={v.title}
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    />
                  ) : (
                    <button
                      onClick={() => setActiveVideo(v.videoId)}
                      className="absolute inset-0 w-full h-full flex items-center justify-center group cursor-pointer"
                    >
                      <div className="absolute inset-0 bg-foreground/30" />
                      <div className="relative z-10 w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                        <Play size={28} className="text-primary-foreground ml-1" />
                      </div>
                      <span className="absolute bottom-4 left-4 right-4 z-10 text-sm font-body text-primary-foreground font-semibold">
                        ▶ Watch {v.name}'s Story
                      </span>
                    </button>
                  )}
                </div>
                <div className="p-5">
                  <span className="text-xs font-body uppercase tracking-wider text-accent">{v.event}</span>
                  <h3 className="font-heading text-lg font-bold text-primary mt-1">{v.title}</h3>
                  <p className="font-body text-sm text-muted-foreground mt-1">— {v.name}</p>
                </div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>

        <p className="font-body text-muted-foreground text-sm mt-10 italic">
          Replace placeholder videos with your real client testimonial videos from YouTube.
        </p>
      </div>
    </section>
  );
};

export default VideoTestimonialsSection;
