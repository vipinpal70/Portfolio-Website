"use client";
import React, { useEffect, useRef, useState } from "react";

export default function RealityCheckSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const painPoints = [
    {
      text: "You're watching opportunities slip away",
      subtext: "because your systems can't keep pace with real-time markets",
    },
    {
      text: "You're drowning in manual work",
      subtext: "that a machine could handle better, faster, and without error",
    },
    {
      text: "You have brilliant ideas",
      subtext:
        "trapped in your head because you haven't found someone who truly gets it",
    },
    {
      text: "You've been burned before",
      subtext: "by developers who over-promised and under-delivered",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-950 via-neutral-900 to-zinc-950 py-20"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 rounded-full blur-3xl animate-float-delayed" />

      {/* Diagonal Lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full border-l border-red-500/10 rotate-45 animate-pulse-slow" />
        <div
          className="absolute -bottom-1/2 -right-1/2 w-full h-full border-l border-amber-500/10 -rotate-45 animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            What&apos;s{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-red-400 via-orange-400 to-amber-400 bg-clip-text text-transparent animate-gradient">
                Holding You Back?
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-red-400 via-orange-400 to-amber-400 animate-expand" />
            </span>
          </h2>
        </div>

        {/* Pain Points */}
        <div className="space-y-6 mb-16">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className={`group relative p-6 sm:p-8 rounded-2xl bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 hover:border-red-500/50 transition-all duration-500 hover:scale-[1.02] hover:bg-zinc-900/80 ${
                isVisible ? "animate-slide-in-left" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Red Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-600/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex items-start space-x-4">
                {/* Animated Red Circle */}
                <div className="flex-shrink-0 mt-1">
                  <div className="relative w-4 h-4">
                    <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-75" />
                    <div className="relative w-4 h-4 bg-red-500 rounded-full" />
                  </div>
                </div>

                <div className="flex-1">
                  <p className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-red-300 transition-colors">
                    {point.text}
                  </p>
                  <p className="text-base sm:text-lg text-gray-400 group-hover:text-gray-300 transition-colors">
                    {point.subtext}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sound Familiar */}
        <div
          className={`text-center mb-12 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Sound familiar?
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto animate-pulse" />
        </div>

        {/* Solution Text */}
        <div
          className={`relative max-w-4xl mx-auto transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-amber-600/20 via-orange-600/20 to-red-600/20 rounded-3xl blur-2xl animate-pulse-slow" />

          <div className="relative p-8 sm:p-10 rounded-3xl bg-zinc-900/80 backdrop-blur-sm border border-zinc-700">
            <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed mb-6 text-center">
              Here&apos;s what separates me from everyone else: I don&apos;t just
              understand technology—I understand{" "}
              <span className="text-amber-400 font-semibold italic">
                your frustration.
              </span>
              I&apos;ve been the person who sees the solution clearly but needs the
              right partner to bring it to life.
            </p>

            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-white mb-2">
                That partnership starts here.{" "}
                <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent animate-gradient">
                  Today.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(
              rgba(255, 255, 255, 0.05) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.05) 1px,
              transparent 1px
            );
          background-size: 50px 50px;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          33% {
            transform: translateY(-30px) translateX(20px);
          }
          66% {
            transform: translateY(20px) translateX(-20px);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes expand {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            width: 100%;
            opacity: 1;
          }
        }

        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float 8s ease-in-out infinite;
          animation-delay: 4s;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
        }

        .animate-expand {
          animation: expand 1s ease-out forwards;
          animation-delay: 0.5s;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }
      `}</style>
    </section>
  );
}
