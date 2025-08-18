
import Button from "@/components/Button";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "../contexts/TranslationContext";
import room from "../assets/room.jpg";

const HeroSection = () => {
  const { t } = useTranslation();
  
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-50">
      {/* Background shape */}
      <div className="absolute top-0 right-0 w-full h-full bg-primary/5 rounded-bl-[100px] -z-10" />
      
      {/* Animated circles for visual interest */}
      <div className="absolute -top-16 -right-16 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/4 -left-24 w-48 h-48 bg-primary/10 rounded-full blur-2xl -z-10" />
      
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 md:gap-6 items-center">
        <div className="max-w-2xl space-y-6 ">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/5 text-lime-500  text-sm font-medium mb-2 ">
            {t("heroTitle")}
          </div>
          <h1 className="text-4xl font-bold">
            Where Young Minds Grow and <span className="text-lime-500 ">Curiosity</span> Flourishes
          </h1>
          <p className="body-lg text-muted-foreground max-w-xl ">
            {t("heroSubtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 ">
            <Button href="/enrollment" size="lg">
              {t("ctaButtonApply")}
              <ArrowRight size={18} className="ml-2" />
            </Button>
            <Button href="/about" variant="outline" size="lg">
              {t("heroButton")}
            </Button>
          </div>
        </div>
        
        <div className="relative flex justify-center">
          <div className="w-full max-w-lg aspect-[4/3] rounded-2xl overflow-hidden shadow-glass">
            <img 
              src={room}
              alt="Happy students at Complex-awono-bilogue" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          
          {/* Stats card */}
          <div className="absolute -bottom-10 -left-5 glass rounded-xl p-5 shadow-glass max-w-[200px]">
            <div className="text-3xl font-bold text-lime-500">15+</div>
            <div className="text-sm text-foreground/80">Years of Excellence in Education</div>
          </div>
          
          {/* Accreditation badge */}
          <div className="absolute -right-5 top-1/4 glass rounded-xl p-4 shadow-glass">
            <div className="text-sm font-medium text-lime-500">Fully Accredited</div>
            <div className="text-xs text-foreground/70">Top-Rated Institution</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
