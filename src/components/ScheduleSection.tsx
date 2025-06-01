
const ScheduleSection = () => {
  return (
    <section id="schedule" className="py-16 bg-gradient-to-br from-karate-lightgold to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-karate-red text-center mb-8 font-japanese">
          Training Schedule
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {/* Main Schedule Card */}
          <div className="bg-white rounded-lg shadow-xl border-2 border-karate-gold overflow-hidden mb-8">
            <div className="bg-gradient-red text-white p-6 text-center">
              <h3 className="text-2xl font-bold font-japanese mb-2">Weekly Training Sessions</h3>
              <p className="text-karate-gold font-semibold">All Ages & Experience Levels Welcome</p>
            </div>
            
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Karate Training */}
                <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg border-l-4 border-karate-red">
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-3">🥋</div>
                    <h4 className="text-2xl font-bold text-karate-red font-japanese">Traditional Shotokan Karate</h4>
                  </div>
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
                
                {/* Kickboxing Training */}
                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-lg border-l-4 border-karate-gold">
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-3">🥊</div>
                    <h4 className="text-2xl font-bold text-karate-darkgold font-japanese">Kickboxing</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center bg-white p-3 rounded shadow">
                      <span className="font-bold text-karate-black">Tuesday</span>
                      <span className="text-karate-darkgold font-semibold">7:00 PM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center bg-white p-3 rounded shadow">
                      <span className="font-bold text-karate-black">Thursday</span>
                      <span className="text-karate-darkgold font-semibold">7:00 PM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center bg-white p-3 rounded shadow">
                      <span className="font-bold text-karate-black">Saturday</span>
                      <span className="text-karate-darkgold font-semibold">6:00 PM - 7:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Additional Information */}
              <div className="mt-8 grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-gradient-to-br from-karate-lightgold to-karate-gold rounded-lg">
                  <div className="text-2xl mb-2">📍</div>
                  <h5 className="font-bold text-karate-black mb-1">Location</h5>
                  <p className="text-sm text-karate-dark">The Karate Gakusei Dojo</p>
                </div>
                
                <div className="text-center p-4 bg-gradient-to-br from-red-100 to-red-200 rounded-lg">
                  <div className="text-2xl mb-2">👨‍🏫</div>
                  <h5 className="font-bold text-karate-black mb-1">Instructor</h5>
                  <p className="text-sm text-karate-dark">Sensei Rizwan Shaikh</p>
                  <p className="text-xs text-karate-red font-semibold">Nidan (2nd Dan Black Belt)</p>
                </div>
                
                <div className="text-center p-4 bg-gradient-to-br from-green-100 to-green-200 rounded-lg">
                  <div className="text-2xl mb-2">📞</div>
                  <h5 className="font-bold text-karate-black mb-1">Contact</h5>
                  <p className="text-sm text-karate-dark">+91 7620238222</p>
                  <p className="text-sm text-karate-dark">+91 9226711681</p>
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
                  <li className="flex items-center"><span className="text-karate-gold mr-2">•</span>Self-Defense</li>
                  <li className="flex items-center"><span className="text-karate-gold mr-2">•</span>Traditional Philosophy</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold text-karate-darkgold mb-3 font-japanese">Kickboxing</h4>
                <ul className="space-y-2 text-karate-dark">
                  <li className="flex items-center"><span className="text-karate-gold mr-2">•</span>Boxing Combinations</li>
                  <li className="flex items-center"><span className="text-karate-gold mr-2">•</span>Kicks & Knee Strikes</li>
                  <li className="flex items-center"><span className="text-karate-gold mr-2">•</span>Pad Work</li>
                  <li className="flex items-center"><span className="text-karate-gold mr-2">•</span>Cardio Fitness</li>
                  <li className="flex items-center"><span className="text-karate-gold mr-2">•</span>Strength Training</li>
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
