import type { Metadata } from 'next'
import Link from 'next/link'
import { getDictionary, locales } from '@/lib/i18n'
import { getBlogPosts } from '@/lib/blog'
import { SITE_URL } from '@/lib/constants'
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
    title: dict.blog?.title ?? 'Blog',
    description: dict.blog?.meta_description ?? dict.meta.description,
    alternates: {
      canonical: `${SITE_URL}/${lang}/blog`,
      languages: {
        en: `${SITE_URL}/en/blog`,
        fr: `${SITE_URL}/fr/blog`,
      },
    },
  }
}

export default async function BlogIndexPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dict = getDictionary(lang)
  const posts = getBlogPosts(lang)

  return (
    <>
      <Header lang={lang} dict={dict} />
      <main id="main" className="pt-24 pb-16 px-6">
        <div className="max-w-2xl mx-auto">
          <Link
            href={`/${lang}`}
            className="inline-flex items-center gap-1 text-secondary hover:text-white text-sm mb-10 transition-colors"
          >
            ← {dict.blog?.back ?? 'Back'}
          </Link>

          <h1 className="text-4xl md:text-5xl font-black text-white mb-3">
            {dict.blog?.title ?? 'Blog'}
          </h1>
          <p className="text-secondary text-lg mb-12">
            {dict.blog?.subtitle ?? 'Tips, rules, and ideas for your next party.'}
          </p>

          <div className="space-y-8">
            {posts.length === 0 ? (
              <p className="text-muted">{dict.blog?.empty ?? 'No articles yet.'}</p>
            ) : (
              posts.map((post) => (
                <article key={post.slug}>
                  <Link
                    href={`/${lang}/blog/${post.slug}`}
                    className="block group"
                  >
                    <h2 className="text-xl font-bold text-white group-hover:text-primary transition-colors mb-1">
                      {post.title}
                    </h2>
                    <p className="text-secondary text-sm mb-2">{post.description}</p>
                    <time
                      dateTime={post.publishedAt}
                      className="text-muted text-xs"
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
                  </Link>
                </article>
              ))
            )}
          </div>
        </div>
      </main>
      <Footer lang={lang} dict={dict} />
    </>
  )
}
