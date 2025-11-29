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
    <footer className="bg-gradient-to-br from-primary via-maroon to-secondary text-gold relative overflow-hidden">
      {/* Pattern Overlay */}
      <div className="absolute inset-0 pattern-dots opacity-10"></div>
      
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          {/* Brand Section */}
          <div className="text-center md:text-left animate-fade-in-up">
            <h3 className="text-4xl lg:text-5xl font-serif font-bold mb-6 text-shimmer">
              Kalakruti
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-emerald mb-6 md:mx-0 mx-auto"></div>
            <p className="text-gold/90 leading-relaxed text-lg">
              Handcrafted Ari work excellence since decades. Where tradition meets contemporary elegance.
            </p>
          </div>

          {/* Navigation */}
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h4 className="text-xl font-serif font-bold mb-6 text-gold">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              {navigationLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className="text-gold/80 hover:text-gold transition-all duration-300 text-lg hover:translate-x-1 inline-block hover:scale-105"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="text-center md:text-right animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-xl font-serif font-bold mb-6 text-gold">Connect With Us</h4>
            <div className="flex justify-center md:justify-end gap-4 mb-8">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-gold hover:text-gold hover:bg-gold/30 border-2 border-gold/40 hover:border-gold transition-all duration-300 hover:scale-110 hover:-translate-y-1 w-12 h-12 rounded-full"
              >
                <Instagram className="w-6 h-6" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-gold hover:text-gold hover:bg-gold/30 border-2 border-gold/40 hover:border-gold transition-all duration-300 hover:scale-110 hover:-translate-y-1 w-12 h-12 rounded-full"
              >
                <Facebook className="w-6 h-6" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-gold hover:text-gold hover:bg-gold/30 border-2 border-gold/40 hover:border-gold transition-all duration-300 hover:scale-110 hover:-translate-y-1 w-12 h-12 rounded-full"
              >
                <Mail className="w-6 h-6" />
              </Button>
            </div>
            <Button variant="hero" size="lg" className="gold-shimmer group shadow-luxury hover-scale text-lg px-8 py-6">
              <MessageCircle className="w-6 h-6" />
              WhatsApp Us
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t-2 border-gold/30 text-center">
          <p className="text-gold/80 text-base">
            © {new Date().getFullYear()} Kalakruti. All rights reserved. Crafted with passion and precision.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
