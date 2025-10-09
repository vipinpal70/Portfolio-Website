"use client";
import React, { useEffect, useRef, useState } from "react";

export default function AboutSectionTwo() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const highlights = [
    {
      metric: "60 hours",
      impact: "That's someone's freedom.",
      description: "saved through intelligent automation",
    },
    {
      metric: "30 seconds",
      impact: "That's someone's edge.",
      description: "improved trade execution time",
    },
    {
      metric: "1000s of trades",
      impact: "That's someone's vision, finally alive.",
      description: "processed by platforms I built",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-zinc-950 to-black py-20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl animate-float-delayed" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
            I&apos;m Not Here to Impress You.
            <span className="block mt-2 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              I&apos;m Here to Deliver.
            </span>
          </h2>
        </div>

        {/* Story Section */}
        <div
          className={`mb-12 sm:mb-16 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative p-6 sm:p-8 lg:p-10 rounded-3xl bg-zinc-900/50 backdrop-blur-sm border border-zinc-800">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-purple-600/5 rounded-3xl" />

            <div className="relative z-10 space-y-6 text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
              <p>
                My Master&apos;s in Computer Applications from{" "}
                <span className="text-purple-400 font-semibold">
                  Vellore Institute of Technology
                </span>{" "}
                gave me the foundation. But the real education came from the
                trenches—from late nights debugging critical systems, from the
                satisfaction of watching automation save someone&apos;s week, from
                the thrill of seeing a complex algorithm execute flawlessly
                under pressure.
              </p>

              <p className="text-white font-medium text-lg sm:text-xl lg:text-2xl">
                Here&apos;s what drives me:{" "}
                <span className="text-purple-400">
                  I&apos;m obsessed with the moment when technology transforms
                  from complexity into clarity.
                </span>{" "}
                When data becomes decisions. When ideas become income.
              </p>
            </div>
          </div>
        </div>

        {/* Impact Metrics */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 sm:mb-16 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group relative p-6 sm:p-8 rounded-2xl bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 hover:border-purple-500/50 transition-all duration-500 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/0 via-purple-600/10 to-pink-600/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 text-center">
                <div className="mb-3">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    {item.metric}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-400 mb-3">
                  {item.description}
                </p>
                <p className="text-sm sm:text-base font-semibold text-white">
                  {item.impact}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div
          className={`relative mb-12 sm:mb-16 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-pink-600/20 rounded-3xl blur-2xl animate-pulse-slow" />

          <div className="relative p-8 sm:p-10 lg:p-12 rounded-3xl bg-zinc-900/80 backdrop-blur-sm border border-zinc-700">
            <p className="text-xl sm:text-2xl lg:text-3xl text-center font-bold text-white leading-relaxed mb-4">
              I&apos;m not your vendor.{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                I&apos;m your technical co-conspirator.
              </span>
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-center text-gray-300 leading-relaxed">
              I&apos;m the person who hears your wildest idea and says, Not
              only can we build that—we can build it{" "}
              <span className="text-purple-400 font-semibold italic">
                better
              </span>{" "}
              than you imagined.
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div
          className={`text-center transition-all duration-1000 delay-900 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6">
            Let&apos;s Connect
          </h3>
          <div className="flex justify-center items-center gap-6">
            {/* Phone Call */}
            <a 
              href="tel:+917060298070" 
              className="group relative"
              title="Call me"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative p-4 sm:p-5 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-blue-500 transition-all duration-300 hover:scale-110">
                <svg
                  className="w-7 h-7 sm:w-8 sm:h-8 text-gray-400 group-hover:text-blue-400 transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/+917060298070"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              title="Chat on WhatsApp"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative p-4 sm:p-5 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-green-500 transition-all duration-300 hover:scale-110">
                <svg
                  className="w-7 h-7 sm:w-8 sm:h-8 text-gray-400 group-hover:text-green-400 transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.099-.471-.148-.67.15-.197.297-.767.963-.94 1.16-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.795-1.484-1.792-1.66-2.088-.173-.297-.018-.458.13-.606.136-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.508-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.495.709.306 1.262.489 1.694.625.712.227 1.361.195 1.871.118.571-.085 1.758-.718 2.005-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421.822h-.016c-1.77 0-3.524-.48-5.055-1.38l-.361-.214-3.754.99.998-3.646-.236-.375a11.414 11.414 0 01-1.723-6.093C1.5 5.26 6.2.547 11.903.545c3.079.001 5.85 1.158 7.74 3.03 1.89 1.86 2.907 4.35 2.907 7.008-.002 5.799-4.701 10.51-10.485 10.51" />
                </svg>
              </div>
            </a>

            {/* Email */}
            <a 
              href="mailto:vipinpal7060@gmail.com" 
              className="group relative"
              title="Send an email"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative p-4 sm:p-5 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-purple-500 transition-all duration-300 hover:scale-110">
                <svg
                  className="w-7 h-7 sm:w-8 sm:h-8 text-gray-400 group-hover:text-purple-400 transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(
              rgba(255, 255, 255, 0.03) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.03) 1px,
              transparent 1px
            );
          background-size: 60px 60px;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          33% {
            transform: translateY(-30px) translateX(30px);
          }
          66% {
            transform: translateY(30px) translateX(-30px);
          }
        }

        .animate-float {
          animation: float 12s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float 12s ease-in-out infinite;
          animation-delay: 6s;
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
