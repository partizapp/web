# Partiz Web — Agent Context

This file is the living record of all decisions, changes, and plans made on this codebase. Update it every time something meaningful is modified.

---

## Project overview

- **Product**: Partiz — mobile party game app (iOS, 6 games)
- **App Store**: https://apps.apple.com/us/app/partiz/id6759404644 (ID: `6759404644`)
- **Website**: https://partiz.app
- **Contact**: hello@partiz.app
- **Stack**: Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS 3, gray-matter for Markdown blog
- **Hosting**: Vercel (assumed — uses edge runtime for OG image)

---

## Architecture

```
app/
  layout.tsx                 Root layout: global metadata, fonts, Apple Smart App Banner
  opengraph-image.tsx        Dynamic OG image (edge runtime, 1200×630)
  robots.ts                  robots.txt — allows all, disallows /api/, points to sitemap
  sitemap.ts                 Dynamic XML sitemap — all pages + blog posts in EN & FR
  [lang]/
    page.tsx                 Home page (Hero → Games → Features → DownloadCTA → Faq → Footer)
    blog/
      page.tsx               Blog index — lists all posts with reading time
      [slug]/page.tsx        Blog post — BreadcrumbList schema, related articles, reading time
    logo/page.tsx            Logo preview (noindexed)
    privacy/page.tsx         Privacy policy

components/
  Header.tsx
  Hero.tsx                   Hero section — AppStoreButton + PlayStoreButton (with inline "soon" tag)
  Games.tsx                  6 game cards
  Features.tsx               4 feature pills
  DownloadCTA.tsx            Bottom CTA — same button pattern as Hero
  Faq.tsx                    FAQ section + FAQPage JSON-LD schema
  Footer.tsx
  JsonLd.tsx                 Organization + MobileApplication schema (used on home page)
  Logo.tsx

content/blog/
  en/                        English markdown posts
  fr/                        French markdown posts

i18n/
  en.ts                      Source of truth for Dictionary type
  fr.ts                      Implements Dictionary (must stay structurally identical to en.ts)

lib/
  blog.ts                    getBlogPosts / getBlogPost — includes readingTime (words ÷ 200)
  constants.ts               SITE_URL, APP_STORE_URL, APP_STORE_ID
  i18n.ts                    getDictionary(lang), locales array

middleware.ts                Locale detection via accept-language header → x-locale header
```

---

## Internationalization

- Two locales: `en` (default) and `fr`
- Routes: `/en/...` and `/fr/...`
- Middleware detects preferred language and redirects `/` to `/{lang}`
- `i18n/en.ts` defines the `Dictionary` type (exported as `typeof en`)
- `i18n/fr.ts` must implement every key in `Dictionary` — adding a key to `en.ts` requires the same key in `fr.ts`
- Blog posts live in `content/blog/{lang}/{slug}.md` with frontmatter: `title`, `description`, `publishedAt`

---

## Blog

### Live articles

| Slug | EN title | publishedAt |
|---|---|---|
| `how-to-play-truth-or-dare` | How to Play Truth or Dare: Rules, Questions & Dare Ideas | 2026-01-15 |
| `how-to-play-never-have-i-ever` | How to Play Never Have I Ever: Rules & 100+ Questions | 2026-02-01 |
| `how-to-play-would-you-rather` | How to Play Would You Rather: Rules & 60+ Scenarios | 2026-02-15 |

All articles exist in both `en/` and `fr/`.

### Article conventions
- Publish dates are staggered for freshness signal (not all the same day)
- Each article cross-links to the other two at the bottom
- Each ends with a Partiz download CTA
- Each has a FAQ section targeting "People Also Ask" queries
- `readingTime` is computed automatically from word count (words ÷ 200, min 1)

---

## SEO setup

### Technical
- **OG image**: `app/opengraph-image.tsx` — dynamic Next.js edge ImageResponse (1200×630), branded purple gradient with game name pills. Referenced in all `og:image` and `twitter:image` tags.
- **Apple Smart App Banner**: `<meta name="apple-itunes-app" content="app-id=6759404644">` in root layout — prompts iOS Safari users to open/install the app.
- **Global metadata**: `applicationName`, `authors`, `creator`, `category`, `keywords` set in `app/layout.tsx`.
- **Blog posts**: `hreflang` alternates (en/fr), `BreadcrumbList` JSON-LD, enhanced `BlogPosting` schema (author, publisher, image, inLanguage).
- **Logo page**: noindexed via `export const metadata = { robots: { index: false, follow: false } }`.

### Schemas in use
- `Organization` — home page (via `JsonLd.tsx`)
- `MobileApplication` — home page (via `JsonLd.tsx`)
- `FAQPage` — home page (via `Faq.tsx`)
- `BlogPosting` — each blog post page
- `BreadcrumbList` — each blog post page

### Content
- Blog meta descriptions updated to mention all 3 games.
- Articles have internal linking between all 3 posts.
- "Keep reading" related articles section at bottom of each post.

---

## UI decisions

### Store buttons (Hero + DownloadCTA)

**Decision (Feb 2026):** Removed the floating "coming soon" badge that hovered above the disabled Android button. It created visual misalignment between the iOS and Android button rows.

**Current design:** The Android/Play Store button is a single self-contained element (a `<div>` with `role="img"`) at the same height as the iOS button. The "coming soon" state is communicated via:
- Muted text and icon opacity (`text-white/40`)
- A small amber pill tag inline inside the button: `COMING SOON` in `text-[10px] uppercase tracking-[0.12em]`
- No floating element, no extra height

This pattern is used identically in both `Hero.tsx` (`PlayStoreButton` component) and `DownloadCTA.tsx`.

---

## Known limitations / future work

- **Android app**: Not yet available. When it launches, update `PlayStoreButton` in `Hero.tsx` and the Android block in `DownloadCTA.tsx` to real links (remove `role="img"`, add `href`, restore hover states).
- **Google Play store link**: Will need `PLAY_STORE_URL` added to `lib/constants.ts`.
- **OG image per article**: Currently all articles share the root OG image. When we have more content, consider per-article OG images using `app/[lang]/blog/[slug]/opengraph-image.tsx`.
- **Analytics**: No GA4 or Search Console integration yet. Add when ready.
- **More articles**: The blog has 3 how-to guides. Next candidates: "Most Likely To" and "Impostor" game guides, or broader topics like "best party games for adults".

---

## Changelog

### 2026-02-25
- Rewrote Truth or Dare article (~250 words → ~700 words, EN + FR)
- Created Never Have I Ever article (EN + FR, ~900 words each)
- Created Would You Rather article (EN + FR, ~850 words each)
- Added `readingTime` field to `BlogPost` interface and `getBlogPosts`/`getBlogPost` functions
- Added reading time display to blog index and blog post header
- Added "Keep reading" related articles section at bottom of blog posts
- Added `Faq` component with `FAQPage` JSON-LD schema to home page (5 Q&As, bilingual)
- Added `faq` key to `i18n/en.ts` and `i18n/fr.ts`
- Created `app/opengraph-image.tsx` — dynamic branded OG image
- Added Apple Smart App Banner (`apple-itunes-app` meta) to root layout
- Enriched global metadata: `applicationName`, `authors`, `creator`, `category`, `keywords`
- Added `hreflang` alternates to blog post pages
- Added `BreadcrumbList` JSON-LD + enhanced `BlogPosting` schema to blog post pages
- Noindexed `app/[lang]/logo/page.tsx`
- Updated blog meta descriptions in both i18n files
- Added `APP_STORE_ID` to `lib/constants.ts`
- Redesigned store buttons: replaced floating "coming soon" badge with inline amber pill tag inside the Android button (Hero + DownloadCTA)
