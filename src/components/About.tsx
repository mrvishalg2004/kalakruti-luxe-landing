import { Card } from "@/components/ui/card";
import { PenTool, Gem, Sparkles, Crown } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: PenTool,
      title: "Handcrafted",
      description: "Every stitch placed by skilled artisans"
    },
    {
      icon: Gem,
      title: "Premium Quality",
      description: "Only the finest materials and threads"
    },
    {
      icon: Sparkles,
      title: "Custom Design",
      description: "Your vision brought to life"
    },
    {
      icon: Crown,
      title: "Bridal Specialists",
      description: "Creating your special day magic"
    },
  ];

  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Luxury Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rose-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Golden Line Pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(90deg, transparent 0%, rgba(217, 174, 84, 0.3) 50%, transparent 100%)',
        backgroundSize: '200px 2px',
        backgroundRepeat: 'repeat-y'
      }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Premium Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-3 mb-8 px-6 py-2 rounded-full border border-amber-500/30 bg-amber-500/5 backdrop-blur-sm">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest">Heritage & Excellence</span>
            <Sparkles className="w-5 h-5 text-amber-400" />
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-10 leading-tight">
            <span className="text-white">Artistry Born From </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200">
              Tradition
            </span>
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              For decades, we've preserved the ancient art of Ari work embroidery, where each thread is meticulously hand-stitched using traditional techniques passed down through generations.
            </p>
            <div className="flex items-center justify-center gap-4 my-8">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
              <div className="w-2 h-2 rounded-full bg-amber-500"></div>
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
            </div>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed italic">
              Our artisans combine premium silk threads, authentic zardosi work, genuine stones, and delicate beads to create pieces that transcend time.
            </p>
          </div>
        </div>

        {/* Premium Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative"
                style={{ 
                  animation: `fadeInUp 0.8s ease-out ${index * 0.15}s both`
                }}
              >
                {/* Card Background with Border Glow */}
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-amber-500/20 hover:border-amber-500/60 transition-all duration-500 h-full overflow-hidden group-hover:shadow-2xl group-hover:shadow-amber-500/20">
                  
                  {/* Hover Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/5 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Icon Container */}
                  <div className="relative mb-6 flex justify-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-500/20 to-amber-600/10 border-2 border-amber-500/40 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg shadow-amber-500/20">
                      <Icon className="w-10 h-10 text-amber-400 group-hover:text-amber-300 transition-colors" strokeWidth={1.5} />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative text-center">
                    <h3 className="font-bold text-xl mb-3 text-white group-hover:text-amber-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                      {feature.description}
                    </p>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-amber-500/0 group-hover:border-amber-500/50 rounded-tr-2xl transition-all duration-500"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
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

export default About;
