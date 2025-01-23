"use client";
import React from 'react';
import { Coffee } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">
          AlexAjit
        </div>
        <Link 
          href="https://github.com/AlexAjit" 
          target="_blank" 
          className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-full transition-all duration-300"
        >
          <Coffee className="w-5 h-5 text-yellow-400" />
          <span className="text-white">Buy Me a Coffee</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
