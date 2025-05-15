
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-karate-navy py-8 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">The Karate Gakusei Dojo</h3>
            <p className="text-gray-300">Affiliated with ISKI India</p>
          </div>
          
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h4 className="text-lg font-semibold mb-2">Contact</h4>
            <p>Sensei Rizwan Shaikh: +91 7620238222</p>
            <p>Alternative: +91 9226711681</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} The Karate Gakusei Dojo<br />
              Designed with spirit and discipline<br />
              Made by B2Csolution Company (Om Harde)
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-sm">
            "The ultimate aim of karate lies not in victory nor defeat, but in the perfection of character of its participants." - Gichin Funakoshi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
