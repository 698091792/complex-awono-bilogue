import { useState } from "react";
import Section from "@/components/Section";
import Button from "@/components/Button";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import { useNavigate } from "react-router-dom";
import d from "../assets/d.jpg";
import Footer from "@/components/Footer";

const FullGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const navigate = useNavigate();
  
  const galleryImages = [
    {
      src: d,
      alt: "Modern classroom with students"
    },
    {
      src: d,
      alt: "Children playing in schoolyard"
    },
    {
      src: d,
      alt: "School library with students reading"
    },
    {
      src: d,
      alt: "Art class in session"
    },
    {
      src: d,
      alt: "Music lesson at school"
    },
    {
      src: d,
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
    <Section id="full-gallery">
      <div className="container mx-auto">
        <Header />
        <div className="flex justify-between items-center mb-6">
          <h2 className="heading-lg">Full Gallery</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="rounded-xl overflow-hidden shadow-subtle border border-border/50 cursor-pointer transition-all hover:shadow-glass hover:scale-[1.02]"
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
        <Footer />
      </div>
    </Section>
  );
};

export default FullGallery;
