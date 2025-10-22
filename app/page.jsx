'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Music, Cpu, Users, PlayCircle, Moon, Sun } from 'lucide-react';

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => setDarkMode(!darkMode);

  const features = [
    {
      icon: <Music size={28} />,
      title: 'Music Production',
      description: 'High-quality audio creation, mixing, mastering, and original sound design for modern artists.',
    },
    {
      icon: <Cpu size={28} />,
      title: 'Tech & Innovation',
      description: 'Cutting-edge AI and digital solutions for entertainment and media production.',
    },
    {
      icon: <Users size={28} />,
      title: 'Artists & Projects',
      description: 'Showcasing creative collaborations, artist showcases, and live experiences.',
    },
  ];

  return (
    <div className={`${darkMode ? 'bg-black text-white' : 'bg-white text-black'} min-h-screen transition-colors duration-500`}>
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-gray-800">
        <h1 className="text-2xl font-bold">🎧 AudaCT Studios</h1>
        <div className="flex items-center gap-6">
          <a href="#projects" className="hover:text-gray-400 transition">Projects</a>
          <a href="#artists" className="hover:text-gray-400 transition">Artists</a>
          <a href="#contact" className="hover:text-gray-400 transition">Contact</a>
          <button onClick={toggleTheme} className="p-2 border rounded-full border-gray-700 hover:bg-gray-800 transition">
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-28 px-6">
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Music. Entertainment. Technology.
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          AudaCT Studios blends creativity and innovation — where sound meets technology.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold flex items-center gap-2 mx-auto"
        >
          <PlayCircle size={20} /> Explore Projects
        </motion.button>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-10 px-10 py-16 bg-gradient-to-b from-gray-900 to-black" id="features">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            className="p-6 border border-gray-800 rounded-2xl bg-gray-950 hover:bg-gray-900 transition"
            whileHover={{ scale: 1.05 }}
          >
            <div className="mb-4 text-blue-500">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </motion.div>
        ))}
      </section>

      {/* Artists Section */}
      <section className="py-20 text-center" id="artists">
        <h2 className="text-4xl font-bold mb-8">Our Artists</h2>
        <div className="grid md:grid-cols-3 gap-10 px-10">
          {['Afro-Lofi World', 'Echo Nova', 'BlueMind'].map((artist, i) => (
            <motion.div
              key={i}
              className="p-6 border border-gray-800 rounded-2xl bg-gray-950 hover:bg-gray-900 transition"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold mb-2">{artist}</h3>
              <p className="text-gray-400">Innovative sound and artistry redefining music and culture.</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 text-center bg-gray-950" id="projects">
        <h2 className="text-4xl font-bold mb-8">Ongoing Projects</h2>
        <div className="grid md:grid-cols-2 gap-10 px-10">
          <motion.div whileHover={{ scale: 1.03 }} className="p-6 rounded-2xl border border-gray-800 bg-black">
            <h3 className="text-2xl font-semibold mb-2">Reflections in Blue</h3>
            <p className="text-gray-400 mb-3">A chill Afro-Lofi album blending jazz textures and world rhythms.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} className="p-6 rounded-2xl border border-gray-800 bg-black">
            <h3 className="text-2xl font-semibold mb-2">SoundTech Vision</h3>
            <p className="text-gray-400 mb-3">Experimental AI-driven sound design project shaping the future of audio.</p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-10 text-center border-t border-gray-800 text-gray-400">
        <p>© {new Date().getFullYear()} AudaCT Studios — Creativity in Motion.</p>
      </footer>
    </div>
  );
}
