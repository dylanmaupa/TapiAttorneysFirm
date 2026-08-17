/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      colors: {
        // Brand palette — Deep Gold & Midnight Navy
        gold: {
          50:  '#fdf8ee',
          100: '#faefd0',
          200: '#f4dba0',
          300: '#ecc163',
          400: '#e4a832',
          500: '#c9a84c',  // Primary gold
          600: '#b8922a',
          700: '#9a7520',
          800: '#7d5e1c',
          900: '#5c4415',
        },
        navy: {
          50:  '#eef1f8',
          100: '#d4dced',
          200: '#aab9db',
          300: '#7a93c3',
          400: '#4f6faa',
          500: '#2e508d',
          600: '#1A2744',  // Primary navy
          700: '#152038',
          800: '#0e162a',
          900: '#070d1a',
        },
        cream: {
          50:  '#fffef9',
          100: '#fdf8ee',  // Main bg
          200: '#faf0d7',
          300: '#f5e4b5',
          400: '#edd48c',
          500: '#e2c165',
        },
        charcoal: {
          900: '#0D1117',  // Darkest text / hero bg
          800: '#1a1f2e',
          700: '#252b3a',
          600: '#3a4155',
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #c9a84c 0%, #e4a832 50%, #c9a84c 100%)',
        'navy-gradient': 'linear-gradient(180deg, #0D1117 0%, #1A2744 100%)',
        'hero-gradient': 'linear-gradient(135deg, #0D1117 0%, #1A2744 60%, #0D1117 100%)',
      },
      boxShadow: {
        'gold': '0 4px 24px rgba(201, 168, 76, 0.25)',
        'gold-lg': '0 8px 48px rgba(201, 168, 76, 0.35)',
        'navy': '0 4px 24px rgba(26, 39, 68, 0.3)',
        'card': '0 2px 12px rgba(13, 17, 23, 0.08)',
        'card-hover': '0 12px 40px rgba(13, 17, 23, 0.15)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'shimmer': 'shimmer 2s linear infinite',
        'count-up': 'countUp 1s ease-out forwards',
        'draw-line': 'drawLine 1s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(32px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        drawLine: {
          from: { width: '0%' },
          to:   { width: '80px' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-6px)' },
        },
      },
      lineHeight: {
        relaxed: '1.75',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
};