import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { headers } from 'next/headers'
import './globals.css'
import { SITE_URL, APP_STORE_ID } from '@/lib/constants'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Partiz — Party Games with Friends',
    template: '%s | Partiz',
  },
  description: '6 wild party games. Any number of players. Zero WiFi needed.',
  applicationName: 'Partiz',
  authors: [{ name: 'Partiz', url: SITE_URL }],
  creator: 'Partiz',
  category: 'Games',
  keywords: [
    'party games',
    'truth or dare',
    'never have i ever',
    'would you rather',
    'party game app',
    'games with friends',
    'no wifi games',
    'offline party games',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'fr_FR',
    siteName: 'Partiz',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Partiz — Party Games with Friends',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/opengraph-image.png'],
  },
  alternates: {
    canonical: SITE_URL,
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const headersList = await headers()
  const locale = headersList.get('x-locale') || 'en'
  const lang = locale === 'fr' ? 'fr' : 'en'

  return (
    <html lang={lang}>
      <head>
        <meta name="apple-itunes-app" content={`app-id=${APP_STORE_ID}`} />
      </head>
      <body className={`${inter.variable} font-sans bg-background`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-background focus:rounded-lg focus:outline-none"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}
