import "./globals.css";

export const metadata = {
  title: "AudaCT Studios",
  description: "Music. Entertainment. Technology. Creativity in motion.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
