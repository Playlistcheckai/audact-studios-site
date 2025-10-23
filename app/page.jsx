export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <section className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">🎧 AudaCT Studios</h1>
        <p className="text-lg text-gray-400">
          Music. Entertainment. Technology. Creativity in motion.
        </p>
      </section>

      <section className="max-w-3xl w-full mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-center">Featured Artists</h2>
        <ul className="space-y-2 text-center text-gray-300">
          <li>🎵 <strong>Afro-Lofi World</strong> — soulful lo-fi vibes and global chill rhythms.</li>
          <li>🌙 <strong>Pink Lofi Girl</strong> — dreamy, ambient tones for reflective moments.</li>
          <li>🔥 <strong>KIMOhLA</strong> — experimental energy, Afro-electronic essence, and raw emotion.</li>
        </ul>
      </section>

      <section className="max-w-3xl w-full">
        <h2 className="text-3xl font-semibold mb-4 text-center">Ongoing Projects</h2>
        <ul className="space-y-2 text-center text-gray-300">
          <li>🧠 <strong><a href="https://playlistcheckai.com" target="_blank" className="text-blue-400 underline">PlaylistCheckAI.com</a></strong> — a music-tech platform by AudaCT Studios.</li>
          <li>💿 <strong>DILIGENCE</strong> by KIMOhLA — an evolving soundscape of focus, resilience, and rhythm.</li>
        </ul>
      </section>

      <footer className="mt-16 text-sm text-gray-500">
        © {new Date().getFullYear()} AudaCT Studios — All Rights Reserved.
      </footer>
    </main>
  );
}
