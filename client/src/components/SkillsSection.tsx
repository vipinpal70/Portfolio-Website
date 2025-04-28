import { motion } from "framer-motion";
import { Code, Beaker, Database, Cloud } from "lucide-react";

const SkillsSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="skills" className="py-16 md:py-24 bg-white dark:bg-dark-950">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-sans text-dark-900 dark:text-white mb-4">My Skills</h2>
          <p className="text-lg text-dark-600 dark:text-dark-400 max-w-3xl mx-auto">
            I've worked with a variety of technologies across the full stack development and data science spectrum.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Programming Languages */}
          <motion.div 
            className="bg-dark-50 dark:bg-dark-800 rounded-xl border border-dark-200 dark:border-dark-700 p-6 transform transition-all hover:scale-105 duration-300"
            variants={item}
          >
            <div className="text-primary-600 dark:text-primary-400 mb-4">
              <Code className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-dark-900 dark:text-white mb-3">Programming Languages</h3>
            <ul className="space-y-2 text-dark-600 dark:text-dark-400">
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-primary-500 mr-2"></span>
                Python
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-primary-500 mr-2"></span>
                JavaScript
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-primary-500 mr-2"></span>
                Java
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-primary-500 mr-2"></span>
                SQL
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-primary-500 mr-2"></span>
                Scala
              </li>
            </ul>
          </motion.div>

          {/* Frameworks */}
          <motion.div 
            className="bg-dark-50 dark:bg-dark-800 rounded-xl border border-dark-200 dark:border-dark-700 p-6 transform transition-all hover:scale-105 duration-300"
            variants={item}
          >
            <div className="text-primary-600 dark:text-primary-400 mb-4">
              <Beaker className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-dark-900 dark:text-white mb-3">Frameworks & Libraries</h3>
            <ul className="space-y-2 text-dark-600 dark:text-dark-400">
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-primary-500 mr-2"></span>
                Flask
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-primary-500 mr-2"></span>
                Django
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-primary-500 mr-2"></span>
                React
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-primary-500 mr-2"></span>
                Pandas & NumPy
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-primary-500 mr-2"></span>
                Scikit-learn
              </li>
            </ul>
          </motion.div>

          {/* Cloud & DevOps */}
          <motion.div 
            className="bg-dark-50 dark:bg-dark-800 rounded-xl border border-dark-200 dark:border-dark-700 p-6 transform transition-all hover:scale-105 duration-300"
            variants={item}
          >
            <div className="text-primary-600 dark:text-primary-400 mb-4">
              <Cloud className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-dark-900 dark:text-white mb-3">Cloud & DevOps</h3>
            <ul className="space-y-2 text-dark-600 dark:text-dark-400">
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-primary-500 mr-2"></span>
                AWS (EC2, Lambda, S3)
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-primary-500 mr-2"></span>
                Docker
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-primary-500 mr-2"></span>
                Git & GitHub
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-primary-500 mr-2"></span>
                Apache Kafka
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-primary-500 mr-2"></span>
                Apache Spark
              </li>
            </ul>
          </motion.div>

          {/* Databases */}
          <motion.div 
            className="bg-dark-50 dark:bg-dark-800 rounded-xl border border-dark-200 dark:border-dark-700 p-6 transform transition-all hover:scale-105 duration-300"
            variants={item}
          >
            <div className="text-primary-600 dark:text-primary-400 mb-4">
              <Database className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-dark-900 dark:text-white mb-3">Databases</h3>
            <ul className="space-y-2 text-dark-600 dark:text-dark-400">
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-primary-500 mr-2"></span>
                MySQL
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-primary-500 mr-2"></span>
                MongoDB
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-primary-500 mr-2"></span>
                Redis
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-primary-500 mr-2"></span>
                SQLite
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
