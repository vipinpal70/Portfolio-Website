"use client";
import HeroSection from "./components/HeroSection";
import MomentumSection from "./components/MomentumSection";
import BlurText from "./components/BlurText";
import Education from "./components/Education";
import AboutSection from "./components/AboutSection";
import RealityCheckSection from "./components/RealityCheckSection";
import SolutionsSection from "./components/SolutionsSection";
import SuccessStoriesSection from "./components/SuccessStoriesSection";
import AboutSectionTwo from "./components/AboutSectionTwo";
import CTASection from "./components/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MomentumSection />
      <div className="bg-[#070010] h-56 flex flex-col items-center justify-center font-bold text-5xl lg:text-6xl xl:text-7xl 2xl:text-7xl text-center">
        <BlurText
          text="Education & Experience"
          delay={250}
          animateBy="words"
          direction="top"
          onAnimationComplete={() => console.log("Animation complete")}
          className="w-full h-56 py-4 flex items-center justify-center text-7xl text-center"
        />
      </div>
      <Education />
      <AboutSection />
      <RealityCheckSection />
      <SolutionsSection />
      <SuccessStoriesSection />
      <AboutSectionTwo />
      <CTASection />
    </>
  );
}
