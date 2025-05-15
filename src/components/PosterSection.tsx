
const PosterSection = () => {
  return (
    <section id="poster" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-karate-red text-center mb-8">
          Dojo Poster
        </h2>
        
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-red-50 to-red-100 rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 md:p-10">
            {/* Poster Header */}
            <div className="text-center border-b-4 border-karate-red pb-6 mb-6">
              <h3 className="text-3xl font-bold text-karate-red mb-2">THE KARATE GAKUSEI DOJO</h3>
              <p className="text-karate-navy text-lg">Traditional Shotokan Karate Training</p>
              <p className="font-semibold mt-2">Affiliated with ISKI India</p>
            </div>
            
            {/* Poster Content */}
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center gap-4 bg-white p-4 rounded-lg">
                <div className="md:w-1/4 text-center md:text-left">
                  <h4 className="font-bold text-karate-red text-xl">Classes</h4>
                </div>
                <div className="md:w-3/4">
                  <p className="font-bold">Monday, Wednesday, Friday</p>
                  <p className="text-karate-dark">7:00 PM to 8:00 PM</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center gap-4 bg-white p-4 rounded-lg">
                <div className="md:w-1/4 text-center md:text-left">
                  <h4 className="font-bold text-karate-red text-xl">Benefits</h4>
                </div>
                <div className="md:w-3/4">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Physical fitness and strength</li>
                    <li>Self-defense skills</li>
                    <li>Improved concentration and focus</li>
                    <li>Discipline and respect</li>
                    <li>Confidence building</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center gap-4 bg-white p-4 rounded-lg">
                <div className="md:w-1/4 text-center md:text-left">
                  <h4 className="font-bold text-karate-red text-xl">Instructor</h4>
                </div>
                <div className="md:w-3/4">
                  <p className="font-bold">Sensei Rizwan Shaikh</p>
                  <p className="text-karate-dark">Nidan (2nd Degree Black Belt)</p>
                  <p className="text-karate-red">20+ years of experience</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center gap-4 bg-white p-4 rounded-lg">
                <div className="md:w-1/4 text-center md:text-left">
                  <h4 className="font-bold text-karate-red text-xl">Contact</h4>
                </div>
                <div className="md:w-3/4">
                  <p>Phone: +91 7620238222 / 9226711681</p>
                  <p className="text-sm italic mt-1">Call or WhatsApp to enroll</p>
                </div>
              </div>
              
              <div className="mt-8 bg-yellow-200 p-4 rounded-lg text-center">
                <p className="font-bold text-karate-dark">Join our dojo and start your journey in traditional Shotokan Karate!</p>
                <p className="text-sm mt-2">All ages and experience levels welcome</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PosterSection;
