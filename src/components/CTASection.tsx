
import Section from "./Section";
import Button from "./Button";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";

const CTASection = () => {
  const { t } = useTranslation();
  
  return (
    <Section className="bg-lime-500 text-black">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="heading-lg ">{t("ctaTitle")}</h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto ">
            {t("ctaDescription")}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4 ">
            <Button 
              href="/enrollment" 
              className="bg-white text-black hover:bg-lime-300/90 active:bg-white/95"
              size="lg"
            >
              {t("ctaButtonApply")}
              <ArrowRight size={18} className="ml-2" />
            </Button>
            <Button 
              href="/contact"
              variant="outline" 
              className="border-white/20 text-black hover:bg-yellow-500"
              size="lg"
            >
              {t("ctaButtonContact")}
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CTASection;
