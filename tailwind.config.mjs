/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0A0A0C',
          900: '#111118',
          800: '#1C1C25',
          700: '#2E2E3A',
          600: '#44444F',
          500: '#62626E',
          400: '#88888F',
          300: '#AEAEB5',
          200: '#D4D4D9',
          100: '#EBEBEF',
          50: '#F5F5F8',
        },
        // Digital Masters–inspired neon green system
        accent: {
          DEFAULT: '#00F573',
          900: '#005C2E',
          800: '#007A3D',
          700: '#00994D',
          600: '#00C45C',
          500: '#00F573',
          400: '#3FF98F',
          300: '#7FFBB3',
          200: '#B3FDD2',
          100: '#D9FEE9',
          50: '#ECFFF4',
        },
        brand: {
          DEFAULT: '#00F573',
          600: '#00C45C',
          700: '#00994D',
          500: '#00F573',
          100: '#D9FEE9',
          50: '#ECFFF4',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          warm: '#F4F5F7',
          dark: '#0A0A0C',
          navy: '#1D273D',
        },
        contrast: {
          coral: '#EA580C',
          violet: '#7C3AED',
          emerald: '#00F573',
          amber: '#D97706',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(3.25rem, 7vw, 6.5rem)', { lineHeight: '0.92', letterSpacing: '-0.04em' }],
        'display-sm': ['clamp(2.25rem, 4.5vw, 4rem)', { lineHeight: '1', letterSpacing: '-0.03em' }],
        'display-xs': ['clamp(1.75rem, 3vw, 2.5rem)', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
      },
      borderRadius: {
        pill: '9999px',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'orb-float': 'orbFloat 12s ease-in-out infinite',
      },
      keyframes: {
        'marquee': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'orbFloat': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(-12px, 18px) scale(1.04)' },
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: '#44444F',
            maxWidth: 'none',
            h1: { color: '#0A0A0C', letterSpacing: '-0.025em', fontWeight: '700' },
            h2: { color: '#0A0A0C', letterSpacing: '-0.02em', fontWeight: '700' },
            h3: { color: '#0A0A0C', fontWeight: '600' },
            a: { color: '#00994D', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } },
            strong: { color: '#0A0A0C' },
            code: {
              color: '#007A3D',
              backgroundColor: '#ECFFF4',
              padding: '0.125rem 0.375rem',
              borderRadius: '0.25rem',
              fontWeight: '500',
              fontSize: '0.875em',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            pre: { backgroundColor: '#111118', color: '#D4D4D9' },
            'pre code': { color: '#D4D4D9', backgroundColor: 'transparent', padding: '0' },
            blockquote: {
              borderLeftColor: '#00F573',
              backgroundColor: '#ECFFF4',
              borderRadius: '0 0.75rem 0.75rem 0',
              padding: '0.75rem 1.5rem',
              fontStyle: 'normal',
            },
            table: { fontSize: '0.9rem' },
            'th': { color: '#0A0A0C', fontWeight: '600' },
            'thead th': { borderBottomColor: '#EBEBEF' },
            'tbody tr': { borderBottomColor: '#F5F5F8' },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
