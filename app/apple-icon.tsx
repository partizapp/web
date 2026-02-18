import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: '#1a1032',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* 4-pointed star via clip-path polygon */}
        <div
          style={{
            width: 130,
            height: 130,
            background: 'linear-gradient(135deg, #ff6ec7 0%, #e91e8c 50%, #a855f7 100%)',
            clipPath:
              'polygon(50% 0%, 63% 37%, 100% 50%, 63% 63%, 50% 100%, 37% 63%, 0% 50%, 37% 37%)',
          }}
        />
      </div>
    ),
    { ...size },
  )
}
