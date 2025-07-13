import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Download, Wand2, Loader2, Volume2, Settings } from 'lucide-react';

const MusicGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [generatedAudio, setGeneratedAudio] = useState<string | null>(null);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [settings, setSettings] = useState({
    duration: 10,
    style: 'electronic',
    tempo: 'medium',
    mood: 'upbeat'
  });

  const examplePrompts = [
    "Peaceful piano melody with rain sounds",
    "Energetic electronic dance music",
    "Acoustic guitar with birds chirping",
    "Ambient space music with synthesizers",
    "Jazz saxophone in a smoky club",
    "Classical violin concerto",
    "Lo-fi hip hop beats for studying",
    "Epic orchestral movie soundtrack"
  ];

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Mock generated audio URL
    setGeneratedAudio('https://www.soundjay.com/misc/sounds/bell-ringing-05.wav');
    setIsGenerating(false);
  };

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="generator" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              AI Music Generator
            </span>
          </h2>
          <p className="text-xl text-white/80">
            Describe the music you want to create and let AI bring it to life
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="card mb-8"
        >
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">
                Describe your music
              </label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g., Relaxing piano music with gentle rain sounds..."
                className="input-field h-32 resize-none"
                disabled={isGenerating}
              />
            </div>

            {/* Example Prompts */}
            <div>
              <p className="text-sm text-white/60 mb-3">Try these examples:</p>
              <div className="flex flex-wrap gap-2">
                {examplePrompts.slice(0, 4).map((example, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setPrompt(example)}
                    className="text-xs px-3 py-1 glass rounded-full hover:bg-white/20 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {example}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Advanced Settings */}
            <div>
              <motion.button
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                <Settings className="w-4 h-4" />
                <span>Advanced Settings</span>
              </motion.button>

              <AnimatePresence>
                {showAdvanced && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4"
                  >
                    <div>
                      <label className="block text-xs text-white/60 mb-1">Duration</label>
                      <select 
                        value={settings.duration}
                        onChange={(e) => setSettings({...settings, duration: Number(e.target.value)})}
                        className="input-field text-sm py-2"
                      >
                        <option value={5}>5 seconds</option>
                        <option value={10}>10 seconds</option>
                        <option value={15}>15 seconds</option>
                        <option value={30}>30 seconds</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs text-white/60 mb-1">Style</label>
                      <select 
                        value={settings.style}
                        onChange={(e) => setSettings({...settings, style: e.target.value})}
                        className="input-field text-sm py-2"
                      >
                        <option value="electronic">Electronic</option>
                        <option value="acoustic">Acoustic</option>
                        <option value="classical">Classical</option>
                        <option value="jazz">Jazz</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs text-white/60 mb-1">Tempo</label>
                      <select 
                        value={settings.tempo}
                        onChange={(e) => setSettings({...settings, tempo: e.target.value})}
                        className="input-field text-sm py-2"
                      >
                        <option value="slow">Slow</option>
                        <option value="medium">Medium</option>
                        <option value="fast">Fast</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs text-white/60 mb-1">Mood</label>
                      <select 
                        value={settings.mood}
                        onChange={(e) => setSettings({...settings, mood: e.target.value})}
                        className="input-field text-sm py-2"
                      >
                        <option value="upbeat">Upbeat</option>
                        <option value="calm">Calm</option>
                        <option value="dramatic">Dramatic</option>
                        <option value="mysterious">Mysterious</option>
                      </select>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Generate Button */}
            <motion.button
              onClick={handleGenerate}
              disabled={!prompt.trim() || isGenerating}
              className="btn-primary w-full flex items-center justify-center space-x-2 text-lg py-4"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Generating Music...</span>
                </>
              ) : (
                <>
                  <Wand2 className="w-5 h-5" />
                  <span>Generate Music</span>
                </>
              )}
            </motion.button>
          </div>
        </motion.div>

        {/* Generated Audio Player */}
        <AnimatePresence>
          {(generatedAudio || isGenerating) && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.9 }}
              className="card"
            >
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {isGenerating ? 'Creating your music...' : 'Your Generated Music'}
                </h3>

                {isGenerating ? (
                  <div className="flex items-center justify-center space-x-2 py-8">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-2 h-8 bg-gradient-to-t from-primary-500 to-accent-500 rounded-full"
                          animate={{
                            height: [32, 64, 32],
                            opacity: [0.5, 1, 0.5]
                          }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            delay: i * 0.1
                          }}
                        />
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {/* Waveform Visualization */}
                    <div className="flex items-center justify-center space-x-1 py-4">
                      {[...Array(40)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-1 bg-gradient-to-t from-primary-500 to-accent-500 rounded-full"
                          style={{ height: Math.random() * 40 + 10 }}
                          animate={isPlaying ? {
                            height: [
                              Math.random() * 40 + 10,
                              Math.random() * 60 + 20,
                              Math.random() * 40 + 10
                            ]
                          } : {}}
                          transition={{
                            duration: 0.5,
                            repeat: isPlaying ? Infinity : 0,
                            delay: i * 0.02
                          }}
                        />
                      ))}
                    </div>

                    {/* Controls */}
                    <div className="flex items-center justify-center space-x-4">
                      <motion.button
                        onClick={togglePlayback}
                        className="btn-primary flex items-center space-x-2 px-6 py-3"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                        <span>{isPlaying ? 'Pause' : 'Play'}</span>
                      </motion.button>

                      <motion.button
                        className="btn-secondary flex items-center space-x-2 px-4 py-3"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Download className="w-4 h-4" />
                        <span>Download</span>
                      </motion.button>

                      <motion.button
                        className="btn-secondary flex items-center space-x-2 px-4 py-3"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Volume2 className="w-4 h-4" />
                        <span>Share</span>
                      </motion.button>
                    </div>

                    <p className="text-sm text-white/60">
                      Prompt: "{prompt}"
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MusicGenerator;