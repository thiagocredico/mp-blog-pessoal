import Navbar from '@/components/navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blog Pessoal MDX',
  description: 'Blog to talk about tech stuff',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} p-8 max-w-sm sm:max-w-2xl bg-gray-50 mx-auto`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
