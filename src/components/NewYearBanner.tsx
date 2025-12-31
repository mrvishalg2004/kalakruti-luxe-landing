import { useState } from "react";
import { Sparkles, PartyPopper, X } from "lucide-react";

const NewYearBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <>
      {/* Floating Confetti Animation */}
      <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="confetti-piece"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Firecracker Effects - Left Side */}
      <div className="fixed left-4 top-20 pointer-events-none z-40">
        {[...Array(3)].map((_, i) => (
          <div
            key={`left-${i}`}
            className="firecracker"
            style={{
              animationDelay: `${i * 0.8}s`,
              top: `${i * 60}px`,
            }}
          >
            <div className="firecracker-spark" />
            <div className="firecracker-burst" />
          </div>
        ))}
      </div>

      {/* Firecracker Effects - Right Side */}
      <div className="fixed right-4 top-20 pointer-events-none z-40">
        {[...Array(3)].map((_, i) => (
          <div
            key={`right-${i}`}
            className="firecracker"
            style={{
              animationDelay: `${i * 0.8 + 0.4}s`,
              top: `${i * 60}px`,
            }}
          >
            <div className="firecracker-spark" />
            <div className="firecracker-burst" />
          </div>
        ))}
      </div>

      {/* Celebration Banner */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-900 border-b border-gold/30 shadow-lg">
        <div className="relative overflow-hidden">
          {/* Animated Background Stars */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  opacity: 0.6 + Math.random() * 0.4,
                }}
              />
            ))}
          </div>

          <div className="relative max-w-7xl mx-auto px-4 py-3 sm:py-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6">
              {/* Left Decoration - Party Poppers */}
              <div className="hidden sm:flex items-center gap-2">
                <span className="text-2xl animate-bounce">🎊</span>
                <PartyPopper className="w-6 h-6 text-yellow-400 animate-bounce" />
                <span className="text-xl animate-wiggle">🧨</span>
              </div>

              {/* Main Content - Celebration Message */}
              <div className="flex items-center gap-3">
                <span className="text-2xl sm:text-3xl animate-pulse">🎆</span>
                <h2 className="font-serif text-xl sm:text-2xl font-bold bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-300 bg-clip-text text-transparent animate-shimmer-slow">
                  Happy New Year 2026!
                </h2>
                <span className="text-2xl sm:text-3xl animate-bounce">🎉</span>
              </div>

              {/* Right Decoration - Firecrackers & Confetti */}
              <div className="hidden sm:flex items-center gap-2">
                <span className="text-xl animate-wiggle" style={{ animationDelay: "0.2s" }}>🧨</span>
                <PartyPopper className="w-6 h-6 text-pink-400 animate-bounce" style={{ animationDelay: "0.3s" }} />
                <span className="text-2xl animate-bounce" style={{ animationDelay: "0.5s" }}>🎊</span>
              </div>
            </div>

            {/* Celebration Icons Row */}
            <div className="flex justify-center items-center gap-4 mt-2 sm:hidden">
              <span className="text-xl animate-bounce">🎊</span>
              <span className="text-xl animate-wiggle">🧨</span>
              <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
              <span className="text-xl animate-wiggle" style={{ animationDelay: "0.3s" }}>🧨</span>
              <span className="text-xl animate-bounce" style={{ animationDelay: "0.2s" }}>🎊</span>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsVisible(false)}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full hover:bg-white/10 transition-colors group"
              aria-label="Close banner"
            >
              <X className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" />
            </button>
          </div>

          {/* Bottom Glow Effect */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />
        </div>
      </div>

      {/* Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes confetti-fall {
          0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 0.3;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        @keyframes shimmer-slow {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        @keyframes wiggle {
          0%, 100% {
            transform: rotate(-10deg);
          }
          50% {
            transform: rotate(10deg);
          }
        }

        @keyframes firecracker-explode {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          50% {
            transform: scale(1.5);
            opacity: 1;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        @keyframes spark-rise {
          0% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateY(-30px) scale(0);
            opacity: 0;
          }
        }

        .confetti-piece {
          position: absolute;
          width: 12px;
          height: 12px;
          animation: confetti-fall linear infinite;
        }

        .confetti-piece:nth-child(odd) {
          background: linear-gradient(135deg, #fbbf24, #f59e0b);
          border-radius: 50%;
        }

        .confetti-piece:nth-child(even) {
          background: linear-gradient(135deg, #ec4899, #8b5cf6);
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }

        .confetti-piece:nth-child(3n) {
          background: linear-gradient(135deg, #06b6d4, #10b981);
          border-radius: 2px;
        }

        .confetti-piece:nth-child(4n) {
          background: linear-gradient(135deg, #ef4444, #dc2626);
          clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
        }

        .confetti-piece:nth-child(5n) {
          background: linear-gradient(135deg, #a855f7, #7c3aed);
          width: 8px;
          height: 16px;
          border-radius: 4px;
        }

        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }

        .animate-shimmer-slow {
          background-size: 200% auto;
          animation: shimmer-slow 3s linear infinite;
        }

        .animate-wiggle {
          animation: wiggle 0.5s ease-in-out infinite;
        }

        .firecracker {
          position: relative;
          width: 40px;
          height: 40px;
        }

        .firecracker-spark {
          position: absolute;
          width: 6px;
          height: 6px;
          background: radial-gradient(circle, #fbbf24, #f59e0b);
          border-radius: 50%;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          animation: spark-rise 1s ease-out infinite;
          box-shadow: 0 0 10px #fbbf24, 0 0 20px #f59e0b;
        }

        .firecracker-burst {
          position: absolute;
          width: 30px;
          height: 30px;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          background: radial-gradient(circle, rgba(251, 191, 36, 0.8) 0%, rgba(245, 158, 11, 0.4) 40%, transparent 70%);
          border-radius: 50%;
          animation: firecracker-explode 1.5s ease-out infinite;
        }

        .firecracker-burst::before,
        .firecracker-burst::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(236, 72, 153, 0.6) 0%, transparent 60%);
          border-radius: 50%;
          animation: firecracker-explode 1.5s ease-out infinite;
        }

        .firecracker-burst::before {
          animation-delay: 0.2s;
        }

        .firecracker-burst::after {
          animation-delay: 0.4s;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.6) 0%, transparent 60%);
        }
      `}} />
    </>
  );
};

export default NewYearBanner;
