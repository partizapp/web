interface Props {
  /** Rendered width in px — height is calculated from aspect ratio */
  width?: number
  /** Show "THE PARTY GAME APP" tagline (full wordmark only) */
  showTagline?: boolean
  /** Render only the spark icon mark, no text */
  markOnly?: boolean
  /**
   * Prefix for internal SVG IDs (gradients, filters).
   * Must be unique per page if you render the logo more than once.
   */
  id?: string
  className?: string
}

export default function Logo({
  width = 320,
  showTagline = false,
  markOnly = false,
  id = 'logo',
  className,
}: Props) {
  const vbW = markOnly ? 80 : 420
  const vbH = markOnly ? 80 : showTagline ? 92 : 68
  const height = Math.round(width * (vbH / vbW))

  const grad  = `${id}-g`
  const rule  = `${id}-r`
  const glow  = `${id}-og`
  const bloom = `${id}-sg`

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${vbW} ${vbH}`}
      width={width}
      height={height}
      aria-label="Partiz"
      className={className}
    >
      <defs>
        {/* Pink → purple diagonal gradient */}
        <linearGradient id={grad} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#ff6ec7" />
          <stop offset="50%"  stopColor="#e91e8c" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>

        {/* Rule gradient: fades at both ends (full wordmark only) */}
        {!markOnly && (
          <linearGradient id={rule} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#e91e8c" stopOpacity="0"   />
            <stop offset="20%"  stopColor="#e91e8c" stopOpacity="0.45"/>
            <stop offset="75%"  stopColor="#a855f7" stopOpacity="0.45"/>
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0"   />
          </linearGradient>
        )}

        {/* Heavy outer glow */}
        <filter id={glow} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="9" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Soft inner bloom */}
        <filter id={bloom} x="-15%" y="-15%" width="130%" height="130%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {markOnly ? (
        /* ── MARK ONLY  (80 × 80, star centred at 40 40, R = 26) ── */
        <>
          {/* Glow halo */}
          <path
            d="M 40,14 Q 49.1,30.9 66,40 Q 49.1,49.1 40,66 Q 30.9,49.1 14,40 Q 30.9,30.9 40,14 Z"
            fill="#e91e8c" opacity="0.45"
            filter={`url(#${glow})`}
          />
          {/* Main star */}
          <path
            d="M 40,14 Q 49.1,30.9 66,40 Q 49.1,49.1 40,66 Q 30.9,49.1 14,40 Q 30.9,30.9 40,14 Z"
            fill={`url(#${grad})`}
            filter={`url(#${bloom})`}
          />
          {/* Centre dot */}
          <circle cx="40" cy="40" r="3" fill="white" opacity="0.85" />
          {/* Secondary sparkle — top-right (centre 64 17, R 7) */}
          <path
            d="M 64,10 Q 66.45,14.55 71,17 Q 66.45,19.45 64,24 Q 61.55,19.45 57,17 Q 61.55,14.55 64,10 Z"
            fill={`url(#${grad})`} opacity="0.75"
            filter={`url(#${bloom})`}
          />
          {/* Tertiary sparkle — bottom-left (centre 19 62, R 5) */}
          <path
            d="M 19,57 Q 20.75,59.75 24,62 Q 20.75,64.25 19,67 Q 17.25,64.25 14,62 Q 17.25,59.75 19,57 Z"
            fill={`url(#${grad})`} opacity="0.55"
            filter={`url(#${bloom})`}
          />
        </>
      ) : (
        /* ── FULL WORDMARK  (420 × 68/92) ── */
        <>
          {/* ── Spark icon ── */}
          <path
            d="M 38,18 Q 45.4,31.7 59,39 Q 45.4,46.3 38,60 Q 30.6,46.3 17,39 Q 30.6,31.7 38,18 Z"
            fill="#e91e8c" opacity="0.45"
            filter={`url(#${glow})`}
          />
          <path
            d="M 38,18 Q 45.4,31.7 59,39 Q 45.4,46.3 38,60 Q 30.6,46.3 17,39 Q 30.6,31.7 38,18 Z"
            fill={`url(#${grad})`}
            filter={`url(#${bloom})`}
          />
          <circle cx="38" cy="39" r="2.5" fill="white" opacity="0.85" />

          {/* Secondary sparkle top-right */}
          <path
            d="M 59,10.5 Q 61.0,13.9 64.5,16 Q 61.0,18.1 59,21.5 Q 57.0,18.1 53.5,16 Q 57.0,13.9 59,10.5 Z"
            fill={`url(#${grad})`} opacity="0.75"
            filter={`url(#${bloom})`}
          />
          {/* Tertiary sparkle bottom-left */}
          <path
            d="M 18,56 Q 19.4,58.4 22,60 Q 19.4,61.6 18,64 Q 16.6,61.6 14,60 Q 16.6,58.4 18,56 Z"
            fill={`url(#${grad})`} opacity="0.55"
            filter={`url(#${bloom})`}
          />

          {/* ── PARTIZ wordmark ── */}
          {/* Glow layer */}
          <text
            x="76" y="60"
            fontFamily="var(--font-inter), 'Arial Black', Arial, sans-serif"
            fontWeight="900" fontSize="58" letterSpacing="7"
            fill="#e91e8c" opacity="0.38"
            filter={`url(#${glow})`}
          >PARTIZ</text>
          {/* Main gradient text */}
          <text
            x="76" y="60"
            fontFamily="var(--font-inter), 'Arial Black', Arial, sans-serif"
            fontWeight="900" fontSize="58" letterSpacing="7"
            fill={`url(#${grad})`}
            filter={`url(#${bloom})`}
          >PARTIZ</text>

          {/* ── Gradient rule ── */}
          <line x1="76" y1="66" x2="408" y2="66" stroke={`url(#${rule})`} strokeWidth="1" />

          {/* ── Tagline ── */}
          {showTagline && (
            <text
              x="78" y="83"
              fontFamily="var(--font-inter), Arial, sans-serif"
              fontWeight="700" fontSize="9" letterSpacing="4.5"
              fill="#e91e8c" opacity="0.55"
            >THE PARTY GAME APP</text>
          )}
        </>
      )}
    </svg>
  )
}
