import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/constants'
import { locales } from '@/lib/i18n'
import { getAllBlogSlugs } from '@/lib/blog'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogSlugs = await getAllBlogSlugs()

  const blogEntries: MetadataRoute.Sitemap = []
  for (const lang of locales) {
    for (const slug of blogSlugs) {
      blogEntries.push({
        url: `${SITE_URL}/${lang}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      })
    }
  }

  const staticEntries: MetadataRoute.Sitemap = [
    ...locales.flatMap((lang) => [
      {
        url: `${SITE_URL}/${lang}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 1,
      },
      {
        url: `${SITE_URL}/${lang}/privacy`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.5,
      },
      {
        url: `${SITE_URL}/${lang}/blog`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      },
    ]),
  ]

  return [...staticEntries, ...blogEntries]
}
