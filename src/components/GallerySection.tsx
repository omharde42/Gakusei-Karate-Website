import { useState } from 'react';
import { 
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

// Sample gallery images (replace with actual images when available)
const galleryImages = [
  {
    id: 1, 
    src: "https://images.unsplash.com/photo-1599857440084-7230cce3e886?auto=format&fit=crop&q=80",
    alt: "Students practicing kata"
  },
  {
    id: 2, 
    src: "https://images.unsplash.com/photo-1601588462477-e76b16de79f3?auto=format&fit=crop&q=80",
    alt: "Karate belt grading ceremony"
  },
  {
    id: 3, 
    src: "https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&q=80",
    alt: "Sensei demonstrating technique"
  },
  {
    id: 4, 
    src: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80",
    alt: "Karate tournament"
  },
  {
    id: 5, 
    src: "https://images.unsplash.com/photo-1605296866985-34c6bafd2efd?auto=format&fit=crop&q=80",
    alt: "Group class training"
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
