
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center bg-gradient-karate pt-20 pb-16 px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 text-6xl opacity-10 animate-float">空手</div>
      <div className="absolute bottom-20 right-10 text-6xl opacity-10 animate-float" style={{animationDelay: '1s'}}>道</div>
      
      <div className="container max-w-5xl mx-auto text-center relative z-10">
        {/* Logo Section with Hierarchy */}
        <div className="mb-8 flex flex-col items-center animate-fadeInUp">
          {/* Main ISKI Logo */}
          <div className="mb-4 relative animate-slideIn">
            <div className="bg-white p-4 rounded-full shadow-xl border-4 border-karate-gold animate-glow">
              <img 
                src="/lovable-uploads/596add0b-6e8d-49e8-b05d-d51904889b69.png" 
                alt="ISKI India - International Shotokan Karate Institute" 
                className="h-24 w-24 object-contain rounded-full hover:scale-110 transition-transform duration-300"
              />
            </div>
            <p className="text-sm md:text-base text-karate-black bg-gradient-gold text-white font-bold px-4 py-2 rounded-full shadow-lg mt-2 font-japanese">
              International Shotokan Karate Institute - India
            </p>
          </div>

          {/* Affiliation Connector */}
          <div className="flex items-center gap-4 mb-4 animate-fadeInUp" style={{animationDelay: '0.3s'}}>
            <div className="h-0.5 w-12 bg-karate-gold"></div>
            <span className="text-karate-black font-semibold font-japanese bg-white/80 px-3 py-1 rounded-full border border-karate-gold">
              Affiliated with
            </span>
            <div className="h-0.5 w-12 bg-karate-gold"></div>
          </div>

          {/* Karate Gakusei Dojo Logo */}
          <div className="relative animate-slideIn" style={{animationDelay: '0.6s'}}>
            <div className="bg-white p-3 rounded-full shadow-lg border-2 border-karate-red animate-glow">
              <img 
                src="/lovable-uploads/837f88e6-2182-4535-b125-085a716b02f0.png" 
                alt="The Karate Gakusei Dojo" 
                className="h-20 w-20 object-contain rounded-full hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        <div className="mb-6 relative animate-fadeInUp" style={{animationDelay: '0.9s'}}>
          <h1 className="text-4xl md:text-6xl font-bold text-karate-black mb-6 font-japanese">
            The Karate Gakusei Dojo
          </h1>
        </div>

        <p className="text-xl md:text-2xl mb-8 text-karate-dark max-w-3xl mx-auto font-japanese font-light animate-fadeInUp" style={{animationDelay: '1.2s'}}>
          Our mission is to train students in the art of traditional Shotokan Karate. 
          We don't fight to hurt — we train to grow stronger, sharper, and more confident.
        </p>

        <div className="bg-gradient-gold text-karate-black font-bold p-6 rounded-lg shadow-xl mb-8 max-w-xl mx-auto border-2 border-karate-gold animate-fadeInUp" style={{animationDelay: '1.5s'}}>
          <h3 className="text-xl mb-2 font-japanese">🟥 日程 - Schedule 🟥</h3>
          <p className="text-lg font-japanese">Monday, Wednesday, Friday — 7:00 PM to 8:00 PM</p>
        </div>

        {/* Gichin Funakoshi Quote Section */}
        <div className="bg-gradient-to-r from-karate-red to-karate-darkgold text-white p-8 rounded-lg shadow-2xl mb-8 max-w-4xl mx-auto border-4 border-karate-gold animate-fadeInUp transform hover:scale-105 transition-all duration-300" style={{animationDelay: '1.8s'}}>
          <div className="text-center">
            <div className="text-6xl mb-4 opacity-20 font-japanese">❝</div>
            <blockquote className="text-xl md:text-2xl font-japanese font-medium mb-4 leading-relaxed">
              "The ultimate aim of karate lies not in victory nor defeat, but in the perfection of character of its participants."
            </blockquote>
            <div className="flex items-center justify-center gap-2">
              <div className="h-0.5 w-16 bg-karate-gold"></div>
              <cite className="text-lg font-japanese font-bold text-karate-gold not-italic">
                Master Gichin Funakoshi
              </cite>
              <div className="h-0.5 w-16 bg-karate-gold"></div>
            </div>
            <p className="text-sm mt-2 opacity-90 font-japanese">Founder of Shotokan Karate</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6 animate-fadeInUp" style={{animationDelay: '2.1s'}}>
          <Button 
            onClick={scrollToContact}
            className="bg-gradient-red hover:scale-105 transform transition-all duration-300 text-white px-8 py-6 text-lg font-japanese font-medium shadow-lg hover:shadow-xl border-2 border-karate-red hover:border-karate-gold animate-glow"
          >
            Join Our Dojo
          </Button>
          <Button 
            variant="outline" 
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="border-2 border-karate-gold text-karate-black hover:bg-gradient-gold hover:text-white hover:scale-105 transform transition-all duration-300 px-8 py-6 text-lg font-japanese font-medium shadow-lg hover:shadow-xl"
          >
            Learn More
          </Button>
        </div>

        <div className="mt-12 text-center animate-fadeInUp" style={{animationDelay: '2.4s'}}>
          <p className="text-karate-black font-semibold font-japanese bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full inline-block shadow-lg border border-karate-gold">
            Contact: +91 7620238222 / 9226711681
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
