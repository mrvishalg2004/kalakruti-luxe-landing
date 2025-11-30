import { Crown, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 bg-transparent">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <Crown className="w-6 h-6 text-white" />
            <span className="text-white text-2xl font-serif font-bold tracking-widest">
              Kalakruti
            </span>
          </div>
          <span className="text-white text-xs tracking-[0.3em] ml-8 uppercase font-light">
            Foundation
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-10">
          <a href="#home" className="text-white text-sm font-normal hover:text-white/80 transition-colors flex items-center gap-1">
            Homes <ChevronDown className="w-3 h-3" />
          </a>
          <a href="#about" className="text-white text-sm font-normal hover:text-white/80 transition-colors flex items-center gap-1">
            About <ChevronDown className="w-3 h-3" />
          </a>
          <a href="#showcase" className="text-white text-sm font-normal hover:text-white/80 transition-colors flex items-center gap-1">
            News <ChevronDown className="w-3 h-3" />
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
