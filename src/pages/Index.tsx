
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import AboutSection from "@/components/AboutSection";
import ScheduleSection from "@/components/ScheduleSection";
import GallerySection from "@/components/GallerySection";
import EventSection from "@/components/EventSection";
import ContactSection from "@/components/ContactSection";
import PosterSection from "@/components/PosterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-gradient-karate min-h-screen">
      <Navbar />
      <HeroSection />
      <IntroSection />
      <AboutSection />
      <ScheduleSection />
      <GallerySection />
      <EventSection />
      <ContactSection />
      <PosterSection />
      <Footer />
    </div>
  );
};

export default Index;
