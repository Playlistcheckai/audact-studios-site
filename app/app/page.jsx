"use client";

import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white dark:bg-white dark:text-black transition-colors duration-500">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-4"
      >
        AudaCT Studios
      </motion.h1>

      <p className="text-lg opacity-80 mb-8 text-center max-w-md">
        Where music, technology, and creative energy merge.  
        Discover artists, projects, and experiences by AudaCT Studios.
      </p>

      <button
        onClick={() => setDark(!dark)}
        className="flex items-center gap-2 border border-white/20 px-4 py-2 rounded-2xl hover:bg-white/10"
      >
        {dark ? <Sun size={20} /> : <Moon size={20} />}
        Toggle Theme
      </button>
    </main>
  );
}
