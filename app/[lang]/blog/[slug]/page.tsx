import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import { getDictionary, locales } from '@/lib/i18n'
import { getBlogPost, getAllBlogSlugs } from '@/lib/blog'
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
    },
    twitter: {
      title: post.title,
      description: post.description,
    },
    alternates: {
      canonical: `${SITE_URL}/${lang}/blog/${slug}`,
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

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    url: `${SITE_URL}/${lang}/blog/${slug}`,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
            <time
              dateTime={post.publishedAt}
              className="text-muted text-sm"
            >
              {new Date(post.publishedAt).toLocaleDateString(
                lang === 'fr' ? 'fr-FR' : 'en-US',
                {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                }
              )}
            </time>
          </header>

          <div className="prose prose-invert prose-p:text-secondary prose-headings:text-white prose-strong:text-white prose-a:text-primary max-w-none">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </article>
      </main>
      <Footer lang={lang} dict={dict} />
    </>
  )
}
