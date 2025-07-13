import React from 'react';
import { motion } from 'framer-motion';
import { Music, Music2, Music3, Music4 } from 'lucide-react';

const FloatingNotes: React.FC = () => {
  const musicIcons = [Music, Music2, Music3, Music4];
  
  const notes = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    Icon: musicIcons[i % musicIcons.length],
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 20 + 20,
    duration: Math.random() * 10 + 15,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {notes.map((note) => (
        <motion.div
          key={note.id}
          className="absolute text-white/10"
          style={{
            left: `${note.x}%`,
            top: `${note.y}%`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, Math.random() * 20 - 10, 0],
            rotate: [0, 360],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: note.duration,
            repeat: Infinity,
            delay: note.delay,
            ease: "easeInOut",
          }}
        >
          <note.Icon size={note.size} />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingNotes;