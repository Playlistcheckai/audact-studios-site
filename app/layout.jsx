import "./globals.css";

export const metadata = {
  title: "AudaCT Studios",
  description: "Music, entertainment, production & tech by AudaCT Studios.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen font-sans">
        {children}
      </body>
    </html>
  );
}
