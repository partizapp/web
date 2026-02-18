import Link from 'next/link'
import type { Dictionary } from '@/lib/i18n'

interface Props {
  lang: string
  dict: Dictionary
}

export default function Header({ lang, dict }: Props) {
  const otherLang = lang === 'en' ? 'fr' : 'en'

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href={`/${lang}`}
          className="text-xl font-black tracking-widest text-white hover:text-primary transition-colors"
        >
          PARTIZ
        </Link>

        <Link
          href={`/${otherLang}`}
          className="text-sm font-semibold text-secondary hover:text-white transition-colors px-3 py-1.5 rounded-lg border border-white/10 hover:border-primary/40 hover:bg-surface/50"
        >
          {dict.nav.lang_label}
        </Link>
      </div>
    </header>
  )
}
