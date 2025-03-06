// "use client";
// import React from 'react';
// import { Coffee } from 'lucide-react';
// import Link from 'next/link';

// const Header = () => {
//   return (
//     <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-sm">
//       <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//         <Link 
//           href="https://github.com/AlexAjit" 
//           target="_blank" 
//           className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-full transition-all duration-300"
//         >
//           <Coffee className="w-5 h-5 text-yellow-400" />
//           <span className="text-white">Buy Me a Coffee</span>
//         </Link>
//       </div>
//     </header>
//   );
// };

// export default Header;


"use client";

import React, { useState, useEffect } from 'react';
import { Coffee, Github, Gitlab, Linkedin, Menu, Twitter, X } from 'lucide-react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Navigation links
  // const navLinks = [
  //   { name: 'Home', href: '#home' },
  //   { name: 'Projects', href: '#projects' },
  //   { name: 'About', href: '#about' },
  //   { name: 'Contact', href: '#contact' },
  // ];

  // Handle scroll event to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/90 backdrop-blur-md py-3 shadow-lg' 
          : 'bg-transparent/100 py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <div className="text-2xl font-bold text-white">
          AlexAjit
        </div>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">

          {/* Social & CTA */}
          <div className="flex items-center space-x-4">
            <motion.a
              href="https://github.com/AlexAjit"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="text-gray-400 hover:text-white transition-colors duration-200"
              whileHover={{ y: -2 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/ajit-yadav-6b0b77208/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="text-gray-400 hover:text-white transition-colors duration-200"
              whileHover={{ y: -2 }}
            >
              <Linkedin className='w-5 h-5' />
            </motion.a>

            <motion.a
              href="https://github.com/AlexAjit"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="text-gray-400 hover:text-white transition-colors duration-200"
              whileHover={{ y: -2 }}
            >
              <Gitlab className='w-5 h-5' />
            </motion.a>

            <motion.a
              href="https://x.com/AjitAvala"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="text-gray-400 hover:text-white transition-colors duration-200"
              whileHover={{ y: -2 }}
            >
              <Twitter className='w-5 h-5' />
            </motion.a>

            <motion.a
              href="https://github.com/AlexAjit"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="flex items-center space-x-2 bg-gradient-to-r from-teal-500 to-teal-700 text-white rounded-lg py-3 px-6 transition-all duration-300 shadow-lg hover:shadow-[#1DB954]/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Coffee className="w-4 h-4" />
              <span className="text-sm font-medium">Buy Me a Coffee</span>
            </motion.a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-300 focus:outline-none"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#121212] border-t border-gray-800"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                <a
                  href="https://github.com/AlexAjit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-white py-2"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://github.com/AlexAjit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-[#1DB954] text-white p-3 rounded-md"
                >
                  <Coffee className="w-4 h-4" />
                  <span>Buy Me a Coffee</span>
                </a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;