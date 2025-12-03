import { ChevronDown } from "lucide-react";
import heroBackground from "@/assets/hero image.jpg";
import logo from "@/assets/mylogo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBackground} 
          alt="Hero Background" 
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-8 py-32">
        {/* Main Logo */}
        <div className="logo-container">
          <img 
            src={logo} 
            alt="Kalakruti Foundation" 
            className="w-auto h-48 md:h-64 lg:h-80 object-contain mb-12"
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/80" strokeWidth={1.5} />
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(30px);
          }
          50% {
            opacity: 0.5;
            transform: scale(0.95) translateY(15px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.05);
          }
        }
        
        .logo-container img {
          animation: fadeInScale 1.5s ease-out forwards;
        }
        
        .logo-container:hover img {
          animation: float 3s ease-in-out infinite;
        }
      `}} />
    </section>
  );
};

export default Hero;
