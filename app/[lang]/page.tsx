import type { Metadata } from 'next'
import { getDictionary, locales, type Locale } from '@/lib/i18n'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Games from '@/components/Games'
import Features from '@/components/Features'
import DownloadCTA from '@/components/DownloadCTA'
import Footer from '@/components/Footer'

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  const dict = getDictionary(lang)
  return {
    title: `Partiz — ${dict.meta.title}`,
    description: dict.meta.description,
    alternates: {
      languages: {
        en: '/en',
        fr: '/fr',
      },
    },
  }
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dict = getDictionary(lang)

  return (
    <>
      <Header lang={lang} dict={dict} />
      <main>
        <Hero dict={dict} />
        <Games dict={dict} />
        <Features dict={dict} />
        <DownloadCTA dict={dict} />
      </main>
      <Footer lang={lang} dict={dict} />
    </>
  )
}
