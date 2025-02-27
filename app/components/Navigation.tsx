'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navigation() {

  return (
    <div className="relative">
      <nav className="w-full py-4 px-8 flex items-center justify-between bg-transparent fixed top-0 z-50">
        {/* Logo and Company Name */}
        <Link href="/" className="flex items-center space-x-2">
          <motion.div
            className="text-2xl font-bold text-white hover:text-brown-200 transition-colors flex items-center gap-2"
          >
            
              <Image
                src="/logo.png"
                alt="Cocofly Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </motion.div>
            COCOFLY STUDIO
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
      <motion.div 
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="fixed top-[72px] left-0 w-full h-[2px] bg-white/30 origin-left z-50"
      />
    </div>
  );
} 