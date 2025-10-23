import "./globals.css";

export const metadata = {
  title: "AudaCT Studios",
  description: "Music. Entertainment. Technology. Creativity in motion.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-sans">
        <header className="p-6 text-center border-b border-gray-800">
          <h1 className="text-3xl font-bold">🎧 AudaCT Studios</h1>
          <p className="text-sm text-gray-400">
            Music • Entertainment • Technology
          </p>
        </header>
        <main className="max-w-4xl mx-auto p-6">{children}</main>
        <footer className="text-center py-8 border-t border-gray-800 text-gray-500 text-sm">
          © {new Date().getFullYear()} AudaCT Studios. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
