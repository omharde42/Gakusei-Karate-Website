
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "gallery", label: "Gallery" },
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6",
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b-2 border-karate-gold py-2" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-karate-red font-bold text-xl md:text-2xl font-japanese hover:text-karate-gold transition-colors duration-300">
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
        <div className="hidden md:flex space-x-8">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "font-medium text-base hover:text-karate-gold transition-all duration-300 font-japanese relative group",
                activeSection === item.id ? "text-karate-red font-bold" : "text-karate-black"
              )}
            >
              {item.label}
              <span className={cn(
                "absolute bottom-0 left-0 w-0 h-0.5 bg-karate-gold transition-all duration-300 group-hover:w-full",
                activeSection === item.id ? "w-full" : ""
              )}></span>
            </button>
          ))}
        </div>
      </div>
      
      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg py-4 px-6 flex flex-col space-y-4 border-b-2 border-karate-gold">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "font-medium text-base hover:text-karate-gold transition-colors text-left font-japanese",
                activeSection === item.id ? "text-karate-red font-bold" : "text-karate-black"
              )}
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
