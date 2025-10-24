export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      {/* Logo */}
      <img
        src="/logo.jpg"
        alt="AudaCT Studios Logo"
        className="w-24 h-auto mb-4 rounded-xl"
      />

      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
        🎧 AudaCT Studios
      </h1>
      <p className="text-lg md:text-xl text-gray-300 text-center max-w-2xl mb-12">
        Music. Entertainment. Technology. Creativity in motion.
      </p>

      {/* Artists Section */}
      <section className="text-center mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-yellow-400">
          Our Artists
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
          <div className="p-4 border border-gray-700 rounded-xl hover:bg-gray-900 transition">
            <h3 className="text-xl font-bold mb-2">Afro-Lofi World</h3>
            <p className="text-gray-400">
              Innovative sound and artistry redefining music and culture.
            </p>
          </div>

          <div className="p-4 border border-gray-700 rounded-xl hover:bg-gray-900 transition">
            <h3 className="text-xl font-bold mb-2">Pink Lofi Girl</h3>
            <p className="text-gray-400">
              Innovative sound and artistry redefining music and culture.
            </p>
          </div>

          <div className="p-4 border border-gray-700 rounded-xl hover:bg-gray-900 transition">
            <h3 className="text-xl font-bold mb-2">KIMOhLA</h3>
            <p className="text-gray-400">
              Innovative sound and artistry redefining music and culture.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="text-center mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-yellow-400">
          Ongoing Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          <div className="p-4 border border-gray-700 rounded-xl hover:bg-gray-900 transition">
            <h3 className="text-xl font-bold mb-2">
              Reflections in Blue by Afro-Lofi World
            </h3>
            <p className="text-gray-400">
              A chill Afro-Lofi album blending jazz textures and world rhythms.
            </p>
          </div>

          <div className="p-4 border border-gray-700 rounded-xl hover:bg-gray-900 transition">
            <h3 className="text-xl font-bold mb-2">PlaylistcheckAI.com</h3>
            <p className="text-gray-400">
              A tech product by AudaCT Studios shaping the future of music and
              creativity.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
