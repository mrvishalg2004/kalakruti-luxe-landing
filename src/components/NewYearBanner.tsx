import { useEffect, useState } from "react";
import { Sparkles, PartyPopper, X } from "lucide-react";

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

const NewYearBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ hours: 0, minutes: 0, seconds: 0 });
  const [isNewYear, setIsNewYear] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const newYear = new Date(now.getFullYear() + 1, 0, 1, 0, 0, 0);
      const difference = newYear.getTime() - now.getTime();

      if (difference <= 0) {
        setIsNewYear(true);
        return { hours: 0, minutes: 0, seconds: 0 };
      }

      const hours = Math.floor(difference / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { hours, minutes, seconds };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Floating Confetti Animation */}
      <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
        {[...Array(20)].map((_, i) => (
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

      {/* New Year Banner */}
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
              {/* Left Decoration */}
              <div className="hidden sm:flex items-center gap-2">
                <PartyPopper className="w-5 h-5 text-yellow-400 animate-bounce" />
                <Sparkles className="w-4 h-4 text-pink-400 animate-pulse" />
              </div>

              {/* Main Content */}
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                {isNewYear ? (
                  <div className="flex items-center gap-3">
                    <span className="text-2xl sm:text-3xl">🎆</span>
                    <h2 className="font-serif text-xl sm:text-2xl font-bold bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-300 bg-clip-text text-transparent animate-shimmer-slow">
                      Happy New Year 2026!
                    </h2>
                    <span className="text-2xl sm:text-3xl">🎉</span>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center gap-2">
                      <span className="text-lg sm:text-xl">✨</span>
                      <span className="text-white/90 text-sm sm:text-base font-medium">
                        New Year Countdown
                      </span>
                    </div>

                    {/* Countdown Timer */}
                    <div className="flex items-center gap-1 sm:gap-2">
                      <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1 sm:py-2 border border-white/20">
                        <span className="text-xl sm:text-2xl font-bold text-yellow-400 font-mono tabular-nums">
                          {String(timeLeft.hours).padStart(2, "0")}
                        </span>
                        <span className="text-xs text-white/60 ml-1">HRS</span>
                      </div>
                      <span className="text-yellow-400 text-xl font-bold animate-pulse">:</span>
                      <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1 sm:py-2 border border-white/20">
                        <span className="text-xl sm:text-2xl font-bold text-yellow-400 font-mono tabular-nums">
                          {String(timeLeft.minutes).padStart(2, "0")}
                        </span>
                        <span className="text-xs text-white/60 ml-1">MIN</span>
                      </div>
                      <span className="text-yellow-400 text-xl font-bold animate-pulse">:</span>
                      <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1 sm:py-2 border border-white/20">
                        <span className="text-xl sm:text-2xl font-bold text-yellow-400 font-mono tabular-nums">
                          {String(timeLeft.seconds).padStart(2, "0")}
                        </span>
                        <span className="text-xs text-white/60 ml-1">SEC</span>
                      </div>
                    </div>

                    <span className="text-white/80 text-sm hidden lg:block">
                      until 2026! 🎊
                    </span>
                  </>
                )}
              </div>

              {/* Right Decoration */}
              <div className="hidden sm:flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-pink-400 animate-pulse" />
                <PartyPopper className="w-5 h-5 text-yellow-400 animate-bounce" style={{ animationDelay: "0.5s" }} />
              </div>
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
      <style dangerouslySetInnerHTML={{__html: `
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

        .confetti-piece {
          position: absolute;
          width: 10px;
          height: 10px;
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

        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }

        .animate-shimmer-slow {
          background-size: 200% auto;
          animation: shimmer-slow 3s linear infinite;
        }
      `}} />
    </>
  );
};

export default NewYearBanner;
