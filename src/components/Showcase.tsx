import gallery1 from "@/assets/gallery-1.png";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.png";
import gallery4 from "@/assets/gallery-4.png";
import gallery5 from "@/assets/gallery-5.png";
import gallery6 from "@/assets/gallery-6.png";
import gallery7 from "@/assets/gallery-7.png";
import gallery8 from "@/assets/gallery-8.png";
import gallery9 from "@/assets/gallery-9.png";
import gallery10 from "@/assets/gallery-10.png";

const Showcase = () => {
  const galleryItems = [
    { id: 1, src: gallery1, alt: "Intricate bridal blouse with peacock motif and zardosi work" },
    { id: 2, src: gallery2, alt: "Yellow Ari work blouse with floral embroidery" },
    { id: 3, src: gallery3, alt: "Maroon blouse with paisley Ari work detailing" },
    { id: 4, src: gallery4, alt: "Emerald green sleeve with red floral embroidery" },
    { id: 5, src: gallery5, alt: "Purple and maroon zardosi border patterns" },
    { id: 6, src: gallery6, alt: "Red bridal blouse with gold bead and stone work" },
    { id: 7, src: gallery7, alt: "Turquoise fabric with intricate gold thread work" },
    { id: 8, src: gallery8, alt: "Pink bridal blouse back with paisley motif" },
    { id: 9, src: gallery9, alt: "Royal blue fabric with gold peacock embroidery" },
    { id: 10, src: gallery10, alt: "Pink silk with floral Ari work pattern" },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
            <span className="text-gradient-gold">Exquisite Designs</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Each piece tells a story of meticulous craftsmanship and timeless beauty
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryItems.map((item, index) => (
            <div 
              key={item.id}
              className="break-inside-avoid group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg hover-lift bg-card border-2 border-transparent hover:border-gold/50 transition-all duration-300">
                <img 
                  src={item.src} 
                  alt={item.alt}
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <div className="w-12 h-1 bg-gold rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
