import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-24 h-24 border-2 border-gold/30 rounded-full animate-float"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 border-2 border-gold/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gold/20 backdrop-blur-sm rounded-full border border-gold/30">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-gold text-sm font-medium tracking-wide">Premium Handcrafted Excellence</span>
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <span className="text-gradient-gold">Kalakruti</span>
        </h1>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gold mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Handcrafted Ari Work Excellence
        </h2>

        <p className="text-lg sm:text-xl md:text-2xl text-gold/90 mb-12 max-w-3xl mx-auto font-body animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          Where Traditional Craftsmanship Meets Modern Elegance
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Button variant="hero" size="xl" className="group">
            Explore Designs
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="royal" size="xl">
            Custom Orders
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-gold/70 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
