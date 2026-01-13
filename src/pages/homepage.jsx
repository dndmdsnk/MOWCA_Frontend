import { useState } from "react";
import backgroundImage from "../assets/Background.png";
import logoImage from "../assets/logo.png";

export default function Homepage() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/10" />
      </div>

      <header className="absolute top-0 left-0 right-0 z-50 px-6 py-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="animate-fade-in-left">
            <img
              src={logoImage}
              alt="MOWCA Logo"
              className="h-10 md:h-12 lg:h-14 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>

          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="animate-fade-in-right px-6 py-2.5 md:px-8 md:py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#EEB462]"
            style={{
              background: "rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              color: "#0D233A",
            }}
          >
            Sign In
          </button>
        </div>
      </header>

      <main className="relative z-10 flex items-center justify-center min-h-screen px-6 md:px-8">
        <div className="text-center max-w-5xl mx-auto animate-fade-in-up">
          <h1
            className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-wide leading-tight"
            style={{
              color: "#0D233A",
              textShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            Progress Monitoring System - MOWCA
          </h1>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 animate-fade-in-up animation-delay-200">
            <button
              className="px-8 py-4 md:px-10 md:py-5 rounded-full font-bold text-base md:text-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 w-full sm:w-auto"
              style={{
                backgroundColor: "#EEB462",
                color: "#0D233A",
              }}
            >
              Get Started
            </button>

            <button
              className="px-8 py-4 md:px-10 md:py-5 rounded-full font-bold text-base md:text-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 w-full sm:w-auto"
              style={{
                backgroundColor: "#26B2AB",
                color: "#FFFFFF",
              }}
            >
              Learn More
            </button>
          </div>
        </div>
      </main>

      <style jsx>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-left {
          animation: fadeInLeft 0.8s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
