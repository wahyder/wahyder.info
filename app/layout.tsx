import './globals.css'
import { Archivo } from 'next/font/google'

const archivo = Archivo({ subsets: ['latin'], weight: ['400', '600', '800'], display: 'swap', variable: '--font-archivo' })

export const metadata = {
  title: 'Waheed Ahmed Hyder - Portfolio',
  description: 'Technical Lead Manager with 18+ years building scalable web and enterprise applications.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={archivo.variable}>
      <body>{children}</body>
    </html>
  )
}
