
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
    <section id="home" className="min-h-screen flex flex-col justify-center items-center bg-gradient-karate pt-20 pb-16 px-4">
      <div className="container max-w-5xl mx-auto text-center">
        <div className="mb-6 relative">
          <h1 className="text-4xl md:text-6xl font-bold text-karate-dark mb-6">
            The Karate Gakusei Dojo
          </h1>
          <div className="absolute top-0 right-4 md:right-0 flex flex-col items-center">
            <div className="hidden md:block bg-white p-2 rounded-full shadow-lg mb-2">
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
            <p className="text-xs md:text-sm text-karate-navy bg-white px-3 py-1 rounded-full shadow-md">
              Affiliated with ISKI India
            </p>
          </div>
        </div>

        <p className="text-xl md:text-2xl mb-8 text-karate-dark max-w-3xl mx-auto">
          Our mission is to train students in the art of traditional Shotokan Karate. 
          We don't fight to hurt — we train to grow stronger, sharper, and more confident.
        </p>

        <div className="bg-yellow-300 text-karate-dark font-bold p-4 rounded-lg shadow-lg mb-10 max-w-xl mx-auto">
          <h3 className="text-xl mb-2">🟥 DATE AND TIMINGS 🟥</h3>
          <p className="text-lg">Monday, Wednesday, Friday — 7:00 PM to 8:00 PM</p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <Button 
            onClick={scrollToContact}
            className="bg-karate-red hover:bg-red-700 text-white px-8 py-6 text-lg"
          >
            Join Our Dojo
          </Button>
          <Button 
            variant="outline" 
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="border-karate-red text-karate-red hover:bg-karate-red hover:text-white px-8 py-6 text-lg"
          >
            Learn More
          </Button>
        </div>

        <div className="mt-12 text-center">
          <p className="text-karate-navy font-semibold">Contact: +91 7620238222 / 9226711681</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
