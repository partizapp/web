import type { Metadata } from 'next'
import Link from 'next/link'
import { getDictionary, locales } from '@/lib/i18n'
import Header from '@/components/Header'
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
    title: `${dict.privacy.title} — Partiz`,
    description: dict.meta.description,
  }
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dict = getDictionary(lang)
  const p = dict.privacy

  return (
    <>
      <Header lang={lang} dict={dict} />

      <main className="pt-24 pb-16 px-6">
        <div className="max-w-2xl mx-auto">
          {/* Back link */}
          <Link
            href={`/${lang}`}
            className="inline-flex items-center gap-1 text-secondary hover:text-white text-sm mb-10 transition-colors"
          >
            {p.back}
          </Link>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-black text-white mb-3">{p.title}</h1>
          <p className="text-muted text-sm mb-10">{p.last_updated}</p>

          {/* Intro */}
          <p className="text-secondary leading-relaxed mb-10">{p.intro}</p>

          {/* Divider */}
          <div
            className="h-px mb-10"
            style={{
              background:
                'linear-gradient(90deg, transparent, rgba(233,30,140,0.3), transparent)',
            }}
          />

          {/* Sections */}
          <div className="space-y-8">
            {p.sections.map((section, i) => (
              <div key={i}>
                <h2 className="text-lg font-black text-white mb-2">{section.title}</h2>
                <p className="text-secondary leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer lang={lang} dict={dict} />
    </>
  )
}
