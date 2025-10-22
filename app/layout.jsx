import "./globals.css";

export const metadata = {
  title: "AudaCT Studios",
  description: "Music. Entertainment. Technology. Creativity in motion.",
  keywords: ["AudaCT Studios", "Afro-Lofi", "Music", "Entertainment", "Tech"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="bg-black text-white min-h-screen flex flex-col items-center justify-center text-center">
        <header className="w-full py-6 flex flex-col items-center">
          <img
            src="/logo.png"
            alt="AudaCT Studios Logo"
            className="w-20 h-20 mb-4 object-contain"
          />
          <h1 className="text-3xl font-bold tracking-wide">🎧 AudaCT Studios</h1>
          <p className="text-gray-400 mt-2">
            Music. Entertainment. Technology. Creativity in motion.
          </p>
        </header>

        <main className="flex-1 w-full">{children}</main>

        <footer className="text-sm text-gray-600 py-6">
          © {new Date().getFullYear()} AudaCT Studios. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
