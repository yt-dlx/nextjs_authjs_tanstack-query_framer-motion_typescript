// components/Navbar.tsx
"use client";
import { ThemeToggle } from "./ThemeToggle";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-neutral-50/70 dark:bg-neutral-800/70 backdrop-blur-md shadow-md p-4 z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-neutral-800 dark:text-neutral-50">
          Auth.js Example
        </h1>
        <ThemeToggle />
      </div>
    </nav>
  );
};
