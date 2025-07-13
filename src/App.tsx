import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import MusicGenerator from './components/MusicGenerator';
import Features from './components/Features';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <ParticleBackground />
      
      <div className="relative z-10">
        <Header />
        
        <main>
          <Hero />
          <MusicGenerator />
          <Features />
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;