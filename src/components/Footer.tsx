import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-16 px-6 md:px-12 ">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-lime-500 font-bold text-xl">Awono</span>
              <span className="font-medium text-xl">Bilogue</span>
            </Link>
            <p className="text-muted-foreground max-w-xs">
              Nurturing young minds and inspiring future leaders in a safe and
              creative environment.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="text-foreground/60 hover:text-lime-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-foreground/60 hover:text-lime-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-foreground/60 hover:text-lime-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-foreground/70 hover:text-lime-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/programs"
                  className="text-foreground/70 hover:text-lime-500 transition-colors"
                >
                  Academic Programs
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className="text-foreground/70 hover:text-lime-500 transition-colors"
                >
                  School News
                </Link>
              </li>
              <li>
                <Link
                  to="/calendar"
                  className="text-foreground/70 hover:text-lime-500 transition-colors"
                >
                  School Calendar
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-foreground/70 hover:text-lime-500 transition-colors"
                >
                  Photo Gallery
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Useful Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/enrollment"
                  className="text-foreground/70 hover:text-lime-500 transition-colors"
                >
                  Enrollment Information
                </Link>
              </li>
              <li>
                <Link
                  to="/policies"
                  className="text-foreground/70 hover:text-lime-500 transition-colors"
                >
                  School Policies
                </Link>
              </li>
              <li>
                <Link
                  to="/resources"
                  className="text-foreground/70 hover:text-lime-500 transition-colors"
                >
                  Student Resources
                </Link>
              </li>
              <li>
                <Link
                  to="/parents"
                  className="text-foreground/70 hover:text-lime-500 transition-colors"
                >
                  Parent Portal
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-foreground/70 hover:text-lime-500 transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin
                  size={20}
                  className="text-lime-500 flex-shrink-0 mt-1"
                />
                <span className="text-foreground/70">
                  Yaoumde, Obala, Nkol-Bikok
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-lime-500 flex-shrink-0" />
                <span className="text-foreground/70">(123) 456-7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-lime-500 flex-shrink-0" />
                <span className="text-foreground/70">
                  info@awonobilogue.edu
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-foreground/60 text-sm">
            © {currentYear} Complex Bilingual School Awono Bilogue. All rights
            reserved. Site created by{" "}
            <a
              href="https://techspring.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-lime-500"
            >
              Techspring
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
