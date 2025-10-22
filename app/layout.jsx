import './globals.css';
import Image from 'next/image';

export const metadata = {
  title: 'AudaCT Studios',
  description: 'Music. Entertainment. Technology. Creativity in motion.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
