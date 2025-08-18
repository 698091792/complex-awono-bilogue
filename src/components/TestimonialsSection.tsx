import { useState, useEffect } from "react";
import Section from "./Section";
import { Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import aaa from "../assets/aaa.jpg";

interface Testimonial {
  content: string;
  author: string;
  role: string;
  avatar: string;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      content: "Awono Bilogue has been an amazing school for my daughter. The teachers truly care about each student and create a positive learning environment that fosters growth and curiosity.",
      author: "Sarah Johnson",
      role: "Parent of Grace, Year 3",
      avatar: aaa
    },
    {
    content:
      "Choosing Awono Bilogue for our daughter was the best decision. Her confidence has soared, and she’s genuinely excited to learn every day.",
    author: "Sarah Mensah",
    role: "Parent of Ama, Year 3",
    avatar: aaa
  },
  {
    content:
      "The teachers balance rigor with real care. Our son has improved in maths and reading, but what impresses us most is his kindness and teamwork.",
    author: "Daniel Nkou",
    role: "Parent of Brian, Year 4",
    avatar: aaa
  },
  {
    content:
      "Awono Bilogue provides a safe, engaging environment. Our child has developed strong study habits and a love for science projects.",
    author: "Linda Okoro",
    role: "Parent of Chinedu, Year 6",
    avatar: aaa
  },
  {
    content:
      "We value the bilingual foundation and the school’s emphasis on character. Our daughter now leads group presentations with ease.",
    author: "Patrick Talla",
    role: "Parent of Sandrine, Year 5",
    avatar: aaa
  },
  {
    content:
      "From the welcoming staff to the structured curriculum, everything inspires growth. Our son’s writing and critical thinking have leapt forward.",
    author: "Marie Claire",
    role: "Parent of Joel, Year 2",
    avatar: aaa
  },
  {
    content:
      "The enrichment activities are fantastic—music, sports, and clubs. Our child discovered a passion for robotics and problem-solving.",
    author: "Ibrahim Diallo",
    role: "Parent of Aisha, Year 6",
    avatar: aaa
  },
  {
    content:
      "Consistent communication and supportive teachers make a real difference. Our daughter feels seen, challenged, and celebrated.",
    author: "Grace Mbappe",
    role: "Parent of Eliane, Year 1",
    avatar: aaa
  },
    {
      content: "We couldn't be happier with our decision to enroll our son at Awono bilogue. The curriculum is challenging yet supportive, and we've seen tremendous academic and social growth.",
      author: "Michael Thompson",
      role: "Parent of Alex, Year 5",
      avatar: aaa
    },
    {
      content: "The teachers at Awono bilogue go above and beyond to ensure each child receives personalized attention. My twins have flourished academically and made wonderful friendships.",
      author: "Rebecca Martinez",
      role: "Parent of Sophia & Emma, Year 2",
      avatar: aaa
    }
  ];
  
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentTestimonial]); // Depend on currentTestimonial to restart interval

  return (
    <Section id="testimonials">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-lime-500 text-sm font-medium px-3 py-1 rounded-full mb-4">
            <Sparkles size={16} />
            <span>What Parents Say</span>
          </div>
          <h2 className="heading-lg mb-4 animate-reveal">Our Community's Voice</h2>
        </div>
        
        <div className="relative overflow-hidden">
          <div 
            className="transition-all duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
          >
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-xl p-8 shadow-subtle border border-border/50 max-w-7xl mx-auto">
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-6">
                        <p className="text-lg italic text-foreground">"{testimonial.content}"</p>
                      </div>
                      <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.author}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center space-x-2 mt-8">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white border border-border shadow-sm text-foreground hover:bg-secondary transition-colors duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-all duration-300",
                    currentTestimonial === index ? "bg-lime-500 scale-110" : "bg-border"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white border border-border shadow-sm text-foreground hover:bg-secondary transition-colors duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default TestimonialsSection;

