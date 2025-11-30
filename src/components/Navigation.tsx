import { Crown } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Crown className="w-8 h-8 text-white" />
          <span className="text-white text-xl font-serif font-bold tracking-wider">
            KALAKRUTI
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-12">
          <a href="#home" className="text-gold text-sm font-medium hover:text-accent transition-colors tracking-wide">
            Home
          </a>
          <a href="#showcase" className="text-gold text-sm font-medium hover:text-accent transition-colors tracking-wide">
            Products
          </a>
          <a href="#custom" className="text-gold text-sm font-medium hover:text-accent transition-colors tracking-wide">
            Pricing
          </a>
          <a href="#contact" className="text-gold text-sm font-medium hover:text-accent transition-colors tracking-wide">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
