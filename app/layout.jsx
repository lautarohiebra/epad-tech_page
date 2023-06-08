import Navbar from '@/components/homePage/Navbar'
import { Inter } from 'next/font/google'
import Footer from '@/components/homePage/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ep@d Technology',
  description: 'Asesoría y provisión para fabricante electrónico',
  icons: {
    icon:'imgs/favicon.svg',
    shortcut:'imgs/favicon.svg',
    apple:'imgs/favicon.svg',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" data-theme="corporate">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
