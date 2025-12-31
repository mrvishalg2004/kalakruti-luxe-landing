import { ChevronDown, Download } from "lucide-react";
import heroBackground from "@/assets/hero image.jpg";
import logo from "@/assets/mylogo.png";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const handleDownloadCatalog = () => {
    // Create a link element to trigger download
    const link = document.createElement('a');
    link.href = '/Kalakruti-Catalog.pdf'; // Update this path to your actual catalog file
    link.download = 'Kalakruti-Catalog.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-8 py-32 pt-44 sm:pt-40">
        {/* New Year Greeting Badge */}
        <div className="new-year-badge mb-6 px-6 py-2 rounded-full bg-gradient-to-r from-amber-500/20 via-purple-500/20 to-pink-500/20 border border-amber-400/30 backdrop-blur-sm">
          <span className="text-sm md:text-base font-medium bg-gradient-to-r from-amber-300 via-rose-300 to-amber-300 bg-clip-text text-transparent">
            ✨ Wishing You a Happy New Year 2026! ✨
          </span>
        </div>

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

        {/* Download Catalog Button */}
        <div className="download-button-wrapper mt-8">
          <Button
            onClick={handleDownloadCatalog}
            className="group relative bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 hover:from-amber-500 hover:via-yellow-600 hover:to-amber-500 text-gray-900 font-bold px-10 py-7 text-lg md:text-xl rounded-full shadow-2xl hover:shadow-amber-500/50 transition-all duration-500 hover:scale-110 flex items-center gap-3 overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></span>
            <Download className="w-6 h-6 group-hover:animate-bounce relative z-10" />
            <span className="relative z-10 tracking-wide">Download Catalog</span>
          </Button>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/80" strokeWidth={1.5} />
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
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

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(251, 191, 36, 0.5), 0 0 40px rgba(251, 191, 36, 0.3), 0 0 60px rgba(251, 191, 36, 0.1);
          }
          50% {
            box-shadow: 0 0 30px rgba(251, 191, 36, 0.8), 0 0 60px rgba(251, 191, 36, 0.5), 0 0 90px rgba(251, 191, 36, 0.3);
          }
        }

        @keyframes badge-glow {
          0%, 100% {
            box-shadow: 0 0 10px rgba(251, 191, 36, 0.3), 0 0 20px rgba(168, 85, 247, 0.2);
          }
          50% {
            box-shadow: 0 0 20px rgba(251, 191, 36, 0.5), 0 0 40px rgba(168, 85, 247, 0.3);
          }
        }

        @keyframes badge-shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }
        
        .logo-container img {
          animation: fadeInScale 1.5s ease-out forwards;
        }
        
        .logo-container:hover img {
          animation: float 3s ease-in-out infinite;
        }

        .download-button-wrapper button {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .download-button-wrapper button:hover {
          animation: none;
        }

        .new-year-badge {
          animation: badge-glow 3s ease-in-out infinite, fadeInScale 1s ease-out;
        }

        .new-year-badge span {
          background-size: 200% auto;
          animation: badge-shimmer 4s linear infinite;
        }
      `}} />
    </section>
  );
};

export default Hero;
