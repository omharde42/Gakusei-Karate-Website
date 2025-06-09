
import { useState } from 'react';
import { 
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Download, Image } from "lucide-react";

const EventSection = () => {
  const [showPoster, setShowPoster] = useState(false);

  const handleDownloadPDF = () => {
    // This would typically link to an actual PDF file
    // For now, we'll create a downloadable link
    const link = document.createElement('a');
    link.href = '/lovable-uploads/93fc3e57-302f-41db-a898-02b1faf7f3d2.png';
    link.download = 'Karate-Rank-Evaluation-Event.pdf';
    link.click();
  };

  return (
    <section id="events" className="py-16 bg-gradient-to-br from-karate-lightgold/30 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-karate-red text-center md:text-left mb-6 font-japanese">
              イベント更新 - Event Updates
            </h2>
            <p className="text-center md:text-left text-karate-dark text-lg mb-6 max-w-2xl font-japanese font-light">
              Stay updated with our latest karate events and rank evaluations.
            </p>
          </div>
          <div className="w-32 h-32 animate-float">
            <img 
              src="/lovable-uploads/98bc18da-a8e3-4271-9086-87fef0798538.png" 
              alt="The Karate Gakusei Dojo Logo" 
              className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Featured Event Card */}
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-karate-gold">
          <div className="bg-gradient-to-r from-karate-red to-karate-navy text-white p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl md:text-3xl font-bold font-japanese">
                Karate Rank Evaluation Event
              </h3>
              <div className="bg-karate-gold text-karate-black px-4 py-2 rounded-full font-bold">
                UPCOMING
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Event Details */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Calendar className="text-karate-red h-6 w-6" />
                  <div>
                    <p className="font-semibold text-karate-dark">Event Date</p>
                    <p className="text-lg text-karate-navy font-bold">June 19, 2025</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Clock className="text-karate-red h-6 w-6" />
                  <div>
                    <p className="font-semibold text-karate-dark">Time</p>
                    <p className="text-lg text-karate-navy font-bold">8:00 AM to 10:00 AM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="text-karate-red h-6 w-6 mt-1" />
                  <div>
                    <p className="font-semibold text-karate-dark mb-2">Event Location</p>
                    <div className="bg-karate-lightgold/20 p-4 rounded-lg border-l-4 border-karate-gold">
                      <p className="font-bold text-karate-navy text-lg mb-2">Cobra Thai</p>
                      <p className="text-karate-dark">
                        Shop no 19/1, old 242, N 879, Lane,<br />
                        opposite to Reliance Mart,<br />
                        Tukaram Nagar, Kharadi, Pune,<br />
                        Maharashtra 411014
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-karate-gold/20 to-karate-red/10 p-6 rounded-lg">
                  <h4 className="font-bold text-karate-navy mb-3 text-lg">Event Highlights:</h4>
                  <ul className="space-y-2 text-karate-dark">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-karate-red rounded-full mr-3"></span>
                      Belt rank evaluation and promotion ceremony
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-karate-red rounded-full mr-3"></span>
                      Technical skills assessment
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-karate-red rounded-full mr-3"></span>
                      Kata performance demonstration
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-karate-red rounded-full mr-3"></span>
                      Certificate distribution
                    </li>
                  </ul>
                </div>
              </div>

              {/* Event Poster and Actions */}
              <div className="space-y-6">
                <div className="text-center">
                  <div 
                    className="relative cursor-pointer group"
                    onClick={() => setShowPoster(true)}
                  >
                    <img 
                      src="/lovable-uploads/93fc3e57-302f-41db-a898-02b1faf7f3d2.png"
                      alt="Karate Rank Evaluation Event Poster"
                      className="w-full max-w-md mx-auto rounded-lg shadow-lg border-2 border-karate-gold hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-karate-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                      <Image className="text-white h-8 w-8" />
                    </div>
                  </div>
                  <p className="text-sm text-karate-dark mt-2">Click to view full poster</p>
                </div>

                <div className="space-y-4">
                  <Button 
                    onClick={handleDownloadPDF}
                    className="w-full bg-karate-red hover:bg-red-700 text-white flex items-center justify-center space-x-2"
                  >
                    <Download className="h-5 w-5" />
                    <span>Download Event Details (PDF)</span>
                  </Button>

                  <div className="bg-karate-navy text-white p-4 rounded-lg text-center">
                    <p className="font-semibold mb-2">Registration Required</p>
                    <p className="text-sm">Contact Sensei Rizwan Shaikh for participation details</p>
                    <p className="text-karate-gold font-bold">+91 76202 38222</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-karate-gold/10 to-karate-red/10 p-6 rounded-lg max-w-4xl mx-auto border border-karate-gold">
            <h4 className="text-xl font-bold text-karate-navy mb-4">Important Notes</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div>
                <ul className="space-y-2 text-karate-dark">
                  <li>• Students must arrive 15 minutes before their scheduled time</li>
                  <li>• Proper karate gi (uniform) is mandatory</li>
                  <li>• Bring your current belt and student ID</li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2 text-karate-dark">
                  <li>• Parents/guardians are welcome to attend</li>
                  <li>• Photography will be available for certificate ceremony</li>
                  <li>• Refreshments will be provided after the event</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Poster Modal */}
        <Dialog open={showPoster} onOpenChange={setShowPoster}>
          <DialogContent className="max-w-4xl w-[90vw] border-2 border-karate-gold">
            <div className="relative">
              <img 
                src="/lovable-uploads/93fc3e57-302f-41db-a898-02b1faf7f3d2.png"
                alt="Karate Rank Evaluation Event Poster"
                className="w-full h-auto rounded border-2 border-karate-gold"
              />
              <div className="mt-4 bg-gradient-to-r from-karate-gold/20 to-karate-red/10 p-4 rounded-lg">
                <p className="text-lg font-medium font-japanese text-karate-black text-center">
                  Karate Rank Evaluation - June 19, 2025 at Cobra Thai, Kharadi
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
