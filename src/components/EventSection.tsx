import { useState, useEffect } from 'react';
import { 
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Image, Target, Users, Award, Sword } from "lucide-react";

const EventSection = () => {
  const [showPoster, setShowPoster] = useState(false);
  const [isEventActive, setIsEventActive] = useState(true);

  useEffect(() => {
    const checkEventStatus = () => {
      const now = new Date();
      // Event removal time: November 24, 2025 at 11:59 PM
      const eventRemovalTime = new Date('2025-11-24T23:59:00');
      
      if (now >= eventRemovalTime) {
        setIsEventActive(false);
      }
    };

    // Check immediately
    checkEventStatus();

    // Check every minute
    const interval = setInterval(checkEventStatus, 60000);

    return () => clearInterval(interval);
  }, []);

  // Don't render the section if the event is no longer active
  if (!isEventActive) {
    return null;
  }

  return (
    <section id="events" className="py-16 bg-gradient-to-br from-karate-red/20 via-karate-gold/30 to-white transform-3d perspective-2000 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-karate-red/20 to-karate-gold/10 parallax-layer-1"></div>
      <div className="absolute inset-0 animate-pulse opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-karate-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-karate-red rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-karate-red text-center md:text-left mb-6 font-japanese animate-fadeInUp"
              style={{
                textShadow: '0 4px 12px rgba(220, 38, 38, 0.4), 0 2px 6px rgba(0,0,0,0.3)'
              }}>
              🥋 イベント更新 - Event Updates
            </h2>
            <p className="text-center md:text-left text-karate-dark text-lg mb-6 max-w-2xl font-japanese font-light">
              Join us for intensive training and elevate your martial arts journey!
            </p>
          </div>
          <div className="w-32 h-32 float-3d">
            <img 
              src="/lovable-uploads/98bc18da-a8e3-4271-9086-87fef0798538.png" 
              alt="The Karate Gakusei Dojo Logo" 
              className="w-full h-full object-contain hover:scale-125 transition-transform duration-500 shadow-3d-hover"
              style={{ transform: 'translateZ(40px)' }}
            />
          </div>
        </div>

        {/* Featured Event Card - Training Camp */}
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-3d-hover overflow-hidden border-4 border-karate-gold card-3d glass-strong relative">
          {/* Highlight Badge */}
          <div className="absolute -top-3 -right-3 z-20 bg-karate-red text-white px-6 py-3 rounded-full font-bold text-sm shadow-lg animate-pulse">
            ⭐ FEATURED
          </div>
          
          <div className="bg-gradient-to-r from-karate-red via-karate-navy to-karate-red text-white p-8 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-40 h-40 bg-karate-gold rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
            </div>
            <div className="relative z-10">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <h3 className="text-3xl md:text-4xl font-bold font-japanese">
                  🥋 Shotokan Karate Training Camp 2025
                </h3>
                <div className="bg-karate-gold text-karate-black px-6 py-3 rounded-full font-bold text-lg shadow-lg">
                  UPCOMING
                </div>
              </div>
              <p className="text-karate-gold font-semibold text-lg mt-4">
                Presented by: International Shotokan Karate Institute – India (ISKI)
              </p>
            </div>
          </div>

          <div className="p-8 bg-gradient-to-br from-white to-karate-lightgold/10">
            {/* Key Info Banner */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-gradient-to-br from-karate-red/10 to-karate-red/20 p-4 rounded-xl border-2 border-karate-red text-center">
                <Calendar className="text-karate-red h-8 w-8 mx-auto mb-2" />
                <p className="font-semibold text-karate-dark text-sm">Date</p>
                <p className="text-xl text-karate-navy font-bold">Sunday, 23rd November 2025</p>
              </div>
              <div className="bg-gradient-to-br from-karate-gold/10 to-karate-gold/20 p-4 rounded-xl border-2 border-karate-gold text-center">
                <Award className="text-karate-gold h-8 w-8 mx-auto mb-2" />
                <p className="font-semibold text-karate-dark text-sm">Level</p>
                <p className="text-xl text-karate-navy font-bold">Intermediate & Advanced</p>
              </div>
              <div className="bg-gradient-to-br from-karate-navy/10 to-karate-navy/20 p-4 rounded-xl border-2 border-karate-navy text-center">
                <MapPin className="text-karate-navy h-8 w-8 mx-auto mb-2" />
                <p className="font-semibold text-karate-dark text-sm">Venue</p>
                <p className="text-xl text-karate-navy font-bold">To be announced soon!</p>
              </div>
            </div>

            {/* About Section */}
            <div className="bg-gradient-to-r from-karate-gold/20 to-karate-red/10 p-6 rounded-xl mb-8 border-l-4 border-karate-gold">
              <h4 className="font-bold text-karate-navy mb-3 text-2xl flex items-center gap-2">
                <Target className="h-6 w-6" /> 🔥 About the Camp
              </h4>
              <p className="text-karate-dark leading-relaxed text-lg">
                Get ready for an intensive one-day Shotokan Karate Training Camp designed to boost your strength, technique, and discipline. Led by expert instructors, this camp focuses on both traditional and modern karate skills aligned with new WKF rules.
              </p>
              <p className="text-karate-navy font-semibold mt-3 text-lg">
                This is a golden opportunity for karatekas to refine their techniques, enhance fighting skills, and build teamwork and confidence.
              </p>
            </div>

            {/* Schedule Highlights */}
            <div className="mb-8">
              <h4 className="font-bold text-karate-navy mb-4 text-2xl flex items-center gap-2">
                <Clock className="h-6 w-6 text-karate-red" /> 🕒 Schedule Highlights
              </h4>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg border-l-4 border-karate-red shadow-md">
                  <p className="font-bold text-karate-red">07:30 AM – Arrival</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-karate-gold shadow-md">
                  <p className="font-bold text-karate-navy">08:00 AM – 1st Training Session (2 hrs)</p>
                  <p className="text-karate-dark ml-4">• Warm-up Drills & Nunchaku Training</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-karate-navy shadow-md">
                  <p className="font-bold text-karate-navy">10:00 AM – Short Break + Fun Activity</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-karate-gold shadow-md">
                  <p className="font-bold text-karate-navy">10:30 AM – 2nd Training Session (2 hrs)</p>
                  <p className="text-karate-dark ml-4">• Kumite (Fight) Training as per new WKF Rules</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-karate-navy shadow-md">
                  <p className="font-bold text-karate-navy">12:30 PM – Lunch + Self-Confidence & Team-Building Talk</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-karate-gold shadow-md">
                  <p className="font-bold text-karate-navy">01:30 PM – 3rd Training Session (2 hrs)</p>
                  <p className="text-karate-dark ml-4">• Kata's Bunkai Training</p>
                  <p className="text-karate-dark ml-4">• Self Defense (Road Fight Techniques)</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-karate-navy shadow-md">
                  <p className="font-bold text-karate-navy">03:30 PM – Break + Group Games</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-karate-gold shadow-md">
                  <p className="font-bold text-karate-navy">04:00 PM – 4th Training Session (2 hrs)</p>
                  <p className="text-karate-dark ml-4">• Stick Fight Training</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-karate-navy shadow-md">
                  <p className="font-bold text-karate-navy">06:00 PM – Break + Discipline & Focus Drills</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-karate-gold shadow-md">
                  <p className="font-bold text-karate-navy">06:30 PM – 5th Training Session (45 mins)</p>
                  <p className="text-karate-dark ml-4">• Kumite (Fight) Training</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-karate-red shadow-md">
                  <p className="font-bold text-karate-red">07:30 PM – Departure</p>
                </div>
              </div>
            </div>

            {/* Why Join */}
            <div className="bg-gradient-to-r from-karate-navy/10 to-karate-red/10 p-6 rounded-xl mb-8 border-l-4 border-karate-navy">
              <h4 className="font-bold text-karate-navy mb-4 text-2xl flex items-center gap-2">
                <Sword className="h-6 w-6" /> 💪 Why Join?
              </h4>
              <ul className="space-y-3 text-karate-dark text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✅</span>
                  <span>Learn new WKF-compliant Kumite rules</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✅</span>
                  <span>Hands-on training in Nunchaku, Stick Fight & Self Defense</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✅</span>
                  <span>Enhance discipline, focus, and confidence</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✅</span>
                  <span>Build team spirit with fellow martial artists</span>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-r from-karate-red to-karate-navy text-white p-6 rounded-xl text-center shadow-lg">
              <Users className="h-10 w-10 mx-auto mb-3" />
              <p className="font-bold text-xl mb-2">📢 Registration & Inquiries</p>
              <p className="text-karate-gold text-lg mb-2">Venue details will be announced soon!</p>
              <p className="text-sm mb-1">Contact your ISKI instructor or visit our official website/social pages.</p>
              <p className="text-karate-gold font-bold text-lg">Sensei Rizwan Shaikh: +91 76202 38222</p>
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-karate-gold/20 to-karate-red/20 p-8 rounded-xl max-w-4xl mx-auto border-4 border-karate-gold shadow-2xl">
            <h4 className="text-2xl font-bold text-karate-navy mb-6 flex items-center justify-center gap-2">
              <Award className="h-7 w-7" /> Important Notes for Participants
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <ul className="space-y-3 text-karate-dark text-lg">
                  <li className="flex items-start gap-2">
                    <span className="text-karate-red font-bold">•</span>
                    <span>Proper karate gi (uniform) is mandatory</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-karate-red font-bold">•</span>
                    <span>Bring your current belt and student ID</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-karate-red font-bold">•</span>
                    <span>Stay hydrated - bring water bottle</span>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-3 text-karate-dark text-lg">
                  <li className="flex items-start gap-2">
                    <span className="text-karate-red font-bold">•</span>
                    <span>Parents/guardians are welcome to attend</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-karate-red font-bold">•</span>
                    <span>Photography and videography available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-karate-red font-bold">•</span>
                    <span>Lunch and refreshments included</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Poster Modal */}
        <Dialog open={showPoster} onOpenChange={setShowPoster}>
          <DialogContent className="max-w-4xl w-[90vw] border-4 border-karate-gold">
            <div className="relative">
              <img 
                src="/lovable-uploads/93fc3e57-302f-41db-a898-02b1faf7f3d2.png"
                alt="Shotokan Karate Training Camp 2025 Poster"
                className="w-full h-auto rounded border-2 border-karate-gold"
              />
              <div className="mt-4 bg-gradient-to-r from-karate-gold/20 to-karate-red/10 p-4 rounded-lg">
                <p className="text-lg font-medium font-japanese text-karate-black text-center">
                  🥋 Shotokan Karate Training Camp 2025 - November 23, 2025
                </p>
              </div>
              <DialogClose asChild>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="absolute top-2 right-2 rounded-full h-8 w-8 p-0 bg-karate-gold border-karate-red hover:bg-karate-red hover:text-white transition-colors duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </Button>
              </DialogClose>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default EventSection;
