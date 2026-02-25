import type { Metadata } from 'next'
import Logo from '@/components/Logo'

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export default function LogoPreview() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center gap-16 px-8 py-24"
      style={{ background: '#1a1032' }}
    >
      <h1 className="text-white/30 text-xs font-bold tracking-widest uppercase">Logo Preview</h1>

      {/* Full lockup with tagline */}
      <div className="flex flex-col items-center">
        <p className="text-white/20 text-[10px] tracking-widest uppercase mb-6">Full lockup — with tagline</p>
        <Logo width={420} showTagline />
      </div>

      {/* Without tagline */}
      <div className="flex flex-col items-center">
        <p className="text-white/20 text-[10px] tracking-widest uppercase mb-6">Wordmark — no tagline</p>
        <Logo width={360} />
      </div>

      {/* Medium */}
      <div className="flex flex-col items-center">
        <p className="text-white/20 text-[10px] tracking-widest uppercase mb-6">Medium</p>
        <Logo width={200} />
      </div>

      {/* Header size */}
      <div className="flex flex-col items-center">
        <p className="text-white/20 text-[10px] tracking-widest uppercase mb-6">Header size</p>
        <div className="bg-background/80 backdrop-blur px-6 py-4 rounded-2xl border border-white/5">
          <Logo width={110} />
        </div>
      </div>

      {/* On light */}
      <div className="flex flex-col items-center">
        <p className="text-white/20 text-[10px] tracking-widest uppercase mb-6">On light background</p>
        <div className="bg-white px-10 py-6 rounded-2xl">
          <Logo width={280} />
        </div>
      </div>
    </main>
  )
}
