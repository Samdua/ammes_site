import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import ammesLogo from "@/assets/ammes-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & About */}
          <div className="flex flex-col items-center md:items-start">
            <img src={ammesLogo} alt="AMMES Logo" className="h-20 w-auto mb-4" />
            <h3 className="font-bold text-xl mb-2">AMMES</h3>
            <p className="text-primary-foreground/80 text-sm text-center md:text-left">
              Association of Marine and Mechanical Engineering Students, Regional Maritime University
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/" className="text-primary-foreground/80 hover:text-secondary text-sm transition-colors">Home</Link>
              <Link to="/executives" className="text-primary-foreground/80 hover:text-secondary text-sm transition-colors">Executives</Link>
              <Link to="/gallery" className="text-primary-foreground/80 hover:text-secondary text-sm transition-colors">Gallery</Link>
              <Link to="/past-questions" className="text-primary-foreground/80 hover:text-secondary text-sm transition-colors">Past Questions</Link>
              <Link to="/courses" className="text-primary-foreground/80 hover:text-secondary text-sm transition-colors">Courses</Link>
              <Link to="/contact" className="text-primary-foreground/80 hover:text-secondary text-sm transition-colors">Contact</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-secondary" />
                <a href="mailto:rmuames@gmail.com" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  rmuames@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-secondary" />
                <a href="tel:+233594016404" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  +233 59 401 6404
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-secondary" />
                <span className="text-primary-foreground/80">Regional Maritime University, Accra</span>
              </div>
              <div className="flex gap-3 mt-4">
                {/* <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  <Facebook className="h-5 w-5" />
                </a> */}
                <a href="https://www.instagram.com/ammesrmu/?utm_source=ig_web_button_share_sheet" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/in/ammes-rmu-549aa1234" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} AMMES - RMU. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
