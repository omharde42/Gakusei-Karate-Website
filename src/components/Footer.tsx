
import { Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-karate-dark via-karate-black to-karate-dark py-12 text-white relative overflow-hidden" style={{ perspective: '1000px' }}>
      <div className="absolute inset-0 bg-gradient-to-br from-karate-red/20 via-karate-gold/10 to-karate-darkgold/20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="mb-6 md:mb-0 transform hover:scale-105 transition-transform duration-300" style={{ transform: 'translateZ(30px)' }}>
            <h3 className="text-2xl font-bold mb-3 text-karate-gold drop-shadow-[0_2px_8px_rgba(251,191,36,0.5)]" style={{ 
              textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(251,191,36,0.3)'
            }}>
              The Karate Gakusei Dojo
            </h3>
            <p className="text-karate-lightgold text-lg font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Affiliated with ISKI India</p>
          </div>
          
          <div className="mb-6 md:mb-0 text-center md:text-left transform hover:scale-105 transition-transform duration-300 bg-karate-black/40 p-6 rounded-lg border-2 border-karate-gold/30" style={{ 
            transform: 'translateZ(40px)',
            boxShadow: '0 8px 20px rgba(0,0,0,0.6), inset 0 1px 0 rgba(251,191,36,0.2)'
          }}>
            <h4 className="text-xl font-bold mb-3 text-karate-gold">Contact</h4>
            <p className="text-karate-lightgold font-semibold">
              Sensei Rizwan Shaikh:{" "}
              <a 
                href="https://wa.me/917620238222" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-karate-gold transition-colors"
              >
                +91 7620238222
              </a>
            </p>
          </div>
          
          <div className="text-center md:text-right transform hover:scale-105 transition-transform duration-300" style={{ transform: 'translateZ(30px)' }}>
            <h4 className="text-xl font-bold mb-4 text-karate-gold drop-shadow-[0_2px_8px_rgba(251,191,36,0.5)]">Follow Us</h4>
            <div className="flex justify-center md:justify-end mb-4">
              <a 
                href="https://www.instagram.com/lonewarrior_rizwan?igsh=MWE2OTV4aGp6eXU1aA%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-karate-red to-karate-red/80 text-white hover:from-karate-gold hover:to-karate-darkgold transition-all duration-500 p-4 rounded-lg border-2 border-karate-gold/50 hover:border-karate-gold hover:scale-125"
                aria-label="Follow us on Instagram"
                style={{ 
                  transform: 'translateZ(50px)',
                  boxShadow: '0 8px 25px rgba(220,38,38,0.6), 0 0 30px rgba(251,191,36,0.3)'
                }}
              >
                <Instagram size={28} />
              </a>
            </div>
            <p className="text-sm text-karate-lightgold font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              &copy; {currentYear} The Karate Gakusei Dojo<br />
              Designed with spirit and discipline<br />
              Made by B2Csolution Company (Om Harde)<br />
              <a href="tel:+919882303030" className="hover:text-karate-gold transition-colors">9882303030</a>
            </p>
          </div>
        </div>
        
        <div className="mt-10 pt-8 border-t-2 border-karate-gold/40 text-center">
          <p className="text-karate-gold text-base md:text-lg font-semibold italic px-4 py-6 bg-gradient-to-r from-transparent via-karate-black/60 to-transparent rounded-lg border border-karate-gold/30" style={{
            textShadow: '2px 2px 6px rgba(0,0,0,0.8), 0 0 20px rgba(251,191,36,0.4)',
            boxShadow: '0 6px 20px rgba(0,0,0,0.6), inset 0 2px 4px rgba(251,191,36,0.1)',
            transform: 'translateZ(20px)'
          }}>
            "The ultimate aim of karate lies not in victory nor defeat, but in the perfection of character of its participants." - Gichin Funakoshi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
