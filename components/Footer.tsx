import Link from 'next/link'
import type { Dictionary } from '@/lib/i18n'

interface Props {
  lang: string
  dict: Dictionary
}

export default function Footer({ lang, dict }: Props) {
  return (
    <footer className="border-t border-white/5 py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
        <span className="font-black text-white/40 tracking-widest">PARTIZ</span>

        <div className="flex items-center gap-6">
          <Link
            href={`/${lang}/privacy`}
            className="hover:text-white transition-colors"
          >
            {dict.footer.privacy}
          </Link>
          <span>{dict.footer.rights}</span>
        </div>
      </div>
    </footer>
  )
}
