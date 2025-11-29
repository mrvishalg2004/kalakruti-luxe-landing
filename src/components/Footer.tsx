import { Button } from "@/components/ui/button";
import { MessageCircle, Instagram, Facebook, Mail } from "lucide-react";

const Footer = () => {
  const navigationLinks = [
    { name: "Home", href: "#" },
    { name: "Gallery", href: "#" },
    { name: "Custom Orders", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <footer className="bg-gradient-to-br from-primary via-primary/95 to-secondary text-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-serif font-bold mb-4 text-gradient-gold">
              Kalakruti
            </h3>
            <p className="text-gold/80 leading-relaxed">
              Handcrafted Ari work excellence since decades. Where tradition meets contemporary elegance.
            </p>
          </div>

          {/* Navigation */}
          <div className="text-center">
            <h4 className="text-lg font-serif font-bold mb-4 text-gold">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {navigationLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className="text-gold/80 hover:text-gold transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-serif font-bold mb-4 text-gold">Connect With Us</h4>
            <div className="flex justify-center md:justify-end gap-4 mb-6">
              <Button variant="ghost" size="icon" className="text-gold hover:text-gold hover:bg-gold/20 border border-gold/30">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gold hover:text-gold hover:bg-gold/20 border border-gold/30">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gold hover:text-gold hover:bg-gold/20 border border-gold/30">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
            <Button variant="hero" size="lg" className="gold-shimmer group">
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gold/20 text-center">
          <p className="text-gold/70 text-sm">
            © {new Date().getFullYear()} Kalakruti. All rights reserved. Crafted with passion and precision.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
