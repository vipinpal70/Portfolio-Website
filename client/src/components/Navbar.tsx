import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position to add background to navbar when scrolled
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = "visible";
  };

  // Toggle mobile menu and prevent body scroll when menu is open
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.style.overflow = !mobileMenuOpen ? "hidden" : "visible";
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 dark:bg-dark-900/80 backdrop-blur-md border-b border-dark-200 dark:border-dark-800" : ""
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 py-4">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 text-dark-900 dark:text-white">
            <span className="text-2xl font-bold font-sans">
              <span className="text-primary-600">V</span>P
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover-underline text-dark-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Home
            </a>
            <a href="#about" className="hover-underline text-dark-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              About
            </a>
            <a href="#skills" className="hover-underline text-dark-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover-underline text-dark-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover-underline text-dark-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Contact
            </a>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-dark-700 dark:text-dark-300 hover:bg-dark-200 dark:hover:bg-dark-800 rounded-md transition-colors focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden fixed inset-0 z-50 bg-white dark:bg-dark-900"
          >
            <div className="container mx-auto px-4 py-8 h-full flex flex-col">
              <div className="flex justify-end mb-8">
                <button
                  className="p-2 text-dark-700 dark:text-dark-300 hover:bg-dark-200 dark:hover:bg-dark-800 rounded-md transition-colors focus:outline-none"
                  onClick={toggleMobileMenu}
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="flex flex-col space-y-6 text-center">
                <a
                  href="#home"
                  onClick={handleLinkClick}
                  className="py-2 text-xl text-dark-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  Home
                </a>
                <a
                  href="#about"
                  onClick={handleLinkClick}
                  className="py-2 text-xl text-dark-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  About
                </a>
                <a
                  href="#skills"
                  onClick={handleLinkClick}
                  className="py-2 text-xl text-dark-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  Skills
                </a>
                <a
                  href="#projects"
                  onClick={handleLinkClick}
                  className="py-2 text-xl text-dark-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  onClick={handleLinkClick}
                  className="py-2 text-xl text-dark-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  Contact
                </a>
              </div>
              <div className="mt-auto">
                <div className="flex justify-center space-x-6 py-6">
                  <a
                    href="https://www.linkedin.com/in/vipinpal70/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <i className="fab fa-linkedin text-2xl"></i>
                  </a>
                  <a
                    href="https://github.com/vipinpal70"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <i className="fab fa-github text-2xl"></i>
                  </a>
                  <a
                    href="mailto:vipinpal7060@gmail.com"
                    className="text-dark-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <i className="fas fa-envelope text-2xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
