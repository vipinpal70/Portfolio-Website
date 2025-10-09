// "use client";
// import React, { use, useEffect, useState } from "react";
// import PixelBlast from "./PixelBlast";
// import { Splash } from "next/font/google";
// import SplashCursor from "./SplashCursor";
// import { log } from "console";
// import Navbar from "./Navbar";
// import DotGrid from "./DotGrid";

// function HeroSection() {
//   const [datetime, setdatetime] = useState(new Date());
//   const [minute, setminute] = useState(0);
//   const [hasMounted, setHasMounted] = useState(false);

//   useEffect(() => {
//     setHasMounted(true);
//   }, []);

//   useEffect(() => {
//     const mn = new Date().getMinutes();
//     setminute(mn);
//     console.log(mn);
//   });

//   if (typeof window === "undefined" || !window.document) {
//     return null;
//   }

//   if (!hasMounted) {
//     return null;
//   }

//   return (
//     <div className="h-[100vh] bg-[#070010] ">
//       <Navbar />
//       {minute % 3 === 0 && (
//         <div className="relative flex items-center justify-center ">
//           <SplashCursor TRANSPARENT={true} SHADING={true} />
//         </div>
//       )}

//       {minute % 3 === 1 && (
//         <div className="relative h-[90vh] flex items-center justify-center overflow-hidden overflow-y-hidden overflow-x-hidden">
//           <DotGrid
//             dotSize={5}
//             gap={15}
//             baseColor="#160033"
//             activeColor="#5227FF"
//             proximity={120}
//             shockRadius={250}
//             shockStrength={5}
//             resistance={750}
//             returnDuration={1.5}
//           />
//         </div>
//       )}

//       {minute % 3 === 2 && (
//         <div className="relative h-[90vh] flex items-center justify-center overflow-hidden overflow-y-hidden overflow-x-hidden">
//           <PixelBlast
//             variant="circle"
//             pixelSize={6}
//             color="#009933"
//             className=""
//             patternScale={3}
//             patternDensity={1.2}
//             pixelSizeJitter={0.5}
//             enableRipples
//             rippleSpeed={0.4}
//             rippleThickness={0.12}
//             rippleIntensityScale={1.5}
//             liquid={false}
//             liquidStrength={0.12}
//             liquidRadius={1.2}
//             liquidWobbleSpeed={5}
//             speed={0.6}
//             edgeFade={0.25}
//             transparent
//           />
//         </div>
//       )}

//       <div className="absolute -top-12 left-0 w-full h-full flex items-center justify-center">
//         <div className="flex flex-col items-center justify-center">
//           <h1 className="text-7xl font-bold text-white mb-4">
//             Let's Build Something
//             <span className="block text-6xl text-center font-bold text-white mb-4">
//               Extraordinary
//             </span>
//           </h1>
//           <p className="text-3xl text-center font-[400] text-white/80">
//             Every line of code I write has one purpose: to turn your ambitious
//             ideas into reality.
//           </p>
//           <p className="text-3xl text-center font-[400] text-white/80">
//             I've saved clients 60+ hours monthly and built systems that don't
//             just work — they dominate
//           </p>
//           <p className="text-3xl text-center font-[400] text-white/80">
//             Your breakthrough moment is closer than you think.
//           </p>
//           <button className="mt-8 px-6 py-3 bg-[#5227FF] text-white rounded-full">
//             See What We Can Build Together
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HeroSection;

"use client";
import React, { useEffect, useState } from "react";
import PixelBlast from "./PixelBlast";
import SplashCursor from "./SplashCursor";
import Navbar from "./Navbar";
import DotGrid from "./DotGrid";
import Link from "next/link";

function HeroSection() {
  const [minute, setMinute] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    const mn = new Date().getMinutes();
    setMinute(mn);
  }, []);

  if (typeof window === "undefined" || !window.document) {
    return null;
  }

  if (!hasMounted) {
    return null;
  }

  return (
    <div className="min-h-screen h-screen bg-[#070010] relative overflow-hidden">
      <Navbar />

      {/* Background Animation Layers */}
      {minute % 3 === 0 && (
        <div className="absolute inset-0 flex items-center justify-center">
          <SplashCursor TRANSPARENT={true} SHADING={true} />
        </div>
      )}

      {minute % 3 === 1 && (
        <div className="absolute inset-0 flex items-center justify-center">
          <DotGrid
            dotSize={5}
            gap={15}
            baseColor="#160033"
            activeColor="#5227FF"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
        </div>
      )}

      {minute % 3 === 2 && (
        <div className="absolute inset-0 flex items-center justify-center">
          <PixelBlast
            variant="circle"
            pixelSize={6}
            color="#009933"
            className=""
            patternScale={3}
            patternDensity={1.2}
            pixelSizeJitter={0.5}
            enableRipples
            rippleSpeed={0.4}
            rippleThickness={0.12}
            rippleIntensityScale={1.5}
            liquid={false}
            liquidStrength={0.12}
            liquidRadius={1.2}
            liquidWobbleSpeed={5}
            speed={0.6}
            edgeFade={0.25}
            transparent
          />
        </div>
      )}

      {/* Content Layer */}
      <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center max-w-7xl w-full text-center space-y-4 sm:space-y-6">
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
            Let&apos;s Build Something
            <span className="block mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              Extraordinary
            </span>
          </h1>

          {/* Subheadings */}
          <div className="space-y-1 sm:space-y-2 max-w-6xl">
            <p className="text-sm sm:text-base md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl font-normal text-white/90 leading-relaxed px-1">
              Every line of code I write has one purpose: to turn your ambitious
              ideas into reality.
            </p>
            <p className="text-sm sm:text-base md:text-sm lg:text-md xl:text-xl 2xl:text-2xl font-normal text-white/90 leading-relaxed px-1">
              I&apos;ve saved clients 60+ hours monthly and built systems that don&apos;t
              just work — they dominate
            </p>
            <p className="text-sm sm:text-base md:text-sm lg:text-md xl:text-xl 2xl:text-2xl font-normal text-white/90 leading-relaxed px-1">
              Your breakthrough moment is closer than you think.
            </p>
          </div>

          {/* CTA Button */}
          <Link href="#momentum" className="mt-4 sm:mt-6 lg:mt-8 px-5 sm:px-6 md:px-8 lg:px-10 py-2.5 sm:py-3 md:py-3.5 lg:py-4 bg-[#5227FF] text-white text-sm sm:text-base md:text-lg lg:text-xl font-semibold rounded-full hover:bg-[#5227FF]/90 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-[#5227FF]/50">
            See What We Can Build Together
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
