import React from 'react';
import { motion } from 'framer-motion';
import { Music, Github, Star } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/20"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative">
              <Music className="w-8 h-8 text-primary-400" />
              <motion.div
                className="absolute inset-0 bg-primary-400 rounded-full opacity-20"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Riffusion AI
            </h1>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#generator" className="text-white/80 hover:text-white transition-colors">
              Generate
            </a>
            <a href="#features" className="text-white/80 hover:text-white transition-colors">
              Features
            </a>
            <a href="#about" className="text-white/80 hover:text-white transition-colors">
              About
            </a>
          </nav>

          <motion.a
            href="https://github.com/riffusion/riffusion"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
            <Star className="w-4 h-4" />
          </motion.a>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;