import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/mylogo.png";

const Navigation = () => {
  return (
    <nav className="hidden fixed top-0 left-0 right-0 z-50 px-8 py-3 bg-gradient-to-b from-black/90 via-black/70 to-transparent backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Kalakruti Foundation Logo" className="h-16 w-auto drop-shadow-2xl" />
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-10">
          <a href="#home" className="text-white text-sm font-normal hover:text-white/80 transition-colors flex items-center gap-1">
            Homes <ChevronDown className="w-3 h-3" />
          </a>
          <a href="#about" className="text-white text-sm font-normal hover:text-white/80 transition-colors flex items-center gap-1">
            About <ChevronDown className="w-3 h-3" />
          </a>
          <a href="#custom" className="text-white text-sm font-normal hover:text-white/80 transition-colors flex items-center gap-1">
            Components <ChevronDown className="w-3 h-3" />
          </a>
          <a href="#docs" className="text-white text-sm font-normal hover:text-white/80 transition-colors flex items-center gap-1">
            Docs <ChevronDown className="w-3 h-3" />
          </a>
        </div>

        {/* Purchase Button */}
        <Button 
          variant="outline" 
          className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-gray-900 transition-all duration-300 px-8 py-2 text-sm font-medium rounded-full"
        >
          Purchase
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
