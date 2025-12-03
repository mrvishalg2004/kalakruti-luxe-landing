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
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      {/* Soft Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-amber-50/50 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-100/30 rounded-full blur-3xl"></div>
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Premium Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full bg-gradient-to-r from-amber-500/10 via-rose-500/10 to-purple-500/10 border border-amber-200">
            <span className="text-amber-600 text-xs font-bold uppercase tracking-widest">Premium Craftsmanship</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gray-900">Why Choose </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-rose-600 to-purple-600">
              Kalakruti
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Experience the difference of authentic craftsmanship and dedicated artistry
          </p>
        </div>

        {/* Premium Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div 
                key={index}
                className="group relative"
                style={{ 
                  animation: `slideInUp 0.7s ease-out ${index * 0.2}s both`
                }}
              >
                <div className="relative h-full p-8 rounded-2xl bg-white border-2 border-gray-100 hover:border-amber-200 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-2">
                  
                  {/* Gradient Accent Bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-rose-500 to-purple-500 rounded-t-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  
                  {/* Content */}
                  <div className="flex flex-col sm:flex-row gap-6">
                    {/* Icon Container */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-amber-100 to-rose-100 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                        <Icon className="w-8 h-8 text-amber-600" strokeWidth={2} />
                      </div>
                    </div>
                    
                    {/* Text Content */}
                    <div className="flex-1">
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                        {reason.title}
                      </h3>
                      <p className="text-base text-gray-600 leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>

                  {/* Decorative Corner Element */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-amber-50 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
