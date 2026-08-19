import { useEffect, useRef, useState } from "react";

const IntroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="intro" className="py-20 px-6 bg-white transform-3d perspective-2000 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-karate-gold/5 via-transparent to-karate-red/5 parallax-layer-1"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side - Introduction content */}
          <div className="flex-1 lg:pr-8">
            <h2 className={`text-4xl md:text-5xl font-bold text-karate-red mb-8 font-japanese transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Introduction
            </h2>
            <div className="space-y-6">
              <p className={`text-lg text-karate-dark leading-relaxed transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}>
                Welcome to our dojo, where traditional martial arts meet modern training methods. 
                Our commitment to excellence in karate instruction has been the cornerstone of our practice.
              </p>
              
              <p className={`text-lg text-karate-dark leading-relaxed transition-all duration-1000 delay-400 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}>
                Under the expert guidance of our sensei, students embark on a journey of physical fitness, 
                mental discipline, and spiritual growth. We focus on building character, respect, and 
                self-confidence through the ancient art of karate.
              </p>
              
              <p className={`text-lg text-karate-dark leading-relaxed transition-all duration-1000 delay-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}>
                Our dojo emphasizes traditional values while incorporating contemporary training techniques 
                to ensure students receive comprehensive martial arts education. We welcome practitioners 
                of all levels, from beginners to advanced students.
              </p>
              
              <p className={`text-lg text-karate-dark leading-relaxed transition-all duration-1000 delay-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}>
                Join us in discovering the transformative power of karate, where every student is 
                encouraged to reach their full potential in a supportive and disciplined environment.
              </p>
            </div>
          </div>
          
          {/* Right side - Sensei information with photo */}
          <div className="flex-1 lg:pl-8">
            <div className={`bg-gradient-to-br from-karate-gold/10 to-karate-red/10 rounded-2xl p-8 text-center shadow-3d card-3d glass-strong transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              {/* Sensei Photo */}
              <div className="mb-6">
                <img 
                  src="/lovable-uploads/a71ca07b-9bf3-4933-8907-8688fb9cfe42.png" 
                  alt="Sensei Rizwan Shaikh" 
                  className="w-48 h-60 mx-auto rounded-xl object-cover object-top border-4 border-karate-gold shadow-3d-hover float-3d transition-transform duration-500 hover:scale-105"
                  style={{ transform: 'translateZ(30px)' }}
                />
              </div>
              
              {/* Sensei Information */}
              <h3 className="text-3xl font-bold text-karate-red mb-2 font-japanese">
                Sensei Rizwan Shaikh
              </h3>
              
              <div className="bg-karate-black text-white px-4 py-2 rounded-lg inline-block mb-4">
                <span className="font-bold text-karate-gold">Black Belt Nidan</span>
              </div>
              
              <p className="text-karate-dark text-lg leading-relaxed">
                Rizwan is a 2nd Dan Black Belt and a decorated martial arts champion with nine major titles to his name, including four Maharashtra State Kickboxing Championships and the role of District Coach for Pune City. With over a decade of dedicated training and seven years of experience coaching both kids and adults, he bridges the gap between modern competition and traditional martial arts. As a master instructor, Rizwan is dedicated to preserving the authentic spirit of traditional karate while specializing in elite technique development and competition prep. His ultimate mission is to inspire the next generation of fighters by building unwavering confidence and discipline on and off the mat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;

