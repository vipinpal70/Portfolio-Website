"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export default function SolutionsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
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

  const solutions = [
    {
      icon: "⚡",
      title: "Algorithmic Trading Systems That Never Sleep",
      description:
        "While the market moves at light speed, your systems should too. I architect automated trading platforms that execute in under 10 seconds, backtest 50+ strategies simultaneously, and turn market volatility into your advantage.",
      highlight: "This isn't theory—this is battle-tested technology.",
      color: "from-indigo-500 to-purple-500",
      hoverColor: "from-indigo-600 to-purple-600",
      bgGlow: "indigo",
    },
    {
      icon: "🎯",
      title: "Automation That Gives You Your Life Back",
      description:
        "Imagine 60+ hours returning to your calendar every month. That's not a fantasy—that's what my intelligent automation delivers. From ETL pipelines that transform messy data into crystal-clear insights, to reporting systems that work while you sleep, I build the freedom you've been craving.",
      highlight: null,
      color: "from-purple-500 to-pink-500",
      hoverColor: "from-purple-600 to-pink-600",
      bgGlow: "purple",
    },
    {
      icon: "🧠",
      title: "Predictive Intelligence That Sees Tomorrow",
      description:
        "Machine learning isn't magic—it's mathematics applied with precision. I develop custom ML models that predict home prices, assess credit risk, and forecast market movements.",
      highlight: "The future belongs to those who can see it coming.",
      color: "from-pink-500 to-orange-500",
      hoverColor: "from-pink-600 to-orange-600",
      bgGlow: "pink",
    },
    {
      icon: "⚛️",
      title: "Full-Stack Applications Built for Impact",
      description:
        "From concept to deployment, I deliver complete solutions. Trading platforms with multi-broker integration. Dynamic web applications. Secure automation tools. Every project is polished, powerful, and ready to make you money.",
      highlight: null,
      color: "from-orange-500 to-indigo-500",
      hoverColor: "from-orange-600 to-indigo-600",
      bgGlow: "orange",
    },
  ];

  // This function is no longer used but kept for reference
  // const getGlowColor = (color: "indigo" | "purple" | "pink" | "orange") => {
  //   const glowMap = {
  //     indigo: "shadow-indigo-500/50",
  //     purple: "shadow-purple-500/50",
  //     pink: "shadow-pink-500/50",
  //     orange: "shadow-orange-500/50",
  //   };
  //   return glowMap[color];
  // };

  return (
    <section
      ref={sectionRef}
      id="solutions"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-slate-950 to-black py-20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-r from-pink-600/10 to-orange-600/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Solutions That{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Win.
            </span>
          </h2>
          <p className="text-2xl sm:text-3xl text-gray-300 font-light italic">
            I don&apos;t build features. I build{" "}
            <span className="text-purple-400 font-semibold not-italic">
              weapons
            </span>{" "}
            for your business arsenal.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Glow Effect */}
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${solution.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
              />

              {/* Card */}
              <div className="relative h-full p-8 rounded-2xl bg-slate-950/80 backdrop-blur-sm border border-slate-800 group-hover:border-slate-700 transition-all duration-500 group-hover:scale-[1.02]">
                {/* Icon */}
                <div className="mb-6">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${
                      solution.color
                    } text-4xl transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 ${
                      activeCard === index ? "animate-bounce-slow" : ""
                    }`}
                  >
                    {solution.icon}
                  </div>
                </div>

                {/* Title */}
                <h3
                  className={`text-2xl sm:text-3xl font-bold text-white mb-4 transition-all duration-300 ${
                    activeCard === index
                      ? `bg-gradient-to-r ${solution.color} bg-clip-text text-transparent`
                      : ""
                  }`}
                >
                  {solution.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-lg leading-relaxed mb-4 group-hover:text-gray-300 transition-colors">
                  {solution.description}
                </p>

                {/* Highlight */}
                {solution.highlight && (
                  <div className="mt-6 p-4 rounded-lg bg-black/40 border-l-4 border-purple-500">
                    <p className="text-purple-400 font-semibold text-lg">
                      {solution.highlight}
                    </p>
                  </div>
                )}

                {/* Decorative Corner */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500 rounded-full`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-20 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-r from-slate-950 to-black border border-slate-800">
            <p className="text-xl sm:text-2xl text-gray-300 mb-6">
              Ready to transform your vision into reality?
            </p>
            <Link href="#success-stories" className="group relative px-10 py-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-xl font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50">
              <span className="relative z-10">Explore My Arsenal</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link >
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
            transform: translateY(-20px) translateX(20px);
          }
          66% {
            transform: translateY(20px) translateX(-20px);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0) scale(1.1) rotate(6deg);
          }
          50% {
            transform: translateY(-10px) scale(1.1) rotate(6deg);
          }
        }

        .animate-float {
          animation: float 10s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float 10s ease-in-out infinite;
          animation-delay: 5s;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-bounce-slow {
          animation: bounce-slow 1s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.3;
          }
        }
      `}</style>
    </section>
  );
}
