export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center text-center px-6 py-10">
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Our Artists</h2>
        <ul className="space-y-2 text-gray-300">
          <li>KIMOhLA</li>
          <li>Afro-Lofi World</li>
          <li>Pink Lofi Girl</li>
          <li>Purple Lofi Boy</li>
        </ul>
      </section>

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
            <span className="font-medium">Reflections in Blue</span> – by Afro-Lofi
            World
          </li>
        </ul>
      </section>
    </main>
  );
}
