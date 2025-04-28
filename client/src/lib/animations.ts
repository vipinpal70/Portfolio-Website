import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register gsap plugins
gsap.registerPlugin(ScrollTrigger);

export const initScrollAnimations = () => {
  // Animate elements when they come into view
  const animateElementsOnScroll = () => {
    const elements = document.querySelectorAll("[data-animate]");
    
    elements.forEach((element) => {
      const animationType = element.getAttribute("data-animate");
      
      gsap.from(element, {
        opacity: 0,
        y: animationType === "fade-up" ? 30 : 0,
        x: animationType === "fade-left" ? 30 : animationType === "fade-right" ? -30 : 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      });
    });
  };

  // Initialize parallax effect
  const initParallax = () => {
    const parallaxElements = document.querySelectorAll("[data-parallax]");
    
    parallaxElements.forEach((element) => {
      const speed = parseFloat(element.getAttribute("data-parallax") || "0.1");
      
      gsap.to(element, {
        y: `${speed * 100}%`,
        ease: "none",
        scrollTrigger: {
          trigger: element.parentElement,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    });
  };

  // Initialize animation sequences
  const initSequences = () => {
    const sequences = document.querySelectorAll("[data-sequence]");
    
    sequences.forEach((sequence) => {
      const children = sequence.children;
      
      gsap.from(children, {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sequence,
          start: "top 80%"
        }
      });
    });
  };

  // Initialize all animations
  animateElementsOnScroll();
  initParallax();
  initSequences();
};

// Text typing animation
export const initTypingAnimation = (element: HTMLElement, strings: string[], options = {}) => {
  // This would be implemented using Typed.js in components where needed
  return null;
};

// Section transitions
export const pageSectionTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5 }
};

// Staggered item animations
export const staggeredContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const staggeredItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};
