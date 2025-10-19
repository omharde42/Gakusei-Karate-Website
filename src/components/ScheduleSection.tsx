
const ScheduleSection = () => {
  return (
    <section id="schedule" className="py-16 bg-gradient-to-br from-karate-lightgold to-white transform-3d perspective-2000 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-karate-gold/10 to-transparent parallax-layer-1"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-karate-red text-center mb-8 font-japanese">
          Training Schedule
        </h2>
        
        <div className="max-w-6xl mx-auto">
          {/* Main Schedule Card */}
          <div className="bg-white rounded-lg shadow-3d-hover border-2 border-karate-gold overflow-hidden mb-8 card-3d glass-strong">
            <div className="bg-gradient-red text-white p-6 text-center">
              <h3 className="text-2xl font-bold font-japanese mb-2">Weekly Training Sessions</h3>
              <p className="text-karate-gold font-semibold">All Ages & Experience Levels Welcome</p>
            </div>
            
            <div className="p-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Karate Training */}
                <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg border-l-4 border-karate-red">
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-3">🥋</div>
                    <h4 className="text-2xl font-bold text-karate-red font-japanese">Traditional Shotokan Karate</h4>
                  </div>
                  
                  {/* MASCO FIT Location */}
                  <div className="mb-6">
                    <h5 className="text-lg font-bold text-karate-red mb-3">📍 MASCO FIT BRAND</h5>
                    <p className="text-sm text-karate-dark mb-3">Biggest Strength & Conditioning Gym in Kharadi<br/>
                    Exit Gate, Grant Rd, opp. Eon Free Zone 2, Vitthal Nagar, Kharadi, Pune, Maharashtra 411014</p>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center bg-white p-3 rounded shadow">
                        <span className="font-bold text-karate-black">Monday</span>
                        <span className="text-karate-red font-semibold">5:30 PM - 6:30 PM</span>
                      </div>
                      <div className="flex justify-between items-center bg-white p-3 rounded shadow">
                        <span className="font-bold text-karate-black">Wednesday</span>
                        <span className="text-karate-red font-semibold">5:30 PM - 6:30 PM</span>
                      </div>
                      <div className="flex justify-between items-center bg-white p-3 rounded shadow">
                        <span className="font-bold text-karate-black">Friday</span>
                        <span className="text-karate-red font-semibold">5:30 PM - 6:30 PM</span>
                      </div>
                    </div>
                  </div>

                  {/* Vidhyavan Location */}
                  <div>
                    <h5 className="text-lg font-bold text-karate-red mb-3">📍 Vidhyavan Montessori</h5>
                    <p className="text-sm text-karate-dark mb-3">Vidhyavan Montessori Preschool and Daycare, Lonikand</p>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center bg-white p-3 rounded shadow">
                        <span className="font-bold text-karate-black">Monday</span>
                        <span className="text-karate-red font-semibold">7:00 PM - 8:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center bg-white p-3 rounded shadow">
                        <span className="font-bold text-karate-black">Wednesday</span>
                        <span className="text-karate-red font-semibold">7:00 PM - 8:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center bg-white p-3 rounded shadow">
                        <span className="font-bold text-karate-black">Friday</span>
                        <span className="text-karate-red font-semibold">7:00 PM - 8:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Kickboxing Training */}
                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-lg border-l-4 border-karate-gold">
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-3">🥊</div>
                    <h4 className="text-2xl font-bold text-karate-darkgold font-japanese">Kickboxing</h4>
                  </div>
                  
                  {/* Cobra Thai Location */}
                  <div className="mb-6">
                    <h5 className="text-lg font-bold text-karate-darkgold mb-3">📍 Cobra Thai</h5>
                    <p className="text-sm text-karate-dark mb-3">Shop no 19/1, old 242, N 879, Lane, opposite to Reliance Mart, Tukaram Nagar, Kharadi, Pune, Maharashtra 411014</p>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center bg-white p-3 rounded shadow">
                        <span className="font-bold text-karate-black">Tuesday</span>
                        <span className="text-karate-darkgold font-semibold">8:00 PM - 9:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center bg-white p-3 rounded shadow">
                        <span className="font-bold text-karate-black">Thursday</span>
                        <span className="text-karate-darkgold font-semibold">8:00 PM - 9:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center bg-white p-3 rounded shadow">
                        <span className="font-bold text-karate-black">Saturday</span>
                        <span className="text-karate-darkgold font-semibold">10:00 AM - 11:00 AM</span>
                      </div>
                      <div className="flex justify-between items-center bg-white p-3 rounded shadow">
                        <span className="font-bold text-karate-black">Sunday</span>
                        <span className="text-karate-darkgold font-semibold">10:00 AM - 11:00 AM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Instructor Information */}
              <div className="mt-8 grid md:grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-red-100 to-red-200 rounded-lg">
                  <div className="text-3xl mb-3">👨‍🏫</div>
                  <h5 className="font-bold text-karate-black mb-2 text-lg">Chief Instructor</h5>
                  <p className="text-karate-dark font-semibold">Sensei Rizwan Shaikh</p>
                  <p className="text-karate-red font-bold">Nidan (2nd Dan Black Belt)</p>
                  <p className="text-sm text-karate-dark mt-2">12+ Years Experience</p>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-br from-green-100 to-green-200 rounded-lg">
                  <div className="text-3xl mb-3">📞</div>
                  <h5 className="font-bold text-karate-black mb-2 text-lg">Contact Information</h5>
                  <p className="text-karate-dark font-semibold">+91 7620238222</p>
                  <p className="text-sm text-karate-dark mt-2">Call for Registration & Queries</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* What We Teach */}
          <div className="bg-white rounded-lg shadow-lg p-8 border border-karate-gold">
            <h3 className="text-2xl font-bold text-karate-red text-center mb-6 font-japanese">What We Teach</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl font-bold text-karate-red mb-3 font-japanese">Traditional Shotokan Karate</h4>
                <ul className="space-y-2 text-karate-dark">
                  <li className="flex items-center"><span className="text-karate-gold mr-2">•</span>Kata (Forms)</li>
                  <li className="flex items-center"><span className="text-karate-gold mr-2">•</span>Kihon (Basic Techniques)</li>
                  <li className="flex items-center"><span className="text-karate-gold mr-2">•</span>Kumite (Sparring)</li>
                  <li className="flex items-center"><span className="text-karate-gold mr-2">•</span>Self-Defense Techniques</li>
                  <li className="flex items-center"><span className="text-karate-gold mr-2">•</span>Traditional Philosophy & Discipline</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold text-karate-darkgold mb-3 font-japanese">Kickboxing</h4>
                <ul className="space-y-2 text-karate-dark">
                  <li className="flex items-center"><span className="text-karate-gold mr-2">•</span>Boxing Combinations</li>
                  <li className="flex items-center"><span className="text-karate-gold mr-2">•</span>Kicks & Knee Strikes</li>
                  <li className="flex items-center"><span className="text-karate-gold mr-2">•</span>Pad Work & Conditioning</li>
                  <li className="flex items-center"><span className="text-karate-gold mr-2">•</span>Cardio Fitness Training</li>
                  <li className="flex items-center"><span className="text-karate-gold mr-2">•</span>Strength & Flexibility</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
