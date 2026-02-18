import type { Dictionary } from '@/lib/i18n'

interface Props {
  dict: Dictionary
}

function AppStoreButton({ label }: { label: string }) {
  return (
    <a
      href="#" // TODO: Replace with actual App Store link
      className="inline-flex items-center gap-3 bg-white text-background px-6 py-3.5 rounded-2xl font-bold text-sm hover:bg-white/90 active:scale-95 transition-all"
    >
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
      {label}
    </a>
  )
}

function PlayStoreButton({ label }: { label: string }) {
  return (
    <a
      href="#" // TODO: Replace with actual Google Play link
      className="inline-flex items-center gap-3 bg-surface border border-white/10 text-white px-6 py-3.5 rounded-2xl font-bold text-sm hover:bg-surface-light hover:border-white/20 active:scale-95 transition-all"
    >
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3.18 23.76c.37.2.8.21 1.2-.01l12.7-7.34-2.8-2.8-11.1 10.15zm-1.1-20.6v21.68c0 .52.27.97.72 1.16L14.88 14 2.8 1.92c-.45.2-.72.64-.72 1.24zM20.4 9.4l-2.84-1.64L14.5 11l3.06 3.06 2.86-1.65c.81-.47.81-1.55-.02-2.01zM4.38.24L17.08 7.6 14.27 10.4 3.18.26c.38-.22.83-.22 1.2-.02z" />
      </svg>
      {label}
    </a>
  )
}

export default function Hero({ dict }: Props) {
  const lines = dict.hero.tagline.split('\n')

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16 overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse 100% 65% at 50% -5%, rgba(233,30,140,0.22) 0%, transparent 65%)',
      }}
    >
      {/* Ambient orbs */}
      <div
        className="absolute top-1/4 -left-32 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: '#e91e8c' }}
      />
      <div
        className="absolute top-1/3 -right-32 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: '#a855f7' }}
      />

      {/* Floating emoji */}
      <div className="text-6xl mb-6 animate-float select-none">🎉</div>

      {/* App name */}
      <h1
        className="text-8xl md:text-[9rem] font-black tracking-widest mb-5 leading-none"
        style={{
          background: 'linear-gradient(135deg, #ff4da6 0%, #e91e8c 60%, #c2185b 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        PARTIZ
      </h1>

      {/* Tagline */}
      <p className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
        {lines.map((line, i) => (
          <span key={i}>
            {line}
            {i < lines.length - 1 && <br />}
          </span>
        ))}
      </p>

      {/* Sub */}
      <p className="text-secondary text-base md:text-lg max-w-sm mb-10">
        {dict.hero.sub}
      </p>

      {/* Store buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <AppStoreButton label={dict.hero.download_ios} />
        <PlayStoreButton label={dict.hero.download_android} />
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 flex flex-col items-center gap-1 text-muted text-xs animate-bounce">
        <span>{dict.hero.scroll_hint}</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
