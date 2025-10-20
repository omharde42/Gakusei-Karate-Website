
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const navItems = [
  { id: "home", label: "Home" },
  { id: "intro", label: "Intro" },
  { id: "about", label: "About" },
  { id: "schedule", label: "Schedule" },
  { id: "gallery", label: "Gallery" },
  { id: "events", label: "Event" },
  { id: "contact", label: "Contact Us" },
  { id: "poster", label: "Poster" }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled
      const scrolled = window.scrollY > 20;
      setIsScrolled(scrolled);

      // Check which section is currently in view
      const sections = navItems.map(item => document.getElementById(item.id));
      const currentSection = sections.findIndex(section => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 200 && rect.bottom >= 200;
      });
      
      if (currentSection !== -1) {
        setActiveSection(navItems[currentSection].id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setActiveSection(id);
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 px-6 transform-3d",
        isScrolled 
          ? "glass-strong shadow-3d-hover border-b-2 border-karate-gold py-2 translate-y-0" 
          : "bg-transparent translate-y-0"
      )}
      style={{
        transform: isScrolled ? 'translateZ(50px)' : 'translateZ(0)',
      }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-karate-red font-bold text-xl md:text-2xl font-japanese hover:text-karate-gold transition-all duration-300 float-3d shadow-glow-red hover:shadow-glow-gold">
          The Karate Gakusei Dojo
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-karate-red hover:text-karate-gold transition-colors duration-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-3">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "font-medium text-sm hover:scale-105 transition-all duration-300 font-japanese relative group px-4 py-2.5 rounded-lg border-2 transform-3d",
                activeSection === item.id 
                  ? "bg-gradient-red text-white border-karate-red shadow-glow-red font-bold" 
                  : "bg-gradient-to-br from-karate-lightgold to-white text-karate-black border-karate-gold hover:from-karate-gold hover:to-karate-darkgold hover:text-white hover:shadow-glow-gold"
              )}
              style={{
                transform: activeSection === item.id ? 'translateZ(15px) translateY(-3px)' : 'translateZ(5px)',
                boxShadow: activeSection === item.id 
                  ? '0 8px 20px rgba(220, 38, 38, 0.4), 0 4px 10px rgba(220, 38, 38, 0.3), inset 0 -2px 4px rgba(0,0,0,0.2)' 
                  : '0 4px 12px rgba(251, 191, 36, 0.3), 0 2px 6px rgba(0,0,0,0.15), inset 0 -2px 4px rgba(0,0,0,0.1)',
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
      
      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg py-4 px-6 flex flex-col space-y-3 border-b-2 border-karate-gold">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "font-medium text-base transition-all text-left font-japanese px-4 py-2.5 rounded-lg border-2",
                activeSection === item.id 
                  ? "bg-gradient-red text-white border-karate-red font-bold shadow-lg" 
                  : "bg-gradient-to-br from-karate-lightgold to-white text-karate-black border-karate-gold hover:from-karate-gold hover:to-karate-darkgold hover:text-white"
              )}
              style={{
                boxShadow: activeSection === item.id 
                  ? '0 4px 12px rgba(220, 38, 38, 0.4), inset 0 -2px 4px rgba(0,0,0,0.2)' 
                  : '0 2px 8px rgba(251, 191, 36, 0.3), inset 0 -2px 4px rgba(0,0,0,0.1)',
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
