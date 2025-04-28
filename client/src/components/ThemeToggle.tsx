import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // After mounting, we can safely access window and localStorage
  useEffect(() => {
    setMounted(true);
  }, []);

  // Toggle between light and dark themes
  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  // Ensure the component is mounted before rendering to avoid hydration issues
  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative rounded-full focus:outline-none focus:ring-0 p-2 text-dark-700 dark:text-dark-300 hover:bg-dark-200 dark:hover:bg-dark-800 transition-colors"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: theme === "dark" ? 180 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {theme === "dark" ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )}
      </motion.div>
    </Button>
  );
};

export default ThemeToggle;
