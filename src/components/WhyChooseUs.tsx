import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Scissors, Shirt, Gem, Flower2 } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Scissors,
      title: "100% Handcrafted Embroidery",
      description: "Every design is meticulously hand-stitched by our skilled artisans using traditional Ari work techniques passed down through generations.",
    },
    {
      icon: Shirt,
      title: "Custom Bridal & Festive Wear",
      description: "We specialize in creating bespoke pieces for weddings and special occasions, ensuring your outfit is as unique as your celebration.",
    },
    {
      icon: Gem,
      title: "Premium Threads, Stones & Zardosi",
      description: "We use only the finest materials - premium silk threads, authentic zardosi work, genuine stones, and high-quality beads for lasting beauty.",
    },
    {
      icon: Flower2,
      title: "Exclusive Peacock & Floral Designs",
      description: "Our signature peacock motifs and intricate floral patterns are inspired by royal Indian heritage, creating timeless elegance.",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/20 to-background relative">
      <div className="absolute inset-0 pattern-dots opacity-20"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-block mb-6">
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6">
            Why Choose <span className="text-gradient-gold">Kalakruti</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience the difference of authentic craftsmanship and dedicated artistry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <Card 
                key={index}
                className="border-2 border-border hover:border-gold/60 transition-all duration-500 hover-lift shadow-luxury bg-gradient-to-br from-card via-card to-muted/30 group overflow-hidden animate-fade-in-scale"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Top Gradient Border */}
                <div className="h-1 bg-gradient-to-r from-gold via-emerald to-maroon opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardHeader className="relative">
                  <div className="flex items-start gap-6">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gold/30 via-gold/20 to-emerald/20 border-2 border-gold/40 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-gold-glow">
                      <Icon className="w-10 h-10 text-gold" />
                    </div>
                    <div className="flex-1 pt-2">
                      <CardTitle className="text-2xl lg:text-3xl font-serif text-primary group-hover:text-gradient-gold transition-all duration-300 mb-2">
                        {reason.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-base lg:text-lg text-muted-foreground leading-relaxed pl-0 md:pl-26">
                    {reason.description}
                  </p>
                </CardContent>

                {/* Decorative corner elements */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-gold/5 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
