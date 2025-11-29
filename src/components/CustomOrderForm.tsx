import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Upload, ArrowRight } from "lucide-react";

const CustomOrderForm = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-muted/40 via-background to-muted/20 relative overflow-hidden">
      <div className="absolute inset-0 pattern-grid opacity-10"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-emerald/10 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block mb-6">
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
            Design Your Dream Blouse <span className="text-gradient-gold">With Us</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Let's bring your vision to life with our expert craftsmanship
          </p>
        </div>

        <Card className="border-2 border-gold/40 shadow-luxury bg-gradient-to-br from-card via-card to-muted/30 p-8 md:p-12 hover:border-gold/60 transition-all duration-500 animate-fade-in-scale" style={{ animationDelay: '0.2s' }}>
          {/* Top Accent */}
          <div className="h-1 bg-gradient-to-r from-gold via-emerald to-maroon mb-10 rounded-full"></div>
          
          <form className="space-y-8">
            <div className="group">
              <Label htmlFor="name" className="text-xl font-serif text-primary mb-3 block flex items-center gap-2">
                Your Name *
                <span className="text-gold text-sm">✦</span>
              </Label>
              <Input
                id="name"
                placeholder="Enter your full name"
                className="border-2 border-gold/30 focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-300 h-14 text-lg rounded-xl shadow-sm hover:shadow-gold-glow"
              />
            </div>

            <div className="group">
              <Label htmlFor="whatsapp" className="text-xl font-serif text-primary mb-3 block flex items-center gap-2">
                WhatsApp Number *
                <span className="text-gold text-sm">✦</span>
              </Label>
              <Input
                id="whatsapp"
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                className="border-2 border-gold/30 focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-300 h-14 text-lg rounded-xl shadow-sm hover:shadow-gold-glow"
              />
            </div>

            <div className="group">
              <Label htmlFor="occasion" className="text-xl font-serif text-primary mb-3 block flex items-center gap-2">
                Occasion *
                <span className="text-gold text-sm">✦</span>
              </Label>
              <Input
                id="occasion"
                placeholder="e.g., Wedding, Reception, Sangeet"
                className="border-2 border-gold/30 focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-300 h-14 text-lg rounded-xl shadow-sm hover:shadow-gold-glow"
              />
            </div>

            <div className="group">
              <Label htmlFor="design" className="text-xl font-serif text-primary mb-3 block flex items-center gap-2">
                Design Idea / Special Requirements
              </Label>
              <Textarea
                id="design"
                placeholder="Describe your dream design, preferred colors, motifs (peacock, floral, etc.), or any special requirements..."
                className="border-2 border-gold/30 focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-300 min-h-40 text-lg rounded-xl shadow-sm hover:shadow-gold-glow resize-none"
              />
            </div>

            <div className="group">
              <Label htmlFor="upload" className="text-xl font-serif text-primary mb-3 block flex items-center gap-2">
                Upload Reference Images
                <span className="text-muted-foreground text-sm font-normal">(Optional)</span>
              </Label>
              <div className="border-2 border-dashed border-gold/40 rounded-2xl p-12 text-center hover:border-gold/70 hover:bg-gold/5 transition-all duration-500 cursor-pointer group-hover:shadow-gold-glow">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold/20 to-emerald/20 border-2 border-gold/30 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Upload className="w-10 h-10 text-gold" />
                </div>
                <p className="text-muted-foreground text-lg font-medium mb-2">Click to upload or drag and drop</p>
                <p className="text-sm text-muted-foreground/70">PNG, JPG up to 10MB</p>
              </div>
            </div>

            <Button 
              type="submit" 
              variant="hero" 
              size="lg" 
              className="w-full text-xl h-16 gold-shimmer shadow-luxury hover-scale mt-10"
            >
              Book Your Slot
              <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform" />
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default CustomOrderForm;
