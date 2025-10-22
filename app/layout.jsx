import "../globals.css";

export const metadata = {
  title: "AudaCT Studios",
  description: "Music, Entertainment, and Tech Powerhouse.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
