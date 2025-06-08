

const IntroSection = () => {
  return (
    <section id="intro" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side - Introduction content */}
          <div className="flex-1 lg:pr-8">
            <h2 className="text-4xl md:text-5xl font-bold text-karate-red mb-8 font-japanese">
              Introduction
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-karate-dark leading-relaxed">
                Welcome to our dojo, where traditional martial arts meet modern training methods. 
                Our commitment to excellence in karate instruction has been the cornerstone of our practice.
              </p>
              
              <p className="text-lg text-karate-dark leading-relaxed">
                Under the expert guidance of our sensei, students embark on a journey of physical fitness, 
                mental discipline, and spiritual growth. We focus on building character, respect, and 
                self-confidence through the ancient art of karate.
              </p>
              
              <p className="text-lg text-karate-dark leading-relaxed">
                Our dojo emphasizes traditional values while incorporating contemporary training techniques 
                to ensure students receive comprehensive martial arts education. We welcome practitioners 
                of all levels, from beginners to advanced students.
              </p>
              
              <p className="text-lg text-karate-dark leading-relaxed">
                Join us in discovering the transformative power of karate, where every student is 
                encouraged to reach their full potential in a supportive and disciplined environment.
              </p>
            </div>
          </div>
          
          {/* Right side - Sensei information with photo */}
          <div className="flex-1 lg:pl-8">
            <div className="bg-gradient-to-br from-karate-gold/10 to-karate-red/10 rounded-2xl p-8 text-center shadow-lg">
              {/* Sensei Photo */}
              <div className="mb-6">
                <img 
                  src="/lovable-uploads/a71ca07b-9bf3-4933-8907-8688fb9cfe42.png" 
                  alt="Sensei Rizwan Shaikh" 
                  className="w-48 h-60 mx-auto rounded-xl object-cover object-top border-4 border-karate-gold shadow-lg"
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
                Master instructor with years of experience in traditional karate. 
                Dedicated to preserving the authentic spirit of martial arts while 
                inspiring the next generation of karate practitioners.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;

