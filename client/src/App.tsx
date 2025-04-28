import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import BackToTop from "./components/BackToTop";
import Loader from "./components/Loader";
import { TooltipProvider } from "./components/ui/tooltip";

function App() {
  const { resolvedTheme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Handle scroll progress for the progress bar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (currentScrollY / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Simulate loading time
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <TooltipProvider>
      <div className={`min-h-screen relative bg-gray-50 text-gray-800 dark:bg-gray-950 dark:text-gray-200 font-body theme-transition`}>
        {/* Loading screen */}
        <Loader isLoading={isLoading} />
        
        {/* Progress line at the top of the page */}
        <div 
          className="progress-line fixed top-0 left-0 h-[3px] bg-gradient-to-r from-primary-600 to-secondary-500 z-50"
          style={{ width: `${scrollProgress}%` }}
        />

        {/* Custom cursor for desktop */}
        <CustomCursor />

        {/* Main content */}
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />

        {/* Back to top button */}
        <BackToTop />
      </div>
    </TooltipProvider>
  );
}

export default App;
