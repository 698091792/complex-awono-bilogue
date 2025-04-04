
import { useTranslation } from "@/contexts/TranslationContext";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useTranslation();

  return (
    <div className="flex items-center space-x-2">
      <Button
        variant="ghost"
        size="sm"
        className={cn(
          "font-medium",
          language === "en" ? "text-lime-500" : "text-foreground/70"
        )}
        onClick={() => changeLanguage("en")}
      >
        EN
      </Button>
      <span className="text-foreground/30">|</span>
      <Button
        variant="ghost"
        size="sm"
        className={cn(
          "font-medium",
          language === "fr" ? "text-lime-500" : "text-foreground/70"
        )}
        onClick={() => changeLanguage("fr")}
      >
        FR
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
