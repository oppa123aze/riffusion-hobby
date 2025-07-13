import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Brain, Headphones, Palette, Clock, Share2 } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Generation',
      description: 'Advanced neural networks trained on millions of audio samples to create unique music from text descriptions.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Generate high-quality audio clips in seconds, not hours. Perfect for rapid prototyping and creative exploration.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Palette,
      title: 'Infinite Creativity',
      description: 'Explore endless musical possibilities with genre-blending, mood control, and style customization.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Headphones,
      title: 'Studio Quality',
      description: 'Professional-grade audio output suitable for music production, content creation, and commercial use.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Clock,
      title: 'Real-time Processing',
      description: 'Watch your ideas come to life instantly with real-time audio generation and live preview capabilities.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Share2,
      title: 'Easy Sharing',
      description: 'Export in multiple formats and share your creations directly to social platforms or download for later use.',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section id="features" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Powerful Features
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Everything you need to create amazing music with AI, from simple prompts to professional productions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="card group cursor-pointer"
            >
              <div className="text-center">
                <motion.div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-primary-400 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-white/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '1M+', label: 'Songs Generated' },
            { number: '50K+', label: 'Active Users' },
            { number: '99.9%', label: 'Uptime' },
            { number: '4.9/5', label: 'User Rating' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;