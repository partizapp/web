import type { Dictionary } from '@/lib/i18n'

interface Props {
  dict: Dictionary
}

// Scattered background party emojis — outer div handles position+rotation, inner handles float
const FLOATING_ITEMS = [
  { emoji: '🎊', pos: { top: '8%', left: '4%' },    size: '2.8rem', delay: '0s',    dur: '4.2s', rotate: '-15deg', opacity: 0.55 },
  { emoji: '🍾', pos: { top: '5%', right: '6%' },   size: '2.4rem', delay: '0.7s',  dur: '5.1s', rotate: '12deg',  opacity: 0.50 },
  { emoji: '🎭', pos: { top: '34%', left: '2%' },   size: '2rem',   delay: '1.4s',  dur: '3.7s', rotate: '-22deg', opacity: 0.40 },
  { emoji: '🔥', pos: { top: '24%', right: '4%' },  size: '2rem',   delay: '0.3s',  dur: '4.6s', rotate: '8deg',   opacity: 0.50 },
  { emoji: '✨', pos: { bottom: '36%', left: '7%' }, size: '1.6rem', delay: '2.1s',  dur: '3.3s', rotate: '-5deg',  opacity: 0.45 },
  { emoji: '🎲', pos: { bottom: '30%', right: '6%' },size: '2rem',  delay: '0.9s',  dur: '4.1s', rotate: '20deg',  opacity: 0.45 },
  { emoji: '🥳', pos: { top: '15%', left: '17%' },  size: '1.7rem', delay: '0.5s',  dur: '5.6s', rotate: '-10deg', opacity: 0.30 },
  { emoji: '🎈', pos: { top: '18%', right: '16%' }, size: '1.7rem', delay: '1.8s',  dur: '3.9s', rotate: '15deg',  opacity: 0.30 },
  { emoji: '⚡', pos: { bottom: '22%', left: '14%' },size: '1.5rem', delay: '2.8s',  dur: '4.4s', rotate: '-25deg', opacity: 0.25 },
  { emoji: '🎶', pos: { bottom: '26%', right: '13%' },size:'1.5rem', delay: '1.2s', dur: '5.0s', rotate: '30deg',  opacity: 0.25 },
]

function AppStoreButton({ label }: { label: string }) {
  return (
    <a
      href="#"
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
      href="#"
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
        background: [
          'radial-gradient(ellipse 120% 70% at 50% -10%, rgba(233,30,140,0.40) 0%, transparent 60%)',
          'radial-gradient(ellipse 55% 45% at 0% 65%, rgba(249,115,22,0.14) 0%, transparent 55%)',
          'radial-gradient(ellipse 55% 45% at 100% 40%, rgba(168,85,247,0.18) 0%, transparent 55%)',
        ].join(', '),
      }}
    >
      {/* Scattered floating party emojis */}
      {FLOATING_ITEMS.map((item, i) => (
        <div
          key={i}
          className="absolute pointer-events-none select-none"
          style={{ ...item.pos, fontSize: item.size, opacity: item.opacity, transform: `rotate(${item.rotate})` }}
        >
          <div
            className="animate-float"
            style={{ animationDelay: item.delay, animationDuration: item.dur }}
          >
            {item.emoji}
          </div>
        </div>
      ))}

      {/* Top glow bloom */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[280px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(233,30,140,0.25) 0%, transparent 70%)' }}
      />

      {/* Main floating emoji */}
      <div className="text-6xl mb-6 animate-sway select-none">🎉</div>

      {/* App name with glow bloom */}
      <div className="relative mb-5">
        <div
          className="absolute inset-0 blur-3xl scale-110 rounded-full pointer-events-none"
          style={{ background: 'rgba(233,30,140,0.28)' }}
        />
        <h1
          className="relative text-8xl md:text-[9rem] font-black tracking-widest leading-none"
          style={{
            background: 'linear-gradient(135deg, #ff6ec7 0%, #e91e8c 55%, #c2185b 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          PARTIZ
        </h1>
      </div>

      {/* Tagline */}
      <p className="text-2xl md:text-3xl font-bold text-white mb-5 leading-tight">
        {lines.map((line, i) => (
          <span key={i}>
            {line}
            {i < lines.length - 1 && <br />}
          </span>
        ))}
      </p>

      {/* Stat chips */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {[
          { icon: '🎮', label: '6 games' },
          { icon: '👥', label: '∞ players' },
          { icon: '📵', label: 'zero wifi' },
        ].map(({ icon, label }) => (
          <span
            key={label}
            className="inline-flex items-center gap-1.5 text-xs font-black tracking-wide uppercase px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/50"
          >
            <span>{icon}</span>
            {label}
          </span>
        ))}
      </div>

      {/* Store buttons — coming soon */}
      <div className="flex flex-col items-center gap-4">
        <div className="inline-flex items-center gap-2 border border-amber-400/40 text-amber-300 text-xs font-black tracking-[0.15em] uppercase px-4 py-2 rounded-full bg-amber-400/10">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse shrink-0" />
          {dict.hero.coming_soon}
        </div>
        <div className="flex flex-col sm:flex-row gap-3 opacity-40 pointer-events-none select-none">
          <AppStoreButton label={dict.hero.download_ios} />
          <PlayStoreButton label={dict.hero.download_android} />
        </div>
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
