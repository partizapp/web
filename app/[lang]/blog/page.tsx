import type { Metadata } from 'next'
import Link from 'next/link'
import { getDictionary, locales } from '@/lib/i18n'
import { getBlogPosts, type BlogPost } from '@/lib/blog'
import { SITE_URL } from '@/lib/constants'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// Decorative metadata per game slug — purely visual, no SEO impact
const GAME_META: Record<string, { emoji: string; color: string; tag: string; tagFr: string }> = {
  'how-to-play-truth-or-dare':     { emoji: '🎭', color: '#f97316', tag: 'Truth or Dare',    tagFr: 'Action ou Vérité' },
  'how-to-play-never-have-i-ever': { emoji: '🙈', color: '#eab308', tag: 'Never Have I Ever', tagFr: "Je n'ai jamais" },
  'how-to-play-would-you-rather':  { emoji: '🤔', color: '#06b6d4', tag: 'Would You Rather',  tagFr: 'Tu préfères' },
  'how-to-play-most-likely-to':    { emoji: '👉', color: '#ec4899', tag: 'Most Likely To',    tagFr: 'Le Plus Probable' },
  'how-to-play-categories':        { emoji: '🎯', color: '#22c55e', tag: 'Categories',        tagFr: 'Catégories' },
  'how-to-play-impostor':          { emoji: '🕵️', color: '#ef4444', tag: 'Impostor',         tagFr: 'Imposteur' },
}
const DEFAULT_META = { emoji: '🎉', color: '#e91e8c', tag: 'Party Games', tagFr: 'Jeux de soirée' }

function PostCard({ post, lang }: { post: Omit<BlogPost, 'content'>; lang: string }) {
  const game = GAME_META[post.slug] ?? DEFAULT_META
  const gameTag = lang === 'fr' ? game.tagFr : game.tag

  return (
    <article className="group relative rounded-2xl border border-white/8 bg-surface/40 hover:bg-surface/60 hover:border-white/15 transition-all duration-300 overflow-hidden">
      {/* Colored top accent strip */}
      <div className="h-[3px]" style={{ background: `linear-gradient(90deg, ${game.color}, ${game.color}55)` }} />

      {/* Subtle inner glow matching the game color */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
        style={{ background: `radial-gradient(ellipse 80% 50% at 0% 0%, ${game.color}0d 0%, transparent 60%)` }}
      />

      <Link href={`/${lang}/blog/${post.slug}`} className="block p-6 relative">
        {/* Game badge + arrow row */}
        <div className="flex items-center justify-between mb-4">
          <span
            className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full"
            style={{ background: `${game.color}18`, color: game.color, border: `1px solid ${game.color}35` }}
          >
            <span aria-hidden="true">{game.emoji}</span>
            {gameTag}
          </span>
          <span
            className="text-muted group-hover:text-white group-hover:translate-x-1 transition-all duration-200 text-sm"
            aria-hidden="true"
          >
            →
          </span>
        </div>

        {/* Title */}
        <h2 className="text-lg font-bold text-white group-hover:text-primary-light transition-colors duration-200 mb-2 leading-snug">
          {post.title}
        </h2>

        {/* Description */}
        <p className="text-secondary text-sm leading-relaxed mb-4">{post.description}</p>

        {/* Meta */}
        <div className="flex items-center gap-3 text-muted text-xs">
          <time dateTime={post.publishedAt}>
            {new Date(post.publishedAt).toLocaleDateString(
              lang === 'fr' ? 'fr-FR' : 'en-US',
              { year: 'numeric', month: 'long', day: 'numeric' }
            )}
          </time>
          <span aria-hidden="true">·</span>
          <span>{post.readingTime} {lang === 'fr' ? 'min de lecture' : 'min read'}</span>
        </div>
      </Link>
    </article>
  )
}

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
          <p className="text-secondary text-lg mb-10">
            {dict.blog?.subtitle ?? 'Tips, rules, and ideas for your next party.'}
          </p>

          <div className="flex flex-col gap-4">
            {posts.length === 0 ? (
              <p className="text-muted">{dict.blog?.empty ?? 'No articles yet.'}</p>
            ) : (
              posts.map((post) => (
                <PostCard key={post.slug} post={post} lang={lang} />
              ))
            )}
          </div>
        </div>
      </main>
      <Footer lang={lang} dict={dict} />
    </>
  )
}
