import type { Metadata } from 'next'
import { getDictionary, locales } from '@/lib/i18n'
import { SITE_URL } from '@/lib/constants'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import JsonLd from '@/components/JsonLd'
import Games from '@/components/Games'
import Features from '@/components/Features'
import DownloadCTA from '@/components/DownloadCTA'
import Faq from '@/components/Faq'
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
    title: dict.meta.title,
    description: dict.meta.description,
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: `${SITE_URL}/${lang}`,
      locale: lang === 'fr' ? 'fr_FR' : 'en_US',
      alternateLocale: lang === 'fr' ? 'en_US' : 'fr_FR',
    },
    twitter: {
      title: dict.meta.title,
      description: dict.meta.description,
    },
    alternates: {
      canonical: `${SITE_URL}/${lang}`,
      languages: {
        en: `${SITE_URL}/en`,
        fr: `${SITE_URL}/fr`,
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
      <JsonLd lang={lang} />
      <Header lang={lang} dict={dict} />
      <main id="main">
        <Hero dict={dict} />
        <Games dict={dict} />
        <Features dict={dict} />
        <DownloadCTA dict={dict} />
        <Faq dict={dict} lang={lang} />
      </main>
      <Footer lang={lang} dict={dict} />
    </>
  )
}
