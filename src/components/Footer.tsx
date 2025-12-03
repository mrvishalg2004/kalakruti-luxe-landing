import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Mail } from "lucide-react";
import logo from "@/assets/mylogo.png";
import whatsappIcon from "@/assets/whatsapp-icon.svg";

const Footer = () => {
  const navigationLinks = [
    { name: "Home", href: "#" },
    { name: "Gallery", href: "#showcase" },
    { name: "About Us", href: "#about" },
    { name: "Custom Orders", href: "#custom" },
  ];

  const services = [
    "Bridal Embroidery",
    "Ari Work",
    "Zardosi Work",
    "Custom Designs",
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-600/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rose-600/30 rounded-full blur-3xl"></div>
      </div>

      {/* Top Border Accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img src={logo} alt="Kalakruti Foundation" className="h-16 w-auto mb-4" />
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Handcrafted Ari work excellence. Where tradition meets contemporary elegance.
            </p>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-amber-500 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-amber-500 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="mailto:contact@kalakruti.com" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-amber-500 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              {navigationLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-amber-400 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-amber-400 transition-all duration-300"></span>
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Our Services</h4>
            <ul className="flex flex-col gap-3">
              {services.map((service, index) => (
                <li 
                  key={index}
                  className="text-gray-400 hover:text-amber-400 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Get In Touch</h4>
            <a 
              href="https://wa.me/919225546913?text= Hello, I want to know more.”"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/50"
            >
              <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Kalakruti. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
