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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-maroon via-primary to-maroon">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 text-gold">
            Featured Signature Designs
          </h2>
          <p className="text-lg md:text-xl text-gold/90 max-w-2xl mx-auto">
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
              delay: 4000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent>
            {designs.map((design) => (
              <CarouselItem key={design.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="border-2 border-gold/30 hover:border-gold transition-all duration-300 hover-lift overflow-hidden bg-card/90 backdrop-blur-sm">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden aspect-[3/4]">
                        <img 
                          src={design.src} 
                          alt={design.title}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="p-6 bg-gradient-to-br from-primary to-primary/80">
                        <h3 className="text-xl font-serif font-bold text-gold mb-2">
                          {design.title}
                        </h3>
                        <p className="text-gold/80 text-sm">
                          {design.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border-gold/50 text-gold hover:bg-gold hover:text-primary" />
          <CarouselNext className="border-gold/50 text-gold hover:bg-gold hover:text-primary" />
        </Carousel>
      </div>
    </section>
  );
};

export default FeaturedDesigns;
