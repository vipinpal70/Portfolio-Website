"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export default function SuccessStoriesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStory, setActiveStory] = useState<number | null>(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentSectionRef = sectionRef.current;
    if (!currentSectionRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  const stories = [
    {
      icon: "🏆",
      title: "The Crypto Snipers: A Platform Born from Ambition",
      color: "from-yellow-400 to-green-400",
      accentColor: "yellow",
      sections: [
        {
          label: "The Stakes:",
          text: "A client needed an enterprise-grade trading platform. Not a prototype. Not an MVP. The complete system.",
          highlight: false,
        },
        {
          label: "The Execution:",
          text: "I owned it all—architecture, broker integrations via Fast-API, algorithmic strategies, AWS deployment. Solo. No excuses.",
          highlight: false,
        },
        {
          label: "The Victory:",
          text: "A live, commercially successful platform that's executing thousands of trades and generating real profit.",
          highlight: false,
        },
        {
          label: "The Lesson:",
          text: "When the stakes are high, you need someone who doesn't just participate—you need someone who owns the outcome.",
          highlight: true,
        },
      ],
    },
    {
      icon: "⏱️",
      title: "60 Hours Returned: The Automation Revolution",
      color: "from-green-400 to-emerald-500",
      accentColor: "green",
      sections: [
        {
          label: "The Problem:",
          text: "A financial firm was hemorrhaging 60 hours monthly on manual reporting. Every report was a time thief. Every market alert was too slow.",
          highlight: false,
        },
        {
          label: "The Solution:",
          text: "I engineered dual automation: self-generating Excel/PDF reports distributed via Telegram and email, plus real-time market monitoring with instant alerts.",
          highlight: false,
        },
        {
          label: "The Transformation:",
          text: "60 hours reclaimed. 30 seconds shaved off every trade response. That's not optimization—that's liberation.",
          highlight: true,
        },
      ],
    },
    {
      icon: "🎯",
      title: "Predicting Risk: Machine Learning in Action",
      color: "from-lime-400 to-yellow-400",
      accentColor: "lime",
      sections: [
        {
          label: "The Challenge:",
          text: "Automate credit card approvals by predicting default risk with precision.",
          highlight: false,
        },
        {
          label: "The Approach:",
          text: "Logistic Regression, Decision Trees, Random Forest—I deployed the full ML arsenal with intensive feature engineering and validation.",
          highlight: false,
        },
        {
          label: "The Result:",
          text: "An intelligent system that makes high-stakes decisions accurately, proving that AI isn't future-talk—it's now-talk.",
          highlight: true,
        },
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="success-stories"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-zinc-950 to-black py-20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-yellow-500/10 to-green-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-green-500/10 to-lime-500/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-lime-500/5 to-yellow-500/5 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      {/* Hexagon Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%23ffffff' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-white">Real Projects. </span>
            <span className="text-yellow-400">Real Results. </span>
            <span className="bg-gradient-to-r from-green-400 to-lime-400 bg-clip-text text-transparent">
              Real Impact.
            </span>
          </h2>
          <div className="flex justify-center items-center gap-4 mt-6">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-pulse" />
            <div
              className="h-1 w-20 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse"
              style={{ animationDelay: "0.5s" }}
            />
          </div>
        </div>

        {/* Success Stories */}
        <div className="space-y-12">
          {stories.map((story, storyIndex) => (
            <div
              key={storyIndex}
              className={`group relative transition-all duration-700 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${storyIndex * 300}ms` }}
              onMouseEnter={() => setActiveStory(storyIndex)}
              onMouseLeave={() => setActiveStory(null)}
            >
              {/* Glow Effect */}
              <div
                className={`absolute -inset-2 bg-gradient-to-r ${story.color} rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
              />

              {/* Card */}
              <div className="relative p-8 sm:p-10 rounded-3xl bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 group-hover:border-zinc-700 transition-all duration-500">
                {/* Icon and Title */}
                <div className="flex items-start gap-6 mb-8">
                  <div
                    className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${
                      story.color
                    } flex items-center justify-center text-4xl sm:text-5xl transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 ${
                      activeStory === storyIndex ? "animate-bounce-slow" : ""
                    }`}
                  >
                    {story.icon}
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-white group-hover:bg-gradient-to-r ${story.color} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}
                    >
                      {story.title}
                    </h3>
                  </div>
                </div>

                {/* Story Sections */}
                <div className="space-y-6">
                  {story.sections.map((section, sectionIndex) => (
                    <div
                      key={sectionIndex}
                      className={`relative pl-6 border-l-4 transition-all duration-300 ${
                        section.highlight
                          ? `border-${story.accentColor}-400 bg-${story.accentColor}-500/5 p-4 rounded-r-lg`
                          : "border-zinc-700 hover:border-zinc-600"
                      }`}
                    >
                      <div
                        className={`absolute left-0 top-0 w-1 h-full bg-gradient-to-b ${story.color} transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top`}
                        style={{ transitionDelay: `${sectionIndex * 100}ms` }}
                      />

                      <p className="text-lg sm:text-xl font-bold text-gray-300 mb-2">
                        {section.label}
                      </p>
                      <p
                        className={`text-base sm:text-lg leading-relaxed ${
                          section.highlight
                            ? "text-white font-medium"
                            : "text-gray-400"
                        }`}
                      >
                        {section.text}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Stats Badge */}
                {activeStory === storyIndex && (
                  <div className="absolute top-8 right-8 animate-fade-in">
                    <div
                      className={`px-4 py-2 rounded-full bg-gradient-to-r ${story.color} text-black font-bold text-sm animate-pulse-slow`}
                    >
                      Success Story #{storyIndex + 1}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-block p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-zinc-900 to-black border border-zinc-800">
            <p className="text-xl sm:text-2xl text-gray-300 mb-4">
              Your success story could be next.
            </p>
            <p className="text-lg text-gray-400 mb-6">
              Real solutions. Real deadlines. Real results.
            </p>
            <Link href="#connect" className="group relative px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-yellow-400 to-green-400 text-black text-lg sm:text-xl font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-yellow-500/50">
              <span className="relative z-10">Start Your Success Story</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-lime-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>
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

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0) scale(1.1) rotate(3deg);
          }
          50% {
            transform: translateY(-10px) scale(1.1) rotate(3deg);
          }
        }

        .animate-float {
          animation: float 12s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float 12s ease-in-out infinite;
          animation-delay: 6s;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }

        .animate-bounce-slow {
          animation: bounce-slow 1.5s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.8;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
