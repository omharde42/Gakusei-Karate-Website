
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
        <div className="mb-6 relative animate-fadeInUp">
          <h1 className="text-4xl md:text-6xl font-bold text-karate-black mb-6 font-japanese">
            The Karate Gakusei Dojo
          </h1>
          <div className="absolute top-0 right-4 md:right-0 flex flex-col items-center animate-slideIn">
            <div className="hidden md:block bg-white p-2 rounded-full shadow-lg mb-2 border-2 border-karate-gold animate-glow">
              <img 
                src="/iskilogo.jpg" 
                alt="ISKI Logo" 
                className="h-16 w-16 object-contain rounded-full"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://via.placeholder.com/150?text=ISKI";
                }}
              />
            </div>
            <p className="text-xs md:text-sm text-karate-black bg-gradient-gold text-white font-medium px-3 py-1 rounded-full shadow-md">
              Affiliated with ISKI India
            </p>
          </div>
        </div>

        <p className="text-xl md:text-2xl mb-8 text-karate-dark max-w-3xl mx-auto font-japanese font-light animate-fadeInUp" style={{animationDelay: '0.3s'}}>
          Our mission is to train students in the art of traditional Shotokan Karate. 
          We don't fight to hurt — we train to grow stronger, sharper, and more confident.
        </p>

        <div className="bg-gradient-gold text-karate-black font-bold p-6 rounded-lg shadow-xl mb-10 max-w-xl mx-auto border-2 border-karate-gold animate-fadeInUp" style={{animationDelay: '0.6s'}}>
          <h3 className="text-xl mb-2 font-japanese">🟥 日程 - Schedule 🟥</h3>
          <p className="text-lg font-japanese">Monday, Wednesday, Friday — 7:00 PM to 8:00 PM</p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6 animate-fadeInUp" style={{animationDelay: '0.9s'}}>
          <Button 
            onClick={scrollToContact}
            className="bg-gradient-red hover:scale-105 transform transition-all duration-300 text-white px-8 py-6 text-lg font-japanese font-medium shadow-lg hover:shadow-xl border-2 border-karate-red hover:border-karate-gold"
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

        <div className="mt-12 text-center animate-fadeInUp" style={{animationDelay: '1.2s'}}>
          <p className="text-karate-black font-semibold font-japanese bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full inline-block shadow-lg border border-karate-gold">
            Contact: +91 7620238222 / 9226711681
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
