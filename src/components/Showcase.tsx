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
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/50 via-background to-muted/30 relative">
      <div className="absolute inset-0 pattern-dots opacity-30"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-block mb-4">
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6"></div>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6">
            <span className="text-gradient-gold">Exquisite Designs</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Each piece tells a story of meticulous craftsmanship and timeless beauty
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {galleryItems.map((item, index) => (
            <div 
              key={item.id}
              className="break-inside-avoid group cursor-pointer animate-fade-in-scale"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-luxury hover-lift bg-card border-2 border-border hover:border-gold/60 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-emerald/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                
                <img 
                  src={item.src} 
                  alt={item.alt}
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-8 z-20">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="w-16 h-1.5 bg-gradient-to-r from-gold via-gold to-emerald rounded-full mb-3 shadow-gold-glow"></div>
                    <p className="text-gold text-sm font-medium uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">View Details</p>
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-gold/0 group-hover:border-gold/50 rounded-tr-2xl transition-all duration-500"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-gold/0 group-hover:border-gold/50 rounded-bl-2xl transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
