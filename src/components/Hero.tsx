import { Button } from "@/components/ui/button";
import galleryImage from "@/assets/gallery-1.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-dark via-purple-mid to-purple-light">
        {/* Decorative circles */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-light/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-purple-mid/20 rounded-full blur-3xl"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 py-20 grid md:grid-cols-2 gap-12 items-center w-full">
        {/* Left Content */}
        <div className="text-left space-y-8">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gold uppercase tracking-wide leading-tight">
            LANDING PAGE
          </h1>
          
          <p className="text-white text-lg md:text-xl leading-relaxed max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="flex gap-6 pt-4">
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-gold text-gold bg-transparent hover:bg-gold hover:text-purple-dark transition-all duration-300 px-8 py-6 text-base font-semibold tracking-wider"
            >
              SIGN IN
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-gold text-gold bg-transparent hover:bg-gold hover:text-purple-dark transition-all duration-300 px-8 py-6 text-base font-semibold tracking-wider"
            >
              SIGN UP
            </Button>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="relative flex items-center justify-center">
          <div className="relative w-full max-w-2xl aspect-square">
            {/* Main circular background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[500px] h-[500px] rounded-full bg-gradient-to-br from-pink-400 via-purple-400 to-orange-300 opacity-60 blur-2xl animate-pulse-glow"></div>
            </div>
            
            {/* Decorative circles */}
            <div className="absolute top-20 right-24 w-24 h-24 rounded-full bg-gradient-to-br from-orange-300 to-pink-300 animate-float"></div>
            <div className="absolute top-32 right-12 w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 animate-float-slow" style={{ animationDelay: '1s' }}></div>
            
            {/* Image placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src={galleryImage} 
                alt="Handcrafted Ari Work" 
                className="w-[400px] h-[400px] object-cover rounded-full shadow-2xl"
              />
            </div>
            
            {/* Decorative leaves/elements */}
            <div className="absolute bottom-32 left-24 w-32 h-32 bg-gradient-to-br from-cyan-300 to-teal-300 opacity-40 rounded-full blur-xl animate-float" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-br from-blue-300 to-cyan-300 opacity-40 rounded-full blur-xl animate-float-slow" style={{ animationDelay: '1.5s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
