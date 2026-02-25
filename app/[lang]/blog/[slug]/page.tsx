import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import { getDictionary, locales } from '@/lib/i18n'
import { getBlogPost, getBlogPosts, getAllBlogSlugs } from '@/lib/blog'
import { SITE_URL } from '@/lib/constants'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export function generateStaticParams() {
  const slugs = getAllBlogSlugs()
  return locales.flatMap((lang) => slugs.map((slug) => ({ lang, slug })))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>
}): Promise<Metadata> {
  const { lang, slug } = await params
  const post = getBlogPost(lang, slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${SITE_URL}/${lang}/blog/${slug}`,
      type: 'article',
      publishedTime: post.publishedAt,
      images: [
        {
          url: '/opengraph-image.png',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      title: post.title,
      description: post.description,
      images: ['/opengraph-image.png'],
    },
    alternates: {
      canonical: `${SITE_URL}/${lang}/blog/${slug}`,
      languages: {
        en: `${SITE_URL}/en/blog/${slug}`,
        fr: `${SITE_URL}/fr/blog/${slug}`,
      },
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>
}) {
  const { lang, slug } = await params
  const dict = getDictionary(lang)
  const post = getBlogPost(lang, slug)

  if (!post) notFound()

  const allPosts = getBlogPosts(lang)
  const relatedPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 2)

  const blogPostingLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    url: `${SITE_URL}/${lang}/blog/${slug}`,
    author: { '@type': 'Organization', name: 'Partiz', url: SITE_URL },
    publisher: { '@type': 'Organization', name: 'Partiz', url: SITE_URL },
    image: `${SITE_URL}/opengraph-image.png`,
    inLanguage: lang === 'fr' ? 'fr-FR' : 'en-US',
  }

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Partiz', item: `${SITE_URL}/${lang}` },
      { '@type': 'ListItem', position: 2, name: lang === 'fr' ? 'Blog' : 'Blog', item: `${SITE_URL}/${lang}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${SITE_URL}/${lang}/blog/${slug}` },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <Header lang={lang} dict={dict} />
      <main id="main" className="pt-24 pb-16 px-6">
        <article className="max-w-2xl mx-auto">
          <Link
            href={`/${lang}/blog`}
            className="inline-flex items-center gap-1 text-secondary hover:text-white text-sm mb-10 transition-colors"
          >
            ← {dict.blog?.back ?? 'Back'}
          </Link>

          <header className="mb-10">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-3">
              {post.title}
            </h1>
            <div className="flex items-center gap-3 text-muted text-sm">
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString(
                  lang === 'fr' ? 'fr-FR' : 'en-US',
                  {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  }
                )}
              </time>
              <span aria-hidden="true">·</span>
              <span>
                {post.readingTime} {lang === 'fr' ? 'min de lecture' : 'min read'}
              </span>
            </div>
          </header>

          <div className="prose prose-invert prose-p:text-secondary prose-headings:text-white prose-strong:text-white prose-a:text-primary max-w-none">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>

          {relatedPosts.length > 0 && (
            <aside className="mt-16 pt-10 border-t border-white/10">
              <h2 className="text-lg font-bold text-white mb-6">
                {lang === 'fr' ? 'Continuer à lire' : 'Keep reading'}
              </h2>
              <div className="space-y-6">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/${lang}/blog/${related.slug}`}
                    className="block group"
                  >
                    <h3 className="text-base font-bold text-white group-hover:text-primary transition-colors mb-1">
                      {related.title}
                    </h3>
                    <p className="text-secondary text-sm">{related.description}</p>
                  </Link>
                ))}
              </div>
            </aside>
          )}
        </article>
      </main>
      <Footer lang={lang} dict={dict} />
    </>
  )
}
