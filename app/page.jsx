"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-10 space-y-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center tracking-tight">
          🎧 AudaCT Studios
        </h1>
        <p className="text-lg md:text-xl text-gray-300 text-center max-w-2xl mx-auto">
          Music. Entertainment. Technology. Creativity in motion.
        </p>
      </motion.div>

      {/* Artists Section */}
      <motion.section
        className="text-center w-full fade-in"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold mb-6 text-yellow-400">
          Our Artists
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Afro-Lofi World */}
          <motion.a
            href="https://open.spotify.com/artist/your-afro-lofi-world-link"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            className="p-5 border border-gray-700 rounded-xl bg-gray-950/40 card-hover block"
          >
            <h3 className="text-xl font-bold mb-2">Afro-Lofi World</h3>
            <p className="text-gray-400">
              A sonic explorer weaving Afrobeat rhythms, jazz textures, and lo-fi atmospheres
              to create immersive world-inspired soundscapes.
            </p>
          </motion.a>

          {/* Pink Lofi Girl */}
          <motion.a
            href="https://open.spotify.com/artist/your-pink-lofi-girl-link"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            className="p-5 border border-gray-700 rounded-xl bg-gray-950/40 card-hover block"
          >
            <h3 className="text-xl font-bold mb-2">Pink Lofi Girl</h3>
            <p className="text-gray-400">
              A dreamy, chillwave lo-fi curator known for soft melodies, pastel tones, and
              soundtracks for introspection and calm.
            </p>
          </motion.a>

          {/* KIMOhLA */}
          <motion.a
            href="https://open.spotify.com/artist/your-kimohla-link"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            className="p-5 border border-gray-700 rounded-xl bg-gray-950/40 card-hover block"
          >
            <h3 className="text-xl font-bold mb-2">KIMOhLA</h3>
            <p className="text-gray-400">
              A bold, experimental artist merging Afropop, ambient, and electronic elements
              to push the boundaries of modern lo-fi.
            </p>
          </motion.a>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        className="text-center w-full fade-in"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold mb-6 text-yellow-400">
          Ongoing Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Reflections in Blue */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="p-5 border border-gray-700 rounded-xl bg-gray-950/40 card-hover"
          >
            <h3 className="text-xl font-bold mb-2">
              Reflections in Blue by Afro-Lofi World
            </h3>
            <p className="text-gray-400">
              A chill Afro-Lofi album blending jazz textures and world rhythms.
            </p>
          </motion.div>

          {/* PlaylistcheckAI.com */}
          <motion.a
            href="https://playlistcheckai.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            className="p-5 border border-gray-700 rounded-xl bg-gray-950/40 card-hover block"
          >
            <h3 className="text-xl font-bold mb-2">PlaylistcheckAI.com</h3>
            <p className="text-gray-400">
              A tech product by AudaCT Studios shaping the future of music and creativity.
            </p>
          </motion.a>
        </div>
      </motion.section>
    </main>
  );
}
