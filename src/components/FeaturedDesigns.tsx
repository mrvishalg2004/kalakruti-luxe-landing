import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import gallery1 from "@/assets/gallery-1.png";
import gallery4 from "@/assets/gallery-4.png";
import gallery6 from "@/assets/gallery-6.png";
import gallery9 from "@/assets/gallery-9.png";
import gallery10 from "@/assets/gallery-10.png";

const FeaturedDesigns = () => {
  const designs = [
    { 
      id: 1, 
      src: gallery1, 
      title: "Bridal Peacock Masterpiece",
      description: "Intricate peacock motif with zardosi detailing on maroon and royal blue silk"
    },
    { 
      id: 2, 
      src: gallery4, 
      title: "Floral Sleeve Elegance",
      description: "Emerald green with vibrant red and gold floral embroidery"
    },
    { 
      id: 3, 
      src: gallery6, 
      title: "Royal Red Bridal Design",
      description: "Heavy gold bead and stone work with traditional leaf motifs"
    },
    { 
      id: 4, 
      src: gallery9, 
      title: "Gold Zardosi Peacock",
      description: "Royal blue silk adorned with elaborate gold threadwork"
    },
    { 
      id: 5, 
      src: gallery10, 
      title: "Lotus Garden Design",
      description: "Pink silk with intricate floral Ari work and gold beading"
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-maroon via-primary to-secondary relative overflow-hidden">
      {/* Decorative Patterns */}
      <div className="absolute inset-0 pattern-dots opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-block mb-6">
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-shimmer">
            Featured Signature Designs
          </h2>
          <p className="text-xl md:text-2xl text-gold/90 max-w-3xl mx-auto leading-relaxed">
            Our most celebrated creations, each a masterpiece of traditional artistry
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {designs.map((design, index) => (
              <CarouselItem key={design.id} className="pl-4 md:basis-1/2 lg:basis-1/3 animate-fade-in-scale" style={{ animationDelay: `${index * 0.1}s` }}>
                <Card className="border-2 border-gold/40 hover:border-gold/80 transition-all duration-500 hover-lift overflow-hidden bg-card/95 backdrop-blur-md shadow-luxury group">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden aspect-[3/4]">
                      <img 
                        src={design.src} 
                        alt={design.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Corner Accents */}
                      <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-gold/0 group-hover:border-gold/60 transition-all duration-500"></div>
                      <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-gold/0 group-hover:border-gold/60 transition-all duration-500"></div>
                    </div>
                    <div className="p-6 bg-gradient-to-br from-primary via-primary/90 to-maroon/80 relative">
                      {/* Top Accent Line */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-emerald to-gold opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <h3 className="text-xl lg:text-2xl font-serif font-bold text-gold mb-3 group-hover:text-shimmer transition-all duration-300">
                        {design.title}
                      </h3>
                      <p className="text-gold/80 text-sm lg:text-base leading-relaxed">
                        {design.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border-2 border-gold/50 text-gold hover:bg-gold hover:text-primary transition-all duration-300 hover:scale-110 -left-4 lg:-left-12 shadow-gold-glow" />
          <CarouselNext className="border-2 border-gold/50 text-gold hover:bg-gold hover:text-primary transition-all duration-300 hover:scale-110 -right-4 lg:-right-12 shadow-gold-glow" />
        </Carousel>
      </div>
    </section>
  );
};

export default FeaturedDesigns;
