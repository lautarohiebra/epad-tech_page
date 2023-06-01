import Navbar from '@/components/homePage/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/homePage/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ep@d Technology',
  description: 'Asesoría y provisión para fabricante electrónico',
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
