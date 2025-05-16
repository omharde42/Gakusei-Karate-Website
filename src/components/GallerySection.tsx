
import { useState } from 'react';
import { 
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Gallery, Image } from "lucide-react";

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
    <section id="gallery" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-karate-red text-center mb-6">
          Gallery
        </h2>
        <p className="text-center text-karate-dark text-lg mb-10 max-w-2xl mx-auto">
          Explore moments from training, tournaments, and our karate community.
        </p>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center bg-white px-4 py-2 rounded-full shadow-md">
            <Gallery className="text-karate-red mr-2 h-5 w-5" />
            <span className="text-karate-dark font-medium">The Karate Gakusei Dojo Memories</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div 
              key={image.id}
              className="relative overflow-hidden rounded-lg shadow-md cursor-pointer transform transition-transform hover:scale-105"
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-w-4 aspect-h-3">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="object-cover w-full h-full"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://placehold.co/600x400?text=Karate+Image+${image.id}`;
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-40 transition-all flex items-end">
                  <div className="p-4 w-full text-white bg-gradient-to-t from-black/60 to-transparent">
                    <p>{image.alt}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Image modal/dialog */}
        <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
          <DialogContent className="max-w-4xl w-[90vw]">
            {selectedImage && (
              <div className="relative">
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.alt} 
                  className="w-full h-auto rounded"
                />
                <div className="mt-4">
                  <p className="text-lg font-medium">{selectedImage.alt}</p>
                </div>
                <DialogClose asChild>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="absolute top-2 right-2 rounded-full h-8 w-8 p-0"
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
