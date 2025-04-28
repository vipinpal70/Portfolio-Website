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
    description: "Web application for real-time video communication using Socket.IO and WebRTC for peer-to-peer video streaming.",
    imageSrc: "https://images.unsplash.com/photo-1639153445089-e2ca680a1045?q=80&w=800&auto=format&fit=crop",
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
              className="bg-white dark:bg-dark-800 rounded-xl shadow-lg border border-dark-200 dark:border-dark-700 overflow-hidden tilt-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
            >
              <div className="relative pb-[60%] overflow-hidden">
                <img 
                  src={project.imageSrc} 
                  alt={project.title} 
                  className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6 tilt-card-content">
                <h3 className="text-xl font-semibold text-dark-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-dark-600 dark:text-dark-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 text-xs rounded-md bg-primary-500/10 text-primary-600 dark:bg-primary-500/20 dark:text-primary-400">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <a 
                    href={project.demoLink} 
                    className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-external-link-alt mr-1"></i> Live Demo
                  </a>
                  <a 
                    href={project.githubLink} 
                    className="text-dark-600 hover:text-dark-800 dark:text-dark-400 dark:hover:text-dark-200 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github mr-1"></i> GitHub
                  </a>
                  {project.downloadLink && (
                    <a 
                      href={project.downloadLink} 
                      className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-download mr-1"></i> Download
                    </a>
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
