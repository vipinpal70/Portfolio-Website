import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";

interface Project {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  demoLink: string;
  githubLink: string;
  downloadLink?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Automated Trading System",
    description: "Full-stack automated trading system for crypto and Indian stock markets, with real-time data processing and alert systems.",
    imageSrc: "https://images.unsplash.com/photo-1518183214770-9cffbec72538?q=80&w=800&auto=format&fit=crop",
    tags: ["Python", "AWS", "Pandas", "Telegram API"],
    demoLink: "#",
    githubLink: "https://github.com/vipinpal70",
  },
  {
    id: 2,
    title: "Bangalore Home Prices Prediction",
    description: "Machine learning model to predict home prices in Bangalore based on 14 features, achieving 89% prediction accuracy.",
    imageSrc: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",
    tags: ["Python", "Scikit-learn", "Pandas", "Flask"],
    demoLink: "#",
    githubLink: "https://github.com/vipinpal70",
  },
  {
    id: 3,
    title: "Smart File Organizer",
    description: "Python desktop application to automate file organization with a user-friendly GUI and configurable settings.",
    imageSrc: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=800&auto=format&fit=crop",
    tags: ["Python", "PyQt6", "Nuitka", "Inno Setup"],
    demoLink: "#",
    githubLink: "https://github.com/vipinpal70",
    downloadLink: "#",
  },
  {
    id: 4,
    title: "Real-Time Video Call App",
    description: "Web application for real-time video communication using Socket.IO and WebRTC for peer-to-peer video streaming. Features include screen sharing, chat functionality, and room creation.",
    imageSrc: "https://images.unsplash.com/photo-1587614313085-5da51cebd8ac?q=80&w=800&auto=format&fit=crop",
    tags: ["JavaScript", "WebRTC", "Socket.IO", "Express.js"],
    demoLink: "#",
    githubLink: "https://github.com/vipinpal70",
  },
  {
    id: 5,
    title: "Fitness Web App",
    description: "Fitness application that integrates with Rapid-API for accessing workout data, tracking fitness goals, and generating personalized plans.",
    imageSrc: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
    tags: ["React", "RapidAPI", "CSS3", "Vercel"],
    demoLink: "#",
    githubLink: "https://github.com/vipinpal70",
  },
  {
    id: 6,
    title: "Credit Card Approval Model",
    description: "Predictive model for automating credit card application approvals based on user details and financial history.",
    imageSrc: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=800&auto=format&fit=crop",
    tags: ["Python", "Scikit-learn", "Logistic Regression", "Random Forest"],
    demoLink: "#",
    githubLink: "https://github.com/vipinpal70",
  }
];

const ProjectsSection = () => {
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize vanilla-tilt
    if (tiltRef.current) {
      const tiltNodes = tiltRef.current.querySelectorAll(".tilt-card");
      if (tiltNodes.length > 0) {
        VanillaTilt.init(tiltNodes as any, {
          max: 5,
          speed: 400,
          glare: true,
          "max-glare": 0.1,
          gyroscope: true,
        });
      }
    }
  }, []);

  return (
    <section id="projects" className="py-16 md:py-24 bg-dark-100 dark:bg-dark-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary-500/5 dark:bg-primary-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-secondary-500/5 dark:bg-secondary-500/10 rounded-full filter blur-3xl"></div>
      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-sans text-dark-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-lg text-dark-600 dark:text-dark-400 max-w-3xl mx-auto">
            Explore some of my recent work and personal projects that showcase my skills and approach to problem-solving.
          </p>
        </motion.div>

        <div ref={tiltRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className={`bg-white dark:bg-dark-800 rounded-xl shadow-lg border border-dark-200 dark:border-dark-700 overflow-hidden tilt-card ${project.id === 4 ? 'relative' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              whileHover={project.id === 4 ? { scale: 1.03, transition: { duration: 0.3 } } : {}}
            >
              {project.id === 4 && (
                <motion.div 
                  className="absolute top-3 right-3 z-10 bg-primary-600 text-white px-2.5 py-1 rounded-full text-xs font-bold shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.5,
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }}
                >
                  Featured
                </motion.div>
              )}
              <div className="relative pb-[60%] overflow-hidden group">
                <img 
                  src={project.imageSrc} 
                  alt={project.title} 
                  className={`absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 
                    ${project.id === 4 ? 'group-hover:scale-110 transform-gpu' : 'group-hover:scale-105'}`}
                />
                {project.id === 4 && (
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-sm font-medium">Real-time video calls with WebRTC technology</p>
                    </div>
                  </motion.div>
                )}
              </div>
              <div className="p-6 tilt-card-content">
                <h3 className={`text-xl font-semibold text-dark-900 dark:text-white mb-2 
                  ${project.id === 4 ? 'flex items-center' : ''}`}>
                  {project.title}
                  {project.id === 4 && (
                    <motion.span 
                      className="ml-2 inline-flex"
                      initial={{ rotate: 0 }}
                      whileInView={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ 
                        duration: 1.5, 
                        delay: 1,
                        repeat: Infinity,
                        repeatDelay: 5
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </motion.span>
                  )}
                </h3>
                <p className="text-dark-600 dark:text-dark-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <motion.span 
                      key={i} 
                      className={`px-2 py-1 text-xs rounded-md bg-primary-500/10 text-primary-600 dark:bg-primary-500/20 dark:text-primary-400
                        ${project.id === 4 ? 'hover:bg-primary-500 hover:text-white transition-colors duration-300' : ''}`}
                      whileHover={project.id === 4 ? { scale: 1.1 } : {}}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <motion.a 
                    href={project.demoLink} 
                    className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className="fas fa-external-link-alt mr-1"></i> Live Demo
                  </motion.a>
                  <motion.a 
                    href={project.githubLink} 
                    className="text-dark-600 hover:text-dark-800 dark:text-dark-400 dark:hover:text-dark-200 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className="fab fa-github mr-1"></i> GitHub
                  </motion.a>
                  {project.downloadLink && (
                    <motion.a 
                      href={project.downloadLink} 
                      className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <i className="fas fa-download mr-1"></i> Download
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
