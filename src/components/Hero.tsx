import React from 'react';
import { motion } from 'framer-motion';
import { Wand2, Sparkles, Music2 } from 'lucide-react';
import FloatingNotes from './FloatingNotes';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <FloatingNotes />
      
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Sparkles className="w-4 h-4 text-accent-400" />
            <span className="text-sm text-white/80">Powered by Stable Diffusion</span>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 bg-clip-text text-transparent animate-gradient">
              Create Music
            </span>
            <br />
            <span className="text-white">with AI Magic</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Transform your words into beautiful music using the power of AI. 
            Generate unique audio clips from simple text prompts in seconds.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <motion.a
              href="#generator"
              className="btn-primary flex items-center space-x-2 text-lg px-8 py-4"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(14, 165, 233, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Wand2 className="w-5 h-5" />
              <span>Start Creating</span>
            </motion.a>

            <motion.button
              className="btn-secondary flex items-center space-x-2 text-lg px-8 py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Music2 className="w-5 h-5" />
              <span>Listen to Examples</span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Animated Waveform */}
        <motion.div
          className="mt-20 flex items-center justify-center space-x-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1 bg-gradient-to-t from-primary-500 to-accent-500 rounded-full"
              style={{ height: Math.random() * 60 + 20 }}
              animate={{
                height: [
                  Math.random() * 60 + 20,
                  Math.random() * 80 + 40,
                  Math.random() * 60 + 20
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;