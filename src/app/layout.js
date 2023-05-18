import './globals.css'
import { Inter } from 'next/font/google'
import { Footer, Navbar } from './components'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Project Agaue',
  description: 'A storefront that utilizes various frameworks and APIs.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar />
        {children}
      <Footer />
        </body>
    </html>
  )
}
