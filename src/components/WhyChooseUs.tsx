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
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
            Why Choose <span className="text-gradient-gold">Kalakruti</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the difference of authentic craftsmanship and dedicated artistry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <Card 
                key={index}
                className="border-2 border-border hover:border-gold/50 transition-all duration-300 hover-lift shadow-lg bg-gradient-to-br from-card to-card/80"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold/20 to-gold/10 border-2 border-gold/30 flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-gold" />
                  </div>
                  <CardTitle className="text-2xl font-serif text-primary">
                    {reason.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
