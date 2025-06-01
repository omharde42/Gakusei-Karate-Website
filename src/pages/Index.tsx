
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ScheduleSection from "@/components/ScheduleSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import PosterSection from "@/components/PosterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-gradient-karate min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ScheduleSection />
      <GallerySection />
      <ContactSection />
      <PosterSection />
      <Footer />
    </div>
  );
};

export default Index;
