export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center text-center p-8">
      <h1 className="text-4xl font-bold mb-4">🎧 AudaCT Studios</h1>
      <p className="text-lg text-gray-400">
        Music. Entertainment. Technology. Creativity in motion.
      </p>

      {/* Artists Section */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-4">Our Artists</h2>
        <ul className="space-y-2 text-gray-300">
          <li>KIMOhLA</li>
          <li>Afro-Lofi World</li>
          <li>Pink Lofi Girl</li>
          <li>Purple Lofi Boy</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <ul className="space-y-2 text-gray-300">
          <li>
            <a
              href="https://playlistcheckai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white underline"
            >
              PlaylistCheckAI.com
            </a>{" "}
            – Tech Product
          </li>
          <li>
            <span className="font-medium">Reflections in Blue</span> – by Afro-Lofi World
          </li>
        </ul>
      </section>
    </main>
  );
}
