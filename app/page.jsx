export default function HomePage() {
  return (
    <section className="space-y-16">
      {/* Artists Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-blue-400">
          Featured Artists
        </h2>
        <ul className="space-y-2 text-gray-300">
          <li>🎵 Afro-Lofi World</li>
          <li>🎤 Pink Lofi Girl</li>
          <li>🎧 KIMOhLA</li>
        </ul>
      </div>

      {/* Ongoing Projects */}
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-blue-400">
          Ongoing Projects
        </h2>
        <ul className="space-y-2 text-gray-300">
          <li>
            💡 <strong>PlaylistCheckAI.com</strong> — A music-tech project by
            AudaCT Studios, blending AI and creativity.
          </li>
          <li>
            🎶 <strong>DILIGENCE</strong> — an upcoming release by KIMOhLA,
            merging soulful melodies with future-inspired soundscapes.
          </li>
        </ul>
      </div>
    </section>
  );
}

