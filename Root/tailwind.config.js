/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          300: '#f5d87a',
          400: '#e8c53a',
          500: '#d4a017',
          600: '#b8860b',
        },
        obsidian: '#0a0a0b',
        charcoal: '#111114',
        slate: '#1a1a1f',
        muted: '#2a2a32',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['DM Sans', 'sans-serif'],
        accent: ['Cormorant Garamond', 'serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #d4a017 0%, #f5d87a 50%, #d4a017 100%)',
        'dark-gradient': 'linear-gradient(180deg, #0a0a0b 0%, #111114 100%)',
      },
      animation: {
        'shimmer': 'shimmer 2.5s infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(212, 160, 23, 0.4)' },
          '50%': { boxShadow: '0 0 0 12px rgba(212, 160, 23, 0)' },
        },
      },
    },
  },
  plugins: [],
}
