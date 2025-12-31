import design1 from "@/assets/design-1.jpeg";
import design2 from "@/assets/design-2.jpeg";
import design3 from "@/assets/design-3.jpeg";
import design4 from "@/assets/design-4.jpeg";
import design5 from "@/assets/design-5.jpeg";
import design6 from "@/assets/design-6.jpeg";
import design7 from "@/assets/design-7.jpeg";
import design8 from "@/assets/design-8.jpeg";
import design9 from "@/assets/design-9.jpeg";
import design10 from "@/assets/design-10.jpeg";

const Showcase = () => {
  const galleryItems = [
    { id: 1, src: design1, alt: "Exquisite Ari work embroidery design 1" },
    { id: 2, src: design2, alt: "Handcrafted Ari work embroidery design 2" },
    { id: 3, src: design3, alt: "Premium Ari work embroidery design 3" },
    { id: 4, src: design4, alt: "Traditional Ari work embroidery design 4" },
    { id: 5, src: design5, alt: "Elegant Ari work embroidery design 5" },
    { id: 6, src: design6, alt: "Beautiful Ari work embroidery design 6" },
    { id: 7, src: design7, alt: "Intricate Ari work embroidery design 7" },
    { id: 8, src: design8, alt: "Stunning Ari work embroidery design 8" },
    { id: 9, src: design9, alt: "Gorgeous Ari work embroidery design 9" },
    { id: 10, src: design10, alt: "Luxurious Ari work embroidery design 10" },
  ];

  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Dynamic Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-amber-50 to-purple-50"></div>

      {/* Floating Shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Creative Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-6 py-2 bg-amber-500/10 backdrop-blur-sm rounded-full text-amber-700 font-semibold text-sm mb-6 border border-amber-200">
            ✨ Handcrafted Excellence
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-600 via-rose-500 to-purple-600 text-transparent bg-clip-text">
              Exquisite Designs
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto font-light leading-relaxed">
            Each piece tells a story of <span className="font-semibold text-amber-600">meticulous craftsmanship</span> and <span className="font-semibold text-rose-600">timeless beauty</span>
          </p>
        </div>

        {/* Interactive Bento Grid */}
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 auto-rows-[200px]">
          {/* Large Feature - Item 1 */}
          <div className="col-span-4 md:col-span-4 lg:col-span-6 row-span-2 group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-amber-500/20 transition-all duration-500">
            <img
              src={galleryItems[0].src}
              alt={galleryItems[0].alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute bottom-6 left-6 right-6">
                <div className="w-20 h-1 bg-amber-400 mb-3"></div>
                <h3 className="text-white text-2xl font-bold">Featured Design</h3>
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="col-span-2 md:col-span-2 lg:col-span-3 row-span-1 group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-rose-500/20 transition-all duration-500 hover:-translate-y-2">
            <img
              src={galleryItems[1].src}
              alt={galleryItems[1].alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-rose-600/0 group-hover:bg-rose-600/30 transition-colors duration-500"></div>
          </div>

          {/* Item 3 */}
          <div className="col-span-2 md:col-span-2 lg:col-span-3 row-span-1 group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-purple-500/20 transition-all duration-500 hover:-translate-y-2">
            <img
              src={galleryItems[2].src}
              alt={galleryItems[2].alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-purple-600/0 group-hover:bg-purple-600/30 transition-colors duration-500"></div>
          </div>

          {/* Item 4 - Tall */}
          <div className="col-span-2 md:col-span-2 lg:col-span-3 row-span-2 group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-amber-500/20 transition-all duration-500 hover:-translate-y-2">
            <img
              src={galleryItems[3].src}
              alt={galleryItems[3].alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-amber-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Item 5 */}
          <div className="col-span-2 md:col-span-2 lg:col-span-3 row-span-1 group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-rose-500/20 transition-all duration-500 hover:-translate-y-2">
            <img
              src={galleryItems[4].src}
              alt={galleryItems[4].alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-rose-600/0 group-hover:bg-rose-600/30 transition-colors duration-500"></div>
          </div>

          {/* Large Feature - Item 6 */}
          <div className="col-span-4 md:col-span-4 lg:col-span-6 row-span-2 group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
            <img
              src={galleryItems[5].src}
              alt={galleryItems[5].alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute bottom-6 left-6 right-6">
                <div className="w-20 h-1 bg-purple-400 mb-3"></div>
                <h3 className="text-white text-2xl font-bold">Premium Collection</h3>
              </div>
            </div>
          </div>

          {/* Item 7 */}
          <div className="col-span-2 md:col-span-2 lg:col-span-3 row-span-1 group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-amber-500/20 transition-all duration-500 hover:-translate-y-2">
            <img
              src={galleryItems[6].src}
              alt={galleryItems[6].alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-amber-600/0 group-hover:bg-amber-600/30 transition-colors duration-500"></div>
          </div>

          {/* Item 8 */}
          <div className="col-span-2 md:col-span-2 lg:col-span-3 row-span-1 group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-rose-500/20 transition-all duration-500 hover:-translate-y-2">
            <img
              src={galleryItems[7].src}
              alt={galleryItems[7].alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-rose-600/0 group-hover:bg-rose-600/30 transition-colors duration-500"></div>
          </div>

          {/* Item 9 */}
          <div className="col-span-2 md:col-span-2 lg:col-span-3 row-span-1 group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-purple-500/20 transition-all duration-500 hover:-translate-y-2">
            <img
              src={galleryItems[8].src}
              alt={galleryItems[8].alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-purple-600/0 group-hover:bg-purple-600/30 transition-colors duration-500"></div>
          </div>

          {/* Item 10 */}
          <div className="col-span-2 md:col-span-4 lg:col-span-3 row-span-1 group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-amber-500/20 transition-all duration-500 hover:-translate-y-2">
            <img
              src={galleryItems[9].src}
              alt={galleryItems[9].alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-amber-600/0 group-hover:bg-amber-600/30 transition-colors duration-500"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Showcase;
