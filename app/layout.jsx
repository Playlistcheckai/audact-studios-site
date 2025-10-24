import "./globals.css";

export const metadata = {
  title: "AudaCT Studios",
  description: "Music. Entertainment. Technology. Creativity in motion.",
  icons: {
    icon: "/favicon.png", // ✅ Use your PNG favicon here
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
