import { useState } from "react";
import { X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Sample gallery images - easily replaceable
  const galleryImages = [
    {
      id: 1,
      url: "/images/new_executives_handing_over.jpeg",
      title: "Handing Over Ceremony "
    },
    {
      id: 2,
      url: "/images/alifoe_gun.jpeg",
      title: "Engineer Alifoe in the workshop during industrial attachment"
    },
    {
      id: 3,
      url: "/images/Diploma_29_B.jpeg",
      title: "DME29 A on a fieldtrip to Tema Shipyard"
    },
    {
      id: 4,
      url: "/images/lesley.jpeg",
      title: "Former organizing secretary giving a speech at the first general meeting last semester"
    },
   
   
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Gallery
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Moments and memories from AMMES events and activities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer animate-fade-in hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => setSelectedImage(image.url)}
            >
              <div className="aspect-video">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-primary-foreground font-semibold">{image.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl p-0 bg-transparent border-none">
          <div className="relative">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-secondary transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Gallery image"
                className="w-full h-auto rounded-lg"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;
