'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center py-4 max-w-6xl">
        <div className="flex items-center gap-3">
          {/* Logo Image */}
          <Image
            src="/logo.png"
            alt="AudaCT Studios Logo"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <h1 className="text-xl font-bold tracking-wide">AudaCT Studios</h1>
        </div>

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

      {/* Mobile Menu */}
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

      {/* Footer */}
      <footer className="py-10 text-gray-500 text-sm">
        © {new Date().getFullYear()} AudaCT Studios. All rights reserved.
      </footer>
    </main>
  );
}
