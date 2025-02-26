'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navigation() {
  return (
    <nav className="w-full py-4 px-8 flex items-center justify-between bg-transparent absolute top-0 z-50">
      {/* Logo and Company Name */}
      <Link href="/" className="flex items-center space-x-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-white hover:text-brown-200 transition-colors"
        >
          COCOFLY STUDIO
        </motion.div>
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center space-x-8">
      <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative group"
        >
          <button 
            onClick={() => {
              document.getElementById('games-section')?.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
            }}
            className="text-white hover:text-brown-200 transition-colors px-4 py-2 rounded-lg border-2 border-transparent hover:border-white"
          >
            GAMES
          </button>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative group"
        >
          <button 
            onClick={() => {
              document.getElementById('about-section')?.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
            }}
            className="text-white hover:text-brown-200 transition-colors px-4 py-2 rounded-lg border-2 border-transparent hover:border-white"
          >
            ABOUT US
          </button>
        </motion.div>
      </div>
    </nav>
  );
} 