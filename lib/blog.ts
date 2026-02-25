import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { SITE_URL } from './constants'

const CONTENT_DIR = path.join(process.cwd(), 'content/blog')

export interface BlogPost {
  slug: string
  title: string
  description: string
  publishedAt: string
  lang: string
  content: string
  readingTime: number // minutes
}

function computeReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length
  return Math.max(1, Math.ceil(words / 200))
}

function getContentDir(lang: string) {
  return path.join(CONTENT_DIR, lang)
}

export function getAllBlogSlugs(): string[] {
  const slugs = new Set<string>()
  for (const lang of ['en', 'fr']) {
    const dir = getContentDir(lang)
    if (!fs.existsSync(dir)) continue
    const files = fs.readdirSync(dir)
    for (const file of files) {
      if (file.endsWith('.md')) {
        slugs.add(file.replace(/\.md$/, ''))
      }
    }
  }
  return Array.from(slugs)
}

export function getBlogPosts(lang: string): Omit<BlogPost, 'content'>[] {
  const dir = getContentDir(lang)
  if (!fs.existsSync(dir)) return []

  const files = fs.readdirSync(dir)
  const posts: Omit<BlogPost, 'content'>[] = []

  for (const file of files) {
    if (!file.endsWith('.md')) continue
    const slug = file.replace(/\.md$/, '')
    const fullPath = path.join(dir, file)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    posts.push({
      slug,
      title: data.title,
      description: data.description,
      publishedAt: data.publishedAt,
      lang,
      readingTime: computeReadingTime(content),
    })
  }

  return posts.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
}

export function getBlogPost(lang: string, slug: string): BlogPost | null {
  const fullPath = path.join(getContentDir(lang), `${slug}.md`)
  if (!fs.existsSync(fullPath)) return null

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug,
    title: data.title,
    description: data.description,
    publishedAt: data.publishedAt,
    lang,
    content,
    readingTime: computeReadingTime(content),
  }
}

export function getBlogPostUrl(lang: string, slug: string): string {
  return `${SITE_URL}/${lang}/blog/${slug}`
}
