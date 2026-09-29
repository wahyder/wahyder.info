import './globals.css'

export const metadata = {
  title: 'Wahyder - Portfolio',
  description: 'Personal portfolio of Wahyder',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
