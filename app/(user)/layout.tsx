import Header from '@/components/Header'
import Banner from '@/components/Banner'
import '../globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PixelPen',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-7xl mx-auto`}>
        <Header />
        <Banner />

        {children}
      </body>
    </html>
  )
}
