export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
        🎧 AudaCT Studios
      </h1>
      <p className="text-lg md:text-xl text-gray-300 text-center max-w-2xl mb-12">
        Music. Entertainment. Technology. Creativity in motion.
      </p>

      {/* Artists Section */}
      <section className="text-center mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Our Artists</h2>
        <ul className="space-y-2">
          <li>🎵 Afro-Lofi World</li>
          <li>🎤 Pink Lofi Girl</li>
          <li>🎧 KIMOhLA</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Ongoing Projects</h2>
        <ul className="space-y-2">
          <li>
            🌐 <strong>Playlistcheckai.com</strong> — a tech product by AudaCT Studios
          </li>
          <li>
            🎶 <strong>DILIGENCE</strong> — a creative project by KIMOhLA
          </li>
        </ul>
      </section>
    </main>
  );
}
