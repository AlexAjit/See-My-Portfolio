"use client";

import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Handle initial state and mounting
  useEffect(() => {
    setMounted(true);
    const isDark = document.documentElement.classList.contains('dark');
    setDarkMode(isDark);
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    
    // Update DOM
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // Don't render anything until mounted to prevent hydration issues
  if (!mounted) return null;

  return (
    <motion.button
      className={`relative w-12 h-6 rounded-full flex items-center p-1 transition-all duration-300 outline-none ${
        darkMode 
          ? "bg-[#0D1B2A] border border-[#1B263B] shadow-[0_0_10px_rgba(27,38,59,0.3)]" 
          : "bg-[#FAF3E0] border border-[#FFB703]"
      }`}
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <motion.div
        className={`absolute w-5 h-5 rounded-full flex items-center justify-center ${
          darkMode ? "bg-[#E0E1DD]" : "bg-[#0D1B2A]"
        }`}
        animate={{
          x: darkMode ? 0 : 22,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30
        }}
      >
        {darkMode ? (
          <Moon className="w-3 h-3 text-[#0D1B2A]" />
        ) : (
          <Sun className="w-3 h-3 text-[#FAF3E0]" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeSwitcher;