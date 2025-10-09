import './globals.css'

export const metadata = {
  title: 'AudaCT Studios',
  description: 'Music. Entertainment. Tech.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
