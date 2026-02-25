import type { Dictionary } from '@/i18n/en'
import { SITE_URL } from '@/lib/constants'

interface Props {
  dict: Dictionary
  lang: string
}

export default function Faq({ dict, lang }: Props) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: dict.faq.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }

  return (
    <section aria-labelledby="faq-heading" className="py-20 px-6 border-t border-white/5">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-2xl mx-auto">
        <h2
          id="faq-heading"
          className="text-3xl md:text-4xl font-black text-white mb-10"
        >
          {dict.faq.title}
        </h2>
        <dl className="space-y-8">
          {dict.faq.items.map((item, i) => (
            <div key={i}>
              <dt className="text-white font-bold mb-2">{item.q}</dt>
              <dd className="text-secondary leading-relaxed">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
