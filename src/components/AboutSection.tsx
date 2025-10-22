import { useEffect, useRef, useState } from "react";

const AboutSection = () => {
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
    <section ref={sectionRef} id="about" className="py-16 bg-white transform-3d perspective-2000 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-karate-red/5 via-transparent to-karate-gold/5 parallax-layer-1"></div>
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <h2 className={`text-3xl md:text-4xl font-bold text-karate-red text-center mb-10 font-japanese transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          About Us
        </h2>
        
        <div className="space-y-6 text-karate-dark">
          <div className={`flex flex-col md:flex-row gap-8 items-center mb-8 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="md:w-1/3 flex justify-center">
              <div className="relative h-64 w-64 group float-3d">
                <div className="absolute inset-0 bg-gradient-gold rounded-full opacity-30 shadow-glow-gold"></div>
                <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center shadow-3d-hover border-2 border-karate-gold group-hover:scale-110 transition-all duration-500 card-3d"
                  style={{ transform: 'translateZ(40px)' }}>
                  <img 
                    src="/lovable-uploads/04d9278d-ac8f-4e64-9cb2-f4c1f731f7dd.png" 
                    alt="The Karate Gakusei Dojo Logo" 
                    className="h-32 w-32 object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <p className="text-lg leading-relaxed font-japanese font-light">
                The Karate Gakusei Dojo is proudly affiliated with the International Shotokan Karate Institute (ISKI), India. 
                With a strong foundation in traditional Japanese karate philosophy, our dojo emphasizes discipline, respect, 
                and personal development. Sensei Rizwan Shaikh (Nidan Black Belt) leads the classes with passion and precision.
              </p>
            </div>
          </div>
          
          <div className={`bg-gradient-to-r from-karate-lightgold to-white p-6 rounded-lg shadow-3d border-l-4 border-karate-gold shadow-3d-hover transition-all duration-1000 delay-400 card-3d glass ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <p className="text-lg leading-relaxed font-japanese font-light">
              Our dojo is more than just a place to learn how to punch and kick—it's a sanctuary for mental clarity, 
              spiritual growth, and physical strength. We follow the traditional values of Shotokan Karate, 
              integrating them into every aspect of our training. Every class is designed to challenge students 
              not only physically but also intellectually and emotionally.
            </p>
          </div>
          
          <div className={`flex flex-col md:flex-row gap-8 items-center my-8 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="md:w-2/3 order-2 md:order-1">
              <p className="text-lg leading-relaxed font-japanese font-light">
                Whether you are a complete beginner or someone returning to martial arts, our welcoming community 
                will support your journey. We train students of all ages and backgrounds, fostering unity and 
                encouragement in every class. Through katas, kihon, and kumite, students develop not just their 
                technique, but also their confidence, discipline, and perseverance. We believe karate is a 
                lifelong path, and we are here to walk it together.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center order-1 md:order-2">
              <div className="h-48 w-48 bg-gradient-red rounded-lg shadow-3d-hover flex items-center justify-center hover:scale-110 transition-all duration-500 border-2 border-karate-gold card-3d float-3d"
                style={{ transform: 'translateZ(30px)' }}>
                <div className="text-6xl text-karate-gold font-bold font-japanese shadow-glow-gold">空手</div>
              </div>
            </div>
          </div>
          
          <div className={`border-l-4 border-karate-gold pl-6 bg-gradient-to-r from-karate-lightgold/30 to-transparent p-4 rounded-r-lg transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <p className="text-lg leading-relaxed font-japanese font-light">
              Our goal is to shape students into not just excellent martial artists but also responsible and 
              honorable individuals. Join us to discover your inner strength and become part of a dojo that 
              values both tradition and progress.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
