
import { useState } from 'react';
import { 
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Image } from "lucide-react";

// Actual dojo gallery images
const galleryImages = [
  {
    id: 1, 
    src: "/lovable-uploads/c52765fd-9714-4b11-9152-443a5e107bca.png",
    alt: "Advanced students with instructor in training hall"
  },
  {
    id: 2, 
    src: "/lovable-uploads/5f64a387-ff16-448a-aad1-e0ba35e60d86.png",
    alt: "Children's class group photo with colorful belts"
  },
  {
    id: 3, 
    src: "/lovable-uploads/6f2f0b16-2562-4086-b2d7-957c1e80695c.png",
    alt: "Sensei demonstrating technique with young students"
  },
  {
    id: 4, 
    src: "/lovable-uploads/5ffe01fc-e522-443a-b7fe-921cd1b95494.png",
    alt: "Large group of students with varied belt colors"
  },
  {
    id: 5, 
    src: "/lovable-uploads/5dd7888a-5f0f-4c39-9b37-771a018f8ff5.png",
    alt: "Students with trophies after tournament"
  },
  {
    id: 6, 
    src: "/lovable-uploads/6ab6f917-b470-493e-a1df-29f37346dc6d.png",
    alt: "Group of yellow belt students with instructor"
  },
  {
    id: 7, 
    src: "/lovable-uploads/19b7512f-ffa6-4219-8fce-eeafcec1fae2.png",
    alt: "Tournament match with referee and spectators"
  },
  {
    id: 8, 
    src: "/lovable-uploads/5ce37402-1abf-4167-909d-b5b9c2a602fe.png",
    alt: "Young student practicing flexibility exercises"
  },
  {
    id: 9, 
    src: "/lovable-uploads/5ae16b20-1a02-4677-b9e4-a4cf41ce1829.png",
    alt: "Black belt practitioners at ninja wall training facility"
  },
  {
    id: 10, 
    src: "/lovable-uploads/2ef2012a-a717-4dac-9b77-deb6204a878b.png",
    alt: "Adult and child students with instructor"
  },
  {
    id: 11, 
    src: "/lovable-uploads/0bbfd234-9e2f-4f6c-9ddb-3e1ad90c36bc.png",
    alt: "Yellow belt students with instructor showing fighting stance"
  },
  {
    id: 12, 
    src: "/lovable-uploads/b58f3604-8133-453a-9534-7cd8e00304f7.png",
    alt: "Advanced class with black belt instructors"
  },
  {
    id: 13, 
    src: "/lovable-uploads/c470125e-fe55-4a31-9a94-43cbc0b1874e.png",
    alt: "Students with certificates from karate championship"
  },
  {
    id: 14, 
    src: "/lovable-uploads/5f1a3294-5be6-4676-a5b6-61cc817a8b01.png",
    alt: "Adult black belt students with sensei"
  }
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <section id="gallery" className="py-16 bg-gradient-to-br from-gray-50 to-karate-lightgold/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-karate-red text-center md:text-left mb-6 font-japanese">
              ギャラリー - Gallery
            </h2>
            <p className="text-center md:text-left text-karate-dark text-lg mb-6 max-w-2xl font-japanese font-light">
              Explore moments from training, tournaments, and our karate community.
            </p>
          </div>
          <div className="w-40 h-40 animate-float">
            <img 
              src="/lovable-uploads/98bc18da-a8e3-4271-9086-87fef0798538.png" 
              alt="The Karate Gakusei Dojo Logo" 
              className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg border-2 border-karate-gold hover:shadow-xl transition-shadow duration-300">
            <Image className="text-karate-red mr-2 h-5 w-5" />
            <span className="text-karate-dark font-medium font-japanese">The Karate Gakusei Dojo Memories</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id}
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group animate-fadeInUp border-2 border-transparent hover:border-karate-gold"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-w-4 aspect-h-3">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://placehold.co/600x400?text=Karate+Image+${image.id}`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-karate-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-medium font-japanese text-sm transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      {image.alt}
                    </p>
                  </div>
                </div>
                <div className="absolute top-2 right-2 bg-karate-gold text-karate-black px-2 py-1 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Image modal/dialog */}
        <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
          <DialogContent className="max-w-4xl w-[90vw] border-2 border-karate-gold">
            {selectedImage && (
              <div className="relative">
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.alt} 
                  className="w-full h-auto rounded border-2 border-karate-gold"
                />
                <div className="mt-4 bg-gradient-gold p-4 rounded-lg">
                  <p className="text-lg font-medium font-japanese text-karate-black">{selectedImage.alt}</p>
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
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default GallerySection;
