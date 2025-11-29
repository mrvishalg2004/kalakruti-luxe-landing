import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Upload, Send } from "lucide-react";

const CustomOrderForm = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
            Design Your <span className="text-gradient-gold">Dream Blouse</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Share your vision with us and let our artisans bring it to life
          </p>
        </div>

        <Card className="border-2 border-gold/30 shadow-gold-glow bg-gradient-to-br from-card to-card/80">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-serif text-primary">Book Your Custom Order</CardTitle>
            <CardDescription>Fill in the details below and we'll get back to you within 24 hours</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground font-semibold">Your Name *</Label>
                <Input 
                  id="name" 
                  placeholder="Enter your full name" 
                  className="border-gold/20 focus:border-gold transition-colors"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="whatsapp" className="text-foreground font-semibold">WhatsApp Number *</Label>
                <Input 
                  id="whatsapp" 
                  type="tel" 
                  placeholder="+91 XXXXX XXXXX" 
                  className="border-gold/20 focus:border-gold transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="occasion" className="text-foreground font-semibold">Occasion *</Label>
              <Input 
                id="occasion" 
                placeholder="e.g., Wedding, Reception, Sangeet" 
                className="border-gold/20 focus:border-gold transition-colors"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="design-idea" className="text-foreground font-semibold">Design Idea</Label>
              <Textarea 
                id="design-idea" 
                placeholder="Describe your vision - colors, motifs, style preferences..."
                className="border-gold/20 focus:border-gold transition-colors min-h-[120px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="upload" className="text-foreground font-semibold">Upload Reference Images (Optional)</Label>
              <div className="border-2 border-dashed border-gold/30 rounded-lg p-8 text-center hover:border-gold/50 transition-colors cursor-pointer">
                <Upload className="w-8 h-8 text-gold mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  PNG, JPG up to 10MB
                </p>
              </div>
            </div>

            <Button variant="hero" size="lg" className="w-full group">
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              Book Your Slot
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              By submitting this form, you agree to our terms and privacy policy
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CustomOrderForm;
