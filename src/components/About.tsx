import { Gem, Sparkles, PenTool, Crown } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: PenTool,
      title: "Handcrafted",
      description: "Every stitch placed with precision and care",
    },
    {
      icon: Gem,
      title: "Premium Quality",
      description: "Finest threads, stones & materials",
    },
    {
      icon: Sparkles,
      title: "Custom Design",
      description: "Tailored to your unique vision",
    },
    {
      icon: Crown,
      title: "Bridal Specialists",
      description: "Expertise in wedding couture",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary/95 to-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-gold">
            Artistry Born From Tradition
          </h2>
          <p className="text-lg md:text-xl text-gold/90 max-w-3xl mx-auto leading-relaxed">
            For decades, we have perfected the ancient art of Ari work embroidery. Each piece is a testament to our dedication to preserving traditional techniques while embracing contemporary aesthetics. Our artisans meticulously hand-stitch every bead, thread, and stone, creating masterpieces that transform fabric into wearable art.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="text-center group hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold/20 border-2 border-gold/40 mb-4 group-hover:bg-gold/30 group-hover:border-gold transition-all duration-300">
                  <Icon className="w-10 h-10 text-gold" />
                </div>
                <h3 className="text-xl font-serif font-bold text-gold mb-2">
                  {feature.title}
                </h3>
                <p className="text-gold/80 text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
