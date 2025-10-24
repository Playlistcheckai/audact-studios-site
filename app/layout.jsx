import "./globals.css";

export const metadata = {
  title: "AudaCT Studios",
  description: "Music. Entertainment. Technology. Creativity in motion.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-sans">{children}</body>
    </html>
  );
}
