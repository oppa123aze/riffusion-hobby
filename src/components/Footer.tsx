import React from 'react';
import { motion } from 'framer-motion';
import { Music, Github, Twitter, Disc as Discord, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <motion.div 
              className="flex items-center space-x-3 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <Music className="w-8 h-8 text-primary-400" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Riffusion AI
              </h3>
            </motion.div>
            <p className="text-white/70 mb-4 max-w-md">
              Create beautiful music with the power of AI. Transform your ideas into audio with simple text prompts.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Github, href: 'https://github.com/riffusion/riffusion' },
                { icon: Twitter, href: '#' },
                { icon: Discord, href: '#' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5 text-white/70" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Generate Music', 'Examples', 'API Docs', 'Tutorials'].map((link, index) => (
                <li key={index}>
                  <motion.a
                    href="#"
                    className="text-white/70 hover:text-white transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {['Help Center', 'Community', 'Contact Us', 'Bug Reports'].map((link, index) => (
                <li key={index}>
                  <motion.a
                    href="#"
                    className="text-white/70 hover:text-white transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © 2024 Riffusion AI. All rights reserved.
          </p>
          
          <motion.div 
            className="flex items-center space-x-2 text-white/60 text-sm"
            whileHover={{ scale: 1.05 }}
          >
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-400 fill-current" />
            </motion.div>
            <span>for music creators</span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;