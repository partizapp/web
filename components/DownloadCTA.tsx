import type { Dictionary } from '@/lib/i18n'

interface Props {
  dict: Dictionary
}

export default function DownloadCTA({ dict }: Props) {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div
          className="relative rounded-3xl p-10 md:p-16 text-center overflow-hidden"
          style={{
            background:
              'linear-gradient(135deg, rgba(233,30,140,0.18) 0%, rgba(42,31,78,0.8) 50%, rgba(168,85,247,0.12) 100%)',
            border: '1px solid rgba(233,30,140,0.25)',
          }}
        >
          {/* Glow */}
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(233,30,140,0.15) 0%, transparent 70%)',
            }}
          />

          <div className="relative">
            <div className="text-5xl mb-6 animate-float">🥳</div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              {dict.cta.title}
            </h2>
            <p className="text-secondary text-lg mb-10">{dict.cta.sub}</p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#" // TODO: Replace with actual App Store link
                className="inline-flex items-center gap-3 bg-white text-background px-8 py-4 rounded-2xl font-black text-sm hover:bg-white/90 active:scale-95 transition-all w-full sm:w-auto justify-center"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                {dict.cta.download_ios}
              </a>

              <a
                href="#" // TODO: Replace with actual Google Play link
                className="inline-flex items-center gap-3 border border-white/20 text-white px-8 py-4 rounded-2xl font-black text-sm hover:bg-white/5 hover:border-white/40 active:scale-95 transition-all w-full sm:w-auto justify-center"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.18 23.76c.37.2.8.21 1.2-.01l12.7-7.34-2.8-2.8-11.1 10.15zm-1.1-20.6v21.68c0 .52.27.97.72 1.16L14.88 14 2.8 1.92c-.45.2-.72.64-.72 1.24zM20.4 9.4l-2.84-1.64L14.5 11l3.06 3.06 2.86-1.65c.81-.47.81-1.55-.02-2.01zM4.38.24L17.08 7.6 14.27 10.4 3.18.26c.38-.22.83-.22 1.2-.02z" />
                </svg>
                {dict.cta.download_android}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
