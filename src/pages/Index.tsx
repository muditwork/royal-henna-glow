import Navbar from "@/components/Navbar";
import UrgencyBanner from "@/components/UrgencyBanner";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import CTABanner from "@/components/CTABanner";
import GallerySection from "@/components/GallerySection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsSection from "@/components/TestimonialsSection";
import LocalAreaSection from "@/components/LocalAreaSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <UrgencyBanner />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CTABanner />
      <GallerySection />
      <WhyChooseUs />
      <TestimonialsSection />
      <LocalAreaSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <FloatingButtons />
    </main>
  );
};

export default Index;
