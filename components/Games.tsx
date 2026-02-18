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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {dict.games.items.map((game, i) => (
            <div
              key={i}
              className="group relative rounded-3xl p-7 overflow-hidden cursor-default transition-all duration-300 hover:-translate-y-1"
              style={{
                background: `linear-gradient(145deg, ${game.color}20 0%, rgba(15,12,30,0.7) 100%)`,
                border: `1px solid ${game.color}45`,
              }}
            >
              {/* Corner glow */}
              <div
                className="absolute -top-8 -right-8 w-40 h-40 rounded-full blur-3xl opacity-25 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none"
                style={{ background: game.color }}
              />

              {/* Large number watermark */}
              <span
                className="absolute -bottom-6 -right-2 text-[8rem] font-black leading-none select-none pointer-events-none"
                style={{ color: game.color, opacity: 0.07 }}
              >
                {i + 1}
              </span>

              <div className="relative flex flex-col gap-5">
                {/* Top row: emoji + badge */}
                <div className="flex items-start justify-between">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-4xl"
                    style={{ background: `${game.color}18` }}
                  >
                    {game.emoji}
                  </div>
                  <span
                    className="text-[10px] font-black tracking-[0.2em] px-3 py-1.5 rounded-full uppercase"
                    style={{ background: `${game.color}20`, color: game.color }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Text */}
                <div>
                  <h3
                    className="font-black text-xl tracking-wide leading-tight mb-2"
                    style={{ color: game.color }}
                  >
                    {game.name}
                  </h3>
                  <p className="text-secondary text-sm leading-relaxed">{game.desc}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Random card */}
          <div className="sm:col-span-2 group relative rounded-3xl p-7 overflow-hidden cursor-default border border-dashed border-white/15 hover:border-white/25 transition-all duration-300">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-4xl shrink-0 group-hover:bg-white/[0.08] transition-colors">
                🎲
              </div>
              <div>
                <span className="text-[10px] font-black tracking-[0.2em] text-white/30 uppercase block mb-1">
                  Special
                </span>
                <h3 className="font-black text-xl tracking-wide text-white/60 mb-1">RANDOM</h3>
                <p className="text-secondary text-sm">{dict.games.random_desc}</p>
              </div>
              <span className="ml-auto text-4xl">✨</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
