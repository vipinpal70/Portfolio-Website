import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";
import SocialLinks from "./SocialLinks";

const HeroSection = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    // Initialize Typed.js
    const typed = new Typed(typedElement.current, {
      strings: [
        "Python Developer",
        "Full-Stack Developer",
        "Machine Learning Enthusiast",
        "Algorithmic Trader"
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      startDelay: 500,
      loop: true
    });

    // Cleanup
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden radial-gradient">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div
            className="w-full lg:w-1/2 mb-12 lg:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="max-w-2xl mx-auto lg:mx-0">
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex h-6 items-center justify-center rounded-full bg-primary-500/10 px-3 py-1 text-sm font-medium text-primary-500 dark:bg-primary-700/10 dark:text-primary-400">
                  <span>Available for work</span>
                </div>
                <span className="inline-block text-xl wave">👋</span>
              </div>
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans text-dark-900 dark:text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              >
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500">Vipin Pal</span>
              </motion.h1>
              <motion.div
                className="text-xl md:text-2xl text-dark-700 dark:text-dark-300 font-medium mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                <span ref={typedElement}></span>
              </motion.div>
              <motion.p
                className="text-lg text-dark-600 dark:text-dark-400 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              >
                Building scalable solutions & automating financial systems with expertise in Python and Full-Stack development.
              </motion.p>
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                <a href="#projects" className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors">
                  <span>View Projects</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 bg-transparent border border-primary-600 text-primary-600 hover:bg-primary-600/10 dark:text-primary-400 dark:border-primary-400 dark:hover:bg-primary-600/5 font-medium rounded-lg transition-colors">
                  <span>Contact Me</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            className="w-full lg:w-1/2 pl-0 lg:pl-12"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <div className="relative">
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary-500/10 dark:bg-primary-500/20 rounded-full filter blur-3xl"></div>
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-secondary-500/10 dark:bg-secondary-500/20 rounded-full filter blur-3xl"></div>
              <div className="relative bg-white dark:bg-dark-800 rounded-2xl shadow-xl overflow-hidden border border-dark-200 dark:border-dark-700">
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-accent-500"></div>
                    <div className="w-3 h-3 rounded-full bg-primary-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700 p-4">
                    <pre className="font-code text-sm text-gray-800 dark:text-gray-200 whitespace-pre-wrap">
                      <span className="text-purple-600 dark:text-purple-400">class</span> <span className="text-yellow-600 dark:text-yellow-400">VipinPal</span>:
                      <span className="text-purple-600 dark:text-purple-400">def</span> <span className="text-blue-600 dark:text-blue-400">__init__</span>(<span className="text-orange-600 dark:text-orange-400">self</span>):
                      <span className="text-orange-600 dark:text-orange-400">self</span>.name = <span className="text-green-600 dark:text-green-400">"Vipin Pal"</span>
                      <span className="text-orange-600 dark:text-orange-400">self</span>.role = <span className="text-green-600 dark:text-green-400">"Python/Full-Stack Developer"</span>
                      <span className="text-orange-600 dark:text-orange-400">self</span>.skills = [<span className="text-green-600 dark:text-green-400">"Python"</span>, <span className="text-green-600 dark:text-green-400">"Flask"</span>, <span className="text-green-600 dark:text-green-400">"Django"</span>, <span className="text-green-600 dark:text-green-400">"React"</span>]
                      <span className="text-orange-600 dark:text-orange-400">self</span>.education = [<span className="text-green-600 dark:text-green-400">"MCA from VIT"</span>, <span className="text-green-600 dark:text-green-400">"BCA from DAV"</span>]

                      <span className="text-purple-600 dark:text-purple-400">def</span> <span className="text-blue-600 dark:text-blue-400">say_hello</span>(<span className="text-orange-600 dark:text-orange-400">self</span>):
                      <span className="text-purple-600 dark:text-purple-400">return</span> <span className="text-green-600 dark:text-green-400">"Hello! I'm Vipin, a Python/Full-Stack Developer."</span>

                      <span className="text-purple-600 dark:text-purple-400">def</span> <span className="text-blue-600 dark:text-blue-400">get_contact</span>(<span className="text-orange-600 dark:text-orange-400">self</span>):
                      <span className="text-purple-600 dark:text-purple-400">return</span> {"{"}
                      <span className="text-green-600 dark:text-green-400">"email"</span>: <span className="text-green-600 dark:text-green-400">"vipinpal.dev@gmail.com"</span>,
                      <span className="text-green-600 dark:text-green-400">"phone"</span>: <span className="text-green-600 dark:text-green-400">"+91 7060298070"</span>,
                      <span className="text-green-600 dark:text-green-400">"github"</span>: <span className="text-green-600 dark:text-green-400">"vipinpal70"</span>
                      {"}"}

                      <span className="text-gray-600 dark:text-gray-400"># Initialize</span>
                      vipin = VipinPal()

                      <span className="text-purple-600 dark:text-purple-400">print</span>(vipin.say_hello())</pre>

                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          className="mt-12 lg:mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <SocialLinks />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
