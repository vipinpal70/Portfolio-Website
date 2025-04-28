import { useState, useEffect } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show custom cursor on desktop
    if (window.innerWidth < 1024) {
      return;
    }

    setVisible(true);

    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => {
      setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    // Handle hovering over clickable elements
    const handleElementHover = () => {
      setHovered(true);
    };

    const handleElementLeave = () => {
      setHovered(false);
    };

    // Add event listeners
    document.addEventListener("mousemove", updateCursorPosition);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Add hover effects for clickable elements
    const clickableElements = document.querySelectorAll(
      "a, button, input, textarea, .tilt-card"
    );
    clickableElements.forEach((element) => {
      element.addEventListener("mouseenter", handleElementHover);
      element.addEventListener("mouseleave", handleElementLeave);
    });

    // Clean up event listeners
    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);

      clickableElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleElementHover);
        element.removeEventListener("mouseleave", handleElementLeave);
      });
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`custom-cursor hidden lg:block ${hovered ? "scale-150" : ""}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%) scale(${hovered ? 1.5 : 1})`,
      }}
    />
  );
};

export default CustomCursor;
