import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

interface LoaderProps {
  isLoading: boolean;
}

const Loader = ({ isLoading }: LoaderProps) => {
  const { resolvedTheme } = useTheme();

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="loading-screen"
        >
          <div className="loading-content">
            <div className="loading-spinner mb-4"></div>
            <h2 className="text-white text-xl font-semibold mb-2">Loading Portfolio</h2>
            <p className="text-dark-400">Building something amazing...</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
