import type { Dictionary } from '@/lib/i18n'

interface Props {
  dict: Dictionary
}

export default function Features({ dict }: Props) {
  return (
    <section
      className="py-24 px-6"
      style={{
        background:
          'linear-gradient(180deg, transparent 0%, rgba(42,31,78,0.3) 50%, transparent 100%)',
      }}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-14">
          {dict.features.title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {dict.features.items.map((feature, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-6 rounded-2xl border border-white/8 bg-surface/30 hover:bg-surface/60 hover:border-primary/20 transition-all duration-200"
            >
              <span className="text-4xl mb-4">{feature.icon}</span>
              <h3 className="font-black text-white text-base mb-2">{feature.title}</h3>
              <p className="text-secondary text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
