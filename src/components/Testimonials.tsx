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
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-rose-50 via-purple-50 to-amber-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-rose-300/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-amber-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
        backgroundSize: '32px 32px'
      }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Premium Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="flex gap-1">
              <Star className="w-6 h-6 fill-rose-500 text-rose-500 animate-bounce" />
              <Star className="w-6 h-6 fill-amber-500 text-amber-500 animate-bounce" style={{ animationDelay: '0.1s' }} />
              <Star className="w-6 h-6 fill-purple-500 text-purple-500 animate-bounce" style={{ animationDelay: '0.2s' }} />
            </div>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-gray-900">Loved by </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-purple-600 to-amber-600">
              Brides
            </span>
          </h2>
          
          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Read what our clients have to say about their Kalakruti experience
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group relative"
              style={{ 
                animation: `fadeInScale 0.8s ease-out ${index * 0.2}s both`
              }}
            >
              <div className="relative h-full p-8 rounded-3xl bg-white/80 backdrop-blur-sm border-2 border-white hover:border-rose-200 transition-all duration-500 hover:shadow-2xl hover:shadow-rose-500/10 hover:-translate-y-3">
                
                {/* Gradient Top Border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-500 via-purple-500 to-amber-500 rounded-t-3xl"></div>
                
                {/* Quote Icon */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <span className="text-white text-2xl font-serif">"</span>
                  </div>
                </div>

                {/* Star Rating */}
                <div className="flex gap-1 mb-6 justify-center mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 fill-amber-400 text-amber-400 group-hover:scale-125 transition-transform duration-300" 
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>

                {/* Testimonial Content */}
                <div className="mb-6">
                  <p className="text-gray-700 text-base leading-relaxed italic text-center">
                    {testimonial.content}
                  </p>
                </div>

                {/* Divider */}
                <div className="flex items-center justify-center gap-2 my-6">
                  <div className="h-px w-12 bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-400"></div>
                  <div className="h-px w-12 bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
                </div>

                {/* Author Info */}
                <div className="text-center">
                  <p className="font-bold text-gray-900 text-lg mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-rose-600 group-hover:to-purple-600 transition-all duration-300">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-rose-600 uppercase tracking-widest font-semibold">
                    {testimonial.role}
                  </p>
                </div>

                {/* Decorative Corner Glow */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-rose-100 via-purple-100 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                {/* Shine Effect */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 text-lg mb-4">Join hundreds of happy brides</p>
          <div className="flex justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <p className="text-amber-600 font-semibold mt-2">5.0 Average Rating</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(30px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
