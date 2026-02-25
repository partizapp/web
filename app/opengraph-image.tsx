import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0f0a1e 0%, #1a1032 50%, #2d1b69 100%)',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: 'absolute',
            width: 600,
            height: 600,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />

        {/* Logo text */}
        <div
          style={{
            fontSize: 96,
            fontWeight: 900,
            color: 'white',
            letterSpacing: '-2px',
            marginBottom: 24,
            display: 'flex',
          }}
        >
          Partiz
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 32,
            color: 'rgba(255,255,255,0.65)',
            textAlign: 'center',
            maxWidth: 700,
            lineHeight: 1.4,
            display: 'flex',
          }}
        >
          Party games with friends — no WiFi needed
        </div>

        {/* Game pills */}
        <div
          style={{
            display: 'flex',
            gap: 12,
            marginTop: 48,
            flexWrap: 'wrap',
            justifyContent: 'center',
            maxWidth: 900,
          }}
        >
          {[
            { label: 'Truth or Dare', color: '#f97316' },
            { label: 'Would You Rather', color: '#06b6d4' },
            { label: 'Never Have I Ever', color: '#eab308' },
            { label: 'Most Likely To', color: '#ec4899' },
            { label: 'Categories', color: '#22c55e' },
            { label: 'Impostor', color: '#ef4444' },
          ].map((game) => (
            <div
              key={game.label}
              style={{
                background: `${game.color}22`,
                border: `1.5px solid ${game.color}55`,
                borderRadius: 999,
                padding: '8px 20px',
                fontSize: 18,
                color: game.color,
                fontWeight: 700,
                display: 'flex',
              }}
            >
              {game.label}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  )
}
