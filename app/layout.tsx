import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Partiz — Party Games with Friends',
  description:
    '5 wild party games. Any number of players. Zero WiFi needed. Free to download.',
  icons: {
    icon: '/favicon.png',
    apple: '/icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className={`${inter.variable} font-sans bg-background`}>
        {children}
      </body>
    </html>
  )
}
