// components/AnimatedContentWrapper.tsx
"use client";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export const AnimatedContentWrapper = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();

  return (
    <motion.div
      key={theme}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      className="flex-grow bg-neutral-100 dark:bg-neutral-900 p-6 overflow-y-auto scrollbar-thin scrollbar-thumb-sky-700 scrollbar-track-sky-300 dark:scrollbar-thumb-sky-500 dark:scrollbar-track-neutral-700"
    >
      {children}
    </motion.div>
  );
};
