import { SITE_URL, APP_STORE_URL } from '@/lib/constants'

interface Props {
  lang: string
}

export default function JsonLd({ lang }: Props) {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Partiz',
    url: SITE_URL,
    logo: `${SITE_URL}/icon.svg`,
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hello@partiz.app',
      contactType: 'customer service',
    },
  }

  const mobileApp = {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: 'Partiz',
    applicationCategory: 'GameApplication',
    operatingSystem: 'iOS',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    url: APP_STORE_URL,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mobileApp) }}
      />
    </>
  )
}
