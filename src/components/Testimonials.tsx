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
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
            Loved by <span className="text-gradient-gold">Brides</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Read what our clients have to say about their Kalakruti experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border-2 border-border hover:border-gold/50 transition-all duration-300 hover-lift shadow-lg bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-serif font-bold text-primary text-lg">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gold">
                    {testimonial.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
