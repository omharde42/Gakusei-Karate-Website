import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import trainingImage1 from "@/assets/karate-training-1.jpg";
import trainingImage2 from "@/assets/karate-training-2.jpg";
import trainingImage3 from "@/assets/karate-training-3.jpg";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [trainingImage1, trainingImage2, trainingImage3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 30000); // Change every 30 seconds

    return () => clearInterval(interval);
  }, [images.length]);
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  const openGoogleForm = () => {
    window.open("https://forms.gle/xv3NibM5x2K8hHWE9", "_blank");
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center pt-32 pb-16 px-4 relative overflow-hidden transform-3d perspective-2000">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-2000 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105'
            }`}
          >
            <img
              src={image}
              alt={`Karate training background ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {/* Translucent overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-karate-black/70 via-karate-dark/80 to-karate-red/60 backdrop-blur-sm"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 text-6xl opacity-10 float-3d shadow-glow-gold z-10">空手</div>
      <div className="absolute bottom-20 right-10 text-6xl opacity-10 float-3d shadow-glow-red z-10" style={{animationDelay: '1s'}}>道</div>
      
      <div className="container max-w-5xl mx-auto text-center relative z-10">
        {/* Logo Section with Hierarchy - Centered */}
        <div className="mb-8 flex flex-col items-center justify-center animate-fadeInUp">
          {/* Main ISKI Logo - Centered */}
          <div className="mb-4 relative animate-slideIn flex justify-center">
            <div className="bg-white p-2 rounded-full shadow-3d-hover border-4 border-karate-gold shadow-glow-gold w-32 h-32 flex items-center justify-center card-3d float-3d"
              style={{ transform: 'translateZ(50px)' }}>
              <img 
                src="/lovable-uploads/596add0b-6e8d-49e8-b05d-d51904889b69.png" 
                alt="ISKI India - International Shotokan Karate Institute" 
                className="w-full h-full object-cover rounded-full hover:scale-125 transition-transform duration-500"
              />
            </div>
          </div>
          
          {/* ISKI Title - Centered */}
          <div className="text-center mb-4">
            <p className="text-sm md:text-base text-karate-black bg-gradient-gold text-white font-bold px-4 py-2 rounded-full shadow-lg font-japanese inline-block">
              International Shotokan Karate Institute - India
            </p>
          </div>

          {/* Affiliation Connector - Centered */}
          <div className="flex items-center justify-center gap-4 mb-4 animate-fadeInUp" style={{animationDelay: '0.3s'}}>
            <div className="h-0.5 w-12 bg-karate-gold"></div>
            <span className="text-karate-black font-semibold font-japanese bg-white/80 px-3 py-1 rounded-full border border-karate-gold">
              Affiliated with
            </span>
            <div className="h-0.5 w-12 bg-karate-gold"></div>
          </div>

          {/* Karate Gakusei Dojo Logo - Centered */}
          <div className="relative animate-slideIn flex justify-center" style={{animationDelay: '0.6s'}}>
            <div className="bg-white p-2 rounded-full shadow-3d border-2 border-karate-red shadow-glow-red w-28 h-28 flex items-center justify-center card-3d float-3d"
              style={{ transform: 'translateZ(40px)', animationDelay: '2s' }}>
              <img 
                src="/lovable-uploads/837f88e6-2182-4535-b125-085a716b02f0.png" 
                alt="The Karate Gakusei Dojo" 
                className="w-full h-full object-cover rounded-full hover:scale-125 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Title Section - Centered */}
        <div className="mb-6 relative animate-fadeInUp text-center" style={{animationDelay: '0.9s'}}>
          <h1 className="text-4xl md:text-6xl font-bold text-karate-black mb-6 font-japanese">
            The Karate Gakusei Dojo
          </h1>
        </div>

        {/* Mission Statement - Centered */}
        <p className="text-xl md:text-2xl mb-8 text-karate-dark max-w-3xl mx-auto font-japanese font-light animate-fadeInUp text-center" style={{animationDelay: '1.2s'}}>
          Our mission is to train students in the art of traditional Shotokan Karate. 
          We don't fight to hurt — we train to grow stronger, sharper, and more confident.
        </p>

        {/* Gichin Funakoshi Quote Section - Enhanced 3D */}
        <div className="relative mb-8 max-w-4xl mx-auto animate-fadeInUp perspective-2000" 
          style={{animationDelay: '1.5s'}}>
          {/* 3D Shadow layers for depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-karate-red/40 to-karate-darkgold/40 rounded-xl blur-2xl transform translate-y-8 translate-x-4" 
            style={{transform: 'translateZ(-40px) translateY(12px) translateX(6px)'}}></div>
          <div className="absolute inset-0 bg-gradient-to-r from-karate-red/30 to-karate-darkgold/30 rounded-xl blur-xl transform translate-y-6 translate-x-3" 
            style={{transform: 'translateZ(-30px) translateY(10px) translateX(5px)'}}></div>
          <div className="absolute inset-0 bg-gradient-to-r from-karate-red/20 to-karate-darkgold/20 rounded-xl blur-lg transform translate-y-4 translate-x-2" 
            style={{transform: 'translateZ(-20px) translateY(8px) translateX(4px)'}}></div>
          
          {/* Main quote card with enhanced 3D effect */}
          <div className="relative bg-gradient-to-br from-karate-red via-red-700 to-karate-darkgold text-white p-10 md:p-12 rounded-xl border-4 border-karate-gold transform hover:scale-105 transition-all duration-500 card-3d" 
            style={{
              transform: 'translateZ(50px) rotateX(2deg)',
              boxShadow: `
                0 25px 50px -12px rgba(220, 38, 38, 0.5),
                0 15px 30px -15px rgba(251, 191, 36, 0.4),
                inset 0 2px 4px rgba(255, 255, 255, 0.2),
                inset 0 -4px 8px rgba(0, 0, 0, 0.3),
                0 0 60px rgba(251, 191, 36, 0.3)
              `
            }}>
            {/* Inner glow effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-white/10 rounded-lg pointer-events-none"></div>
            
            <div className="text-center relative z-10">
              <div className="text-7xl md:text-8xl mb-6 opacity-30 font-japanese text-karate-gold" 
                style={{textShadow: '0 4px 8px rgba(0,0,0,0.3)'}}>❝</div>
              <blockquote className="text-2xl md:text-3xl font-japanese font-bold mb-6 leading-relaxed text-white drop-shadow-lg"
                style={{
                  textShadow: '0 4px 12px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.3)',
                  transform: 'translateZ(20px)'
                }}>
                "The ultimate aim of karate lies not in victory nor defeat, but in the perfection of character of its participants."
              </blockquote>
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="h-1 w-20 bg-gradient-to-r from-transparent via-karate-gold to-transparent rounded-full" 
                  style={{boxShadow: '0 0 10px rgba(251, 191, 36, 0.5)'}}></div>
                <cite className="text-xl md:text-2xl font-japanese font-extrabold text-karate-gold not-italic px-4 py-2 bg-black/20 rounded-full border-2 border-karate-gold/50"
                  style={{
                    textShadow: '0 2px 8px rgba(0,0,0,0.5)',
                    transform: 'translateZ(15px)',
                    boxShadow: '0 4px 12px rgba(251, 191, 36, 0.3), inset 0 2px 4px rgba(255,255,255,0.1)'
                  }}>
                  Master Gichin Funakoshi
                </cite>
                <div className="h-1 w-20 bg-gradient-to-r from-transparent via-karate-gold to-transparent rounded-full"
                  style={{boxShadow: '0 0 10px rgba(251, 191, 36, 0.5)'}}></div>
              </div>
              <p className="text-base md:text-lg mt-3 font-japanese text-karate-gold font-semibold"
                style={{
                  textShadow: '0 2px 6px rgba(0,0,0,0.4)',
                  transform: 'translateZ(10px)'
                }}>Founder of Shotokan Karate</p>
            </div>
          </div>
        </div>

        {/* Action Buttons - Centered */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6 animate-fadeInUp" style={{animationDelay: '1.8s'}}>
          <Button 
            onClick={openGoogleForm}
            className="bg-gradient-red hover:scale-110 transform transition-all duration-500 text-white px-8 py-6 text-lg font-japanese font-medium shadow-3d-hover hover:shadow-glow-red border-2 border-karate-red hover:border-karate-gold btn-3d"
          >
            Join Our Dojo
          </Button>
          <Button 
            variant="outline" 
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="border-2 border-karate-gold text-karate-black hover:bg-gradient-gold hover:text-white hover:scale-110 transform transition-all duration-500 px-8 py-6 text-lg font-japanese font-medium shadow-3d-hover btn-3d"
          >
            Learn More
          </Button>
        </div>

        {/* Contact Information - Centered */}
        <div className="mt-12 text-center animate-fadeInUp" style={{animationDelay: '2.1s'}}>
          <p className="text-karate-black font-semibold font-japanese bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full inline-block shadow-lg border border-karate-gold">
            Contact: +91 7620238222
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
