import { Card } from "@/components/ui/card";
import { PenTool, Gem, Sparkles, Crown } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: PenTool,
      title: "Handcrafted",
      description: "Every stitch placed by skilled artisans"
    },
    {
      icon: Gem,
      title: "Premium Quality",
      description: "Only the finest materials and threads"
    },
    {
      icon: Sparkles,
      title: "Custom Design",
      description: "Your vision brought to life"
    },
    {
      icon: Crown,
      title: "Bridal Specialists",
      description: "Creating your special day magic"
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      <div className="absolute inset-0 pattern-grid opacity-20"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-0.5 w-12 bg-gradient-to-r from-transparent to-gold"></div>
              <Sparkles className="w-6 h-6 text-gold" />
              <div className="h-0.5 w-12 bg-gradient-to-l from-transparent to-gold"></div>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-8 leading-tight">
            Artistry Born From <span className="text-gradient-gold">Tradition</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-6">
              For decades, we've preserved the ancient art of Ari work embroidery, where each thread is meticulously hand-stitched using traditional techniques passed down through generations.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground/80 leading-relaxed">
              Our artisans combine premium silk threads, authentic zardosi work, genuine stones, and delicate beads to create pieces that transcend time.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-8 text-center border-2 border-border hover:border-gold/60 transition-all duration-500 hover-lift shadow-lg luxury-card group animate-fade-in-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold/30 to-emerald/20 border-2 border-gold/40 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-gold-glow">
                  <Icon className="w-10 h-10 text-gold group-hover:text-gold-dark transition-colors" />
                </div>
                <h3 className="font-serif font-bold text-xl mb-3 text-primary group-hover:text-gradient-gold transition-colors">
                  {feature.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
