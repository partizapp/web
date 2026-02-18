import type { Dictionary } from '@/lib/i18n'

interface Props {
  dict: Dictionary
}

export default function Games({ dict }: Props) {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            {dict.games.title}
          </h2>
          <p className="text-secondary text-lg max-w-xl mx-auto">{dict.games.subtitle}</p>
        </div>

        {/* Game cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {dict.games.items.map((game, i) => (
            <div
              key={i}
              className="group flex items-center gap-5 p-5 rounded-2xl border border-white/8 bg-surface/40 hover:bg-surface/70 hover:border-white/15 transition-all duration-200 cursor-default"
              style={{ borderLeftColor: game.color, borderLeftWidth: 3 }}
            >
              {/* Emoji icon */}
              <div
                className="w-14 h-14 shrink-0 rounded-xl flex items-center justify-center text-3xl"
                style={{ backgroundColor: `${game.color}20` }}
              >
                {game.emoji}
              </div>

              {/* Text */}
              <div className="min-w-0">
                <h3
                  className="font-black text-base tracking-wide mb-1 leading-tight"
                  style={{ color: game.color }}
                >
                  {game.name}
                </h3>
                <p className="text-secondary text-sm leading-snug">{game.desc}</p>
              </div>

              {/* Arrow */}
              <svg
                className="w-5 h-5 shrink-0 ml-auto text-muted group-hover:text-white/50 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          ))}

          {/* Random card */}
          <div className="group flex items-center gap-5 p-5 rounded-2xl border border-dashed border-white/15 bg-transparent hover:bg-surface/30 transition-all duration-200 cursor-default sm:col-span-2">
            <div className="w-14 h-14 shrink-0 rounded-xl flex items-center justify-center text-3xl bg-white/5">
              🎲
            </div>
            <div>
              <h3 className="font-black text-base tracking-wide mb-1 text-white/70">
                RANDOM
              </h3>
              <p className="text-muted text-sm">{dict.games.random_desc}</p>
            </div>
            <span className="ml-auto text-xl">✨</span>
          </div>
        </div>
      </div>
    </section>
  )
}
