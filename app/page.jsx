'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center py-4 max-w-6xl">
        <h1 className="text-2xl font-bold tracking-wide">AudaCT Studios</h1>
        <div className="hidden md:flex gap-8 text-sm">
          <a href="#" className="hover:text-gray-400">Home</a>
          <a href="#" className="hover:text-gray-400">Artists</a>
          <a href="#" className="hover:text-gray-400">Projects</a>
          <a href="#" className="hover:text-gray-400">Contact</a>
        </div>
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="flex flex-col items-center gap-4 py-4 md:hidden">
          <a href="#" className="hover:text-gray-400">Home</a>
          <a href="#" className="hover:text-gray-400">Artists</a>
          <a href="#" className="hover:text-gray-400">Projects</a>
          <a href="#" className="hover:text-gray-400">Contact</a>
        </div>
      )}

      {/* Hero Section */}
      <motion.section
        className="flex flex-col items-center justify-center text-center py-20 max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
          🎧 AudaCT Studios
        </h2>
        <p className="text-lg text-gray-300 mb-6">
          Music. Entertainment. Technology. Creativity in motion.
        </p>
        <a
          href="#projects"
          className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          Explore Projects
        </a>
      </motion.section>

      {/* Features Section */}
      <section
        id="projects"
        className="grid md:grid-cols-3 gap-8 py-20 w-full max-w-6xl text-center"
      >
        <div className="bg-gray-900 p-8 rounded-2xl shadow-lg">
          <h3 className="text-xl font-bold mb-2">🎵 Music Production</h3>
          <p className="text-gray-400 text-sm">
            Home of genre-blending sound design and artist collaboration.
          </p>
        </div>
        <div className="bg-gray-900 p-8 rounded-2xl shadow-lg">
          <h3 className="text-xl font-bold mb-2">🎬 Entertainment</h3>
          <p className="text-gray-400 text-sm">
            From events to visuals — we craft full creative experiences.
          </p>
        </div>
        <div className="bg-gray-900 p-8 rounded-2xl shadow-lg">
          <h3 className="text-xl font-bold mb-2">💻 Tech Innovation</h3>
          <p className="text-gray-400 text-sm">
            AI-driven tools shaping the future of music and digital art.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-gray-500 text-sm">
        © {new Date().getFullYear()} AudaCT Studios. All rights reserved.
      </footer>
    </main>
  );
}
