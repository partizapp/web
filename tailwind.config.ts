import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#1a1032',
        surface: '#2a1f4e',
        'surface-light': '#3d2d6b',
        primary: '#e91e8c',
        'primary-light': '#ff4da6',
        secondary: '#b8a9d4',
        muted: '#7a6b9a',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'float-slow': 'float 5.5s ease-in-out infinite',
        'sway': 'sway 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        sway: {
          '0%, 100%': { transform: 'translateY(0) rotate(-4deg)' },
          '50%': { transform: 'translateY(-10px) rotate(4deg)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
