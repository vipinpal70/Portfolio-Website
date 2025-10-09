"use client";
import React, { useEffect, useRef, useState } from "react";

export default function CTASection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
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

  const possibilities = [
    {
      icon: (
        <div className="flex items-center justify-center w-full mb-4">
          <svg className="w-12 h-12 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
      ),
      text: "The trading system that&apos;s been sketched on napkins for months",
    },
    {
      icon: (
        <div className="flex items-center justify-center w-full mb-4">
          <svg className="w-12 h-12 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
      ),
      text: "The automation that could save your team hundreds of hours",
    },
    {
      icon: (
        <div className="flex items-center justify-center w-full mb-4">
          <svg className="w-12 h-12 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
          </svg>
        </div>
      ),
      text: "The data pipeline that could revolutionize how you make decisions",
    },
  ];

  const contactInfo = [
    {
      icon: (
        <svg
          className="w-6 h-6"
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
      ),
      label: "Email",
      value: "vipinpal7060@gmail.com",
      href: "mailto:vipinpal7060@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
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
      ),
      label: "Phone",
      value: "7060298070",
      href: "tel:7060298070",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      label: "Location",
      value: "Delhi, India",
      href: null,
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-zinc-950 to-black py-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-pink-600/10 to-orange-600/10 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_70%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Headline */}
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 leading-tight">
            The Moment Is Now.{" "}
            <span className="block mt-2 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
              Let&apos;s Build Something Extraordinary.
            </span>
          </h2>

          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-6">
            You didn&apos;t read this far by accident. Something inside you knows
            it&apos;s time to stop planning and start{" "}
            <span className="text-purple-400 font-semibold">building</span>.
          </p>
        </div>

        {/* Possibilities Section */}
        <div
          className={`mb-12 sm:mb-16 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 text-center mb-8 max-w-3xl mx-auto">
            Maybe it&apos;s...
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {possibilities.map((item, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 hover:border-purple-500/50 transition-all duration-500 hover:scale-105"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 via-purple-600/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 text-center">
                  <div className="text-4xl sm:text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <p className="text-sm sm:text-base text-gray-300 group-hover:text-white transition-colors">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-white text-center max-w-3xl mx-auto leading-relaxed">
            Whatever it is, it deserves to exist.{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              And I&apos;m ready to build it with you.
            </span>
          </p>
        </div>

        {/* Subheadline */}
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-block p-6 sm:p-8 rounded-2xl bg-zinc-900/50 backdrop-blur-sm border border-zinc-800">
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl">
              I&apos;m available for serious projects with serious people who are
              ready to{" "}
              <span className="text-purple-400 font-semibold">move fast</span>{" "}
              and build something{" "}
              <span className="text-pink-400 font-semibold">remarkable</span>.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div
        id="connect"
          className={`mb-12 sm:mb-16 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">
            Get In Touch
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contactInfo.map((item, index) =>
              item.href ? (
                <a
                  key={index}
                  href={item.href}
                  className={`group relative p-6 rounded-2xl bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 hover:border-zinc-700 transition-all duration-500 hover:scale-105 cursor-pointer`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
                  />
                  <div className="relative z-10 text-center">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {item.icon}
                    </div>
                    <p className="text-xs sm:text-sm text-gray-400 mb-2 uppercase tracking-wider">
                      {item.label}
                    </p>
                    <p className="text-sm sm:text-base font-semibold text-white break-words">
                      {item.value}
                    </p>
                  </div>
                </a>
              ) : (
                <div
                  key={index}
                  className={`group relative p-6 rounded-2xl bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 hover:border-zinc-700 transition-all duration-500 cursor-default`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
                  />
                  <div className="relative z-10 text-center">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {item.icon}
                    </div>
                    <p className="text-xs sm:text-sm text-gray-400 mb-2 uppercase tracking-wider">
                      {item.label}
                    </p>
                    <p className="text-sm sm:text-base font-semibold text-white break-words">
                      {item.value}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* Final Message & CTA */}
        <div
          className={`text-center transition-all duration-1000 delay-900 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative mb-8">
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-pink-600/20 rounded-3xl blur-2xl animate-pulse-slow" />

            <div className="relative p-6 sm:p-8 lg:p-10 rounded-3xl bg-zinc-900/80 backdrop-blur-sm border border-zinc-700">
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-relaxed">
                We&apos;re not late. We&apos;re perfectly timed.{" "}
                <span className="block mt-2 text-gray-400 font-normal text-lg sm:text-xl lg:text-2xl">
                  Your competition is still thinking about it.{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-bold">
                    You&apos;re about to build it.
                  </span>
                </span>
              </p>
            </div>
          </div>

          {/* Main CTA Button */}
          <div className="relative inline-block">
            <div
              className={`absolute -inset-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full blur-xl transition-opacity duration-500 ${
                isHovered ? "opacity-70" : "opacity-40"
              } animate-pulse-slow`}
            />

            <a 
              href="tel:+917060298070"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative px-10 sm:px-12 lg:px-16 py-5 sm:py-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white text-lg sm:text-xl lg:text-2xl font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-110 active:scale-95 shadow-2xl group cursor-pointer inline-flex items-center justify-center"
              title="Call me"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                Call Me Now
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 transform group-hover:translate-x-2 transition-transform duration-300"
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
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>

          {/* Secondary text */}
          <p className="my-12 text-sm sm:text-base text-gray-500">
            No commitment required. Just a conversation about possibilities.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0) scale(1);
          }
          33% {
            transform: translateY(-30px) translateX(30px) scale(1.05);
          }
          66% {
            transform: translateY(30px) translateX(-30px) scale(0.95);
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
          animation: float 15s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float 15s ease-in-out infinite;
          animation-delay: 7.5s;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 4s ease infinite;
        }

        .animate-pulse-slow {
          animation: pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.7;
          }
        }
      `}</style>
    </section>
  );
}
