import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroBackground from "@/assets/hero-nature-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBackground} 
          alt="Hero Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-8 py-32">
        {/* Success Stories Label */}
        <p className="text-white/90 text-lg md:text-xl font-serif italic mb-8 tracking-wide">
          Success Stories
        </p>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white uppercase tracking-wider leading-tight mb-12 max-w-5xl">
          START WITH YOU
        </h1>

        {/* CTA Button */}
        <Button 
          size="lg"
          className="bg-teal hover:bg-teal/90 text-white border-0 transition-all duration-300 px-12 py-6 text-base font-semibold tracking-wider rounded-full shadow-lg hover:shadow-xl"
        >
          LEARN MORE
        </Button>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/80" strokeWidth={1.5} />
      </div>
    </section>
  );
};

export default Hero;
