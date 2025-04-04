
import { useState } from "react";
import Section from "./Section";
import Button from "./Button";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import bb from "../assets/bb.jpg";
import bbb from "../assets/bbb.jpg";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const galleryImages = [
    {
      src: bb,
      alt: "Modern classroom with students"
    },
    {
      src: bb,
      alt: "Children playing in schoolyard"
    },
    {
      src: bbb,
      alt: "School library with students reading"
    },
    {
      src: bbb,
      alt: "Art class in session"
    },
    {
      src: bb,
      alt: "Music lesson at school"
    },
    {
      src: bbb,
      alt: "School sports activities"
    }
  ];
  
  const openModal = (src: string) => {
    setSelectedImage(src);
    document.body.style.overflow = "hidden";
  };
  
  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <Section id="gallery">
      <div className="container mx-auto">
        <div className="max-w-xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="heading-lg mb-4 animate-reveal">School Life Gallery</h2>
          <p className="text-muted-foreground animate-reveal">
            Get a glimpse of life at Awono bilogue through our photo gallery showcasing 
            activities, events, and daily moments of learning and joy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="rounded-xl overflow-hidden shadow-subtle border border-border/50 cursor-pointer transition-all hover:shadow-glass hover:scale-[1.02] animate-reveal"
              onClick={() => openModal(image.src)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-10 animate-reveal">
          <Button href="/gallery">View Full Gallery</Button>
        </div>
        
        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <div className="relative max-w-4xl w-full">
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-white/80 transition-colors"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
              
              <img
                src={selectedImage}
                alt="Gallery image"
                className={cn(
                  "w-full h-auto max-h-[80vh] rounded-lg shadow-lg",
                  "animate-scale-in"
                )}
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </div>
    </Section>
  );
};

export default GallerySection;
