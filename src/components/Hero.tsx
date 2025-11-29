import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import { ArrowRight, Sparkles, Crown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-maroon/80 pattern-dots"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>
      </div>

      {/* Animated Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border-4 border-gold/20 rounded-full animate-float-slow blur-sm"></div>
      <div className="absolute top-40 right-20 w-24 h-24 border-2 border-emerald/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 right-16 w-20 h-20 border-3 border-gold/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 left-20 w-16 h-16 border-2 border-maroon/40 rounded-full animate-float-slow" style={{ animationDelay: '1.5s' }}></div>
      
      {/* Floating Crown Icons */}
      <Crown className="absolute top-1/4 right-1/4 w-12 h-12 text-gold/20 animate-float" style={{ animationDelay: '0.5s' }} />
      <Crown className="absolute bottom-1/3 left-1/4 w-8 h-8 text-gold/15 animate-float-slow" style={{ animationDelay: '2.5s' }} />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto py-20">
        <div className="animate-fade-in-scale">
          <div className="inline-flex items-center gap-2 mb-8 px-6 py-3 glass-dark rounded-full border border-gold/40 hover-glow animate-pulse-glow">
            <Sparkles className="w-5 h-5 text-gold animate-pulse" />
            <span className="text-gold text-sm md:text-base font-medium tracking-widest uppercase">Premium Handcrafted Excellence</span>
            <Sparkles className="w-5 h-5 text-gold animate-pulse" />
          </div>
        </div>

        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-bold mb-8 animate-fade-in-up leading-tight" style={{ animationDelay: '0.1s' }}>
          <span className="text-shimmer inline-block">Kalakruti</span>
        </h1>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-gold mb-6 animate-fade-in-up tracking-wide" style={{ animationDelay: '0.2s' }}>
          Handcrafted Ari Work Excellence
        </h2>

        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.25s' }}></div>

        <p className="text-xl sm:text-2xl md:text-3xl text-gold/90 mb-14 max-w-4xl mx-auto font-body leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          Where Traditional Craftsmanship Meets Modern Elegance
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-scale" style={{ animationDelay: '0.4s' }}>
          <Button variant="hero" size="xl" className="group min-w-[200px] text-lg shadow-luxury hover-scale">
            Explore Designs
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
          </Button>
          <Button variant="royal" size="xl" className="min-w-[200px] text-lg shadow-luxury hover-scale">
            Custom Orders
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-7 h-12 border-2 border-gold/50 rounded-full flex items-start justify-center p-2 hover:border-gold transition-colors cursor-pointer">
            <div className="w-2 h-4 bg-gold/70 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
