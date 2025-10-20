import { useState, useEffect } from "react";
import trainingImage1 from "@/assets/karate-training-1.jpg";
import trainingImage2 from "@/assets/karate-training-2.jpg";
import trainingImage3 from "@/assets/karate-training-3.jpg";

const TrainingSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [trainingImage1, trainingImage2, trainingImage3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 30000); // Change every 30 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden perspective-2000">
      {/* Translucent background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-karate-black/60 via-karate-dark/70 to-karate-red/40 backdrop-blur-sm"></div>
      
      {/* Decorative 3D elements */}
      <div className="absolute top-20 left-20 text-9xl opacity-5 float-3d text-karate-gold">武</div>
      <div className="absolute bottom-20 right-20 text-9xl opacity-5 float-3d text-karate-red" style={{animationDelay: '1.5s'}}>道</div>
      
      <div className="container max-w-7xl mx-auto relative z-10">
        {/* 3D Movie-style frame */}
        <div className="relative perspective-2000 transform-3d">
          {/* Multiple shadow layers for depth */}
          <div className="absolute inset-0 bg-karate-gold/30 rounded-2xl blur-3xl transform translate-y-12 translate-x-8 scale-95" 
            style={{transform: 'translateZ(-60px) translateY(16px) translateX(12px)'}}></div>
          <div className="absolute inset-0 bg-karate-red/20 rounded-2xl blur-2xl transform translate-y-8 translate-x-6 scale-97" 
            style={{transform: 'translateZ(-40px) translateY(12px) translateX(8px)'}}></div>
          <div className="absolute inset-0 bg-black/40 rounded-2xl blur-xl transform translate-y-4 translate-x-3 scale-98" 
            style={{transform: 'translateZ(-20px) translateY(6px) translateX(4px)'}}></div>
          
          {/* Main 3D container */}
          <div className="relative card-3d transform hover:scale-105 transition-all duration-700"
            style={{
              transform: 'translateZ(80px) rotateX(3deg) rotateY(-2deg)',
              boxShadow: `
                0 40px 80px -20px rgba(0, 0, 0, 0.8),
                0 20px 40px -10px rgba(220, 38, 38, 0.4),
                0 0 100px rgba(251, 191, 36, 0.3),
                inset 0 2px 8px rgba(255, 255, 255, 0.1),
                inset 0 -8px 16px rgba(0, 0, 0, 0.4)
              `
            }}>
            
            {/* Cinema-style border */}
            <div className="absolute inset-0 rounded-2xl border-8 border-karate-gold pointer-events-none z-20"
              style={{
                boxShadow: 'inset 0 0 40px rgba(251, 191, 36, 0.3), 0 0 40px rgba(251, 191, 36, 0.2)'
              }}></div>
            
            {/* Slideshow container */}
            <div className="relative overflow-hidden rounded-2xl bg-black" style={{aspectRatio: '16/9'}}>
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-2000 ease-in-out ${
                    index === currentSlide 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-0 scale-105'
                  }`}
                  style={{
                    transform: index === currentSlide 
                      ? 'translateZ(0px)' 
                      : 'translateZ(-50px)',
                    transitionProperty: 'opacity, transform'
                  }}
                >
                  <img
                    src={image}
                    alt={`Karate training session ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {/* Translucent overlay for cinematic effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-karate-black/60 via-transparent to-karate-dark/30 pointer-events-none"></div>
                </div>
              ))}
              
              {/* Vignette effect */}
              <div className="absolute inset-0 pointer-events-none"
                style={{
                  boxShadow: 'inset 0 0 100px 30px rgba(0,0,0,0.6)'
                }}></div>
            </div>
            
            {/* Film strip effect */}
            <div className="absolute -left-4 top-0 bottom-0 w-8 bg-karate-black border-l-4 border-r-4 border-karate-gold opacity-80 pointer-events-none z-20"
              style={{
                backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(251, 191, 36, 0.3) 20px, rgba(251, 191, 36, 0.3) 25px)'
              }}></div>
            <div className="absolute -right-4 top-0 bottom-0 w-8 bg-karate-black border-l-4 border-r-4 border-karate-gold opacity-80 pointer-events-none z-20"
              style={{
                backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(251, 191, 36, 0.3) 20px, rgba(251, 191, 36, 0.3) 25px)'
              }}></div>
          </div>
          
          {/* Slide indicators */}
          <div className="flex justify-center gap-3 mt-8 relative z-20">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-500 rounded-full ${
                  index === currentSlide
                    ? 'w-12 h-3 bg-karate-gold shadow-glow-gold'
                    : 'w-3 h-3 bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
                style={{
                  transform: index === currentSlide ? 'translateZ(20px)' : 'translateZ(0px)',
                  boxShadow: index === currentSlide ? '0 0 20px rgba(251, 191, 36, 0.6)' : 'none'
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Title section */}
        <div className="text-center mt-12 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-karate-gold mb-4 font-japanese"
            style={{
              textShadow: '0 4px 12px rgba(0,0,0,0.8), 0 0 30px rgba(251, 191, 36, 0.4)'
            }}>
            Training Excellence
          </h2>
          <p className="text-xl text-white/90 font-japanese max-w-2xl mx-auto"
            style={{textShadow: '0 2px 8px rgba(0,0,0,0.6)'}}>
            Witness the dedication and discipline of our karate students in action
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrainingSlideshow;