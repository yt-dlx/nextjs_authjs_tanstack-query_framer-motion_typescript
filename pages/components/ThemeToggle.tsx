// components/ThemeToggle.tsx
"use client";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.button
      className="p-2 rounded-full bg-neutral-200 dark:bg-neutral-800"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      animate={{
        rotate: theme === "dark" ? 0 : 180,
      }}
      transition={{ duration: 1.5 }}
    >
      {theme === "dark" ? <FaSun className="text-xl text-yellow-300 dark:text-yellow-500 hover:text-yellow-400 dark:hover:text-yellow-600" /> : <FaMoon className="text-xl text-neutral-600 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300" />}
    </motion.button>
  );
};

export default ThemeToggle;
