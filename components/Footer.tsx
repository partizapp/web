import Link from 'next/link'
import Logo from '@/components/Logo'
import type { Dictionary } from '@/lib/i18n'

interface Props {
  lang: string
  dict: Dictionary
}

export default function Footer({ lang, dict }: Props) {
  return (
    <footer className="border-t border-white/5 py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
        <Logo id="footer" width={100} />

        <div className="flex items-center gap-6">
          <Link
            href={`/${lang}/blog`}
            className="hover:text-white transition-colors"
          >
            {dict.nav.blog}
          </Link>
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
