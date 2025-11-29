import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Bride",
      content: "The peacock design on my bridal blouse was absolutely breathtaking. Every guest at my wedding asked about it. The craftsmanship is unparalleled!",
      rating: 5,
    },
    {
      name: "Anjali Reddy",
      role: "Fashion Designer",
      content: "I've worked with many embroidery houses, but Kalakruti's attention to detail and quality of Ari work is exceptional. Their zardosi work is museum-quality.",
      rating: 5,
    },
    {
      name: "Meera Patel",
      role: "Bride",
      content: "They brought my vision to life perfectly. The custom floral design with gold thread work exceeded all my expectations. Worth every penny!",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      <div className="absolute inset-0 pattern-grid opacity-10"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-maroon/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-block mb-6">
            <Star className="w-8 h-8 text-gold mx-auto mb-4 fill-gold animate-pulse" />
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6">
            Loved by <span className="text-gradient-gold">Brides</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Read what our clients have to say about their Kalakruti experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border-2 border-border hover:border-gold/60 transition-all duration-500 hover-lift shadow-luxury bg-gradient-to-br from-card to-muted/20 group overflow-hidden animate-fade-in-scale"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Top Accent Line */}
              <div className="h-1 bg-gradient-to-r from-gold to-emerald"></div>
              
              <CardContent className="pt-8 pb-8 px-6">
                {/* Star Rating */}
                <div className="flex gap-1 mb-6 justify-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 fill-gold text-gold group-hover:scale-110 transition-transform duration-300" 
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>

                {/* Quote Content */}
                <div className="relative mb-8">
                  <span className="absolute -top-2 -left-2 text-6xl text-gold/20 font-serif leading-none">"</span>
                  <p className="text-muted-foreground text-base lg:text-lg leading-relaxed italic relative z-10 pt-4 px-2">
                    {testimonial.content}
                  </p>
                  <span className="absolute -bottom-6 -right-2 text-6xl text-gold/20 font-serif leading-none">"</span>
                </div>

                {/* Author Info */}
                <div className="border-t-2 border-gold/20 pt-6 text-center">
                  <p className="font-serif font-bold text-primary text-xl mb-1 group-hover:text-gradient-gold transition-colors">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gold uppercase tracking-wider">
                    {testimonial.role}
                  </p>
                </div>

                {/* Decorative Corner */}
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
