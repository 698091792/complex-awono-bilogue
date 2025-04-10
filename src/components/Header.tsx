import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/contexts/TranslationContext";
import LanguageSwitcher from "./LanguageSwitcher";
import complex from "../assets/complex .jpg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
      setIsVisible(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigation = [
    { name: t("home"), href: "/" },
    { name: t("about"), href: "/about" },
    { name: t("programs"), href: "/programs" },
    { name: t("news"), href: "/news" },
    { name: t("gallery"), href: "/gallery" },
    { name: t("contact"), href: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out py-4 px-6 md:px-12",
        isScrolled ? "glass shadow-subtle" : "bg-transparent",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center space-x-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <img
              src={complex}
              alt="logo"
              className="w-16 h-16 md:w-24 md:h-24 rounded-full"
            />
            <span className="text-lime-500 font-bold text-lg md:text-2xl">
              Groupe Scolaire Bilingue
            </span>
            <span className="text-yellow-400 font-medium text-lg md:text-2xl">
              Awono Bilogue
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-foreground/80 hover:text-lime-500 transition-colors duration-200 font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <LanguageSwitcher />
          </div>

          {/* Mobile Nav Button */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageSwitcher />
            <button
              type="button"
              className="text-black"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 transition-opacity duration-300"
          onClick={toggleMenu}
        />
      )}

      {/* Horizontal Mobile Menu */}
      {isMenuOpen && (
        <div
          className={cn(
            "fixed inset-x-0 top-20 z-50 bg-white px-4 py-6 flex items-center justify-center overflow-x-auto shadow-md",
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          )}
        >
          <nav className="flex space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-black hover:text-lime-500 transition-colors duration-200 text-base font-medium whitespace-nowrap"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
