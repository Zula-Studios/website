/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0C0C0F',
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
        accent: {
          DEFAULT: '#0284C7',
          900: '#0C4A6E',
          800: '#075985',
          700: '#0369A1',
          600: '#0284C7',
          500: '#0EA5E9',
          400: '#38BDF8',
          300: '#7DD3FC',
          200: '#BAE6FD',
          100: '#E0F2FE',
          50: '#F0F9FF',
        },
        // Keep brand alias for prose + blog
        brand: {
          DEFAULT: '#0284C7',
          600: '#0284C7',
          700: '#0369A1',
          500: '#0EA5E9',
          100: '#E0F2FE',
          50: '#F0F9FF',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          warm: '#FAFAF8',
          dark: '#0C0C0F',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(3.25rem, 7vw, 6.5rem)', { lineHeight: '0.92', letterSpacing: '-0.04em' }],
        'display-sm': ['clamp(2.25rem, 4.5vw, 4rem)', { lineHeight: '1', letterSpacing: '-0.03em' }],
        'display-xs': ['clamp(1.75rem, 3vw, 2.5rem)', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        'marquee': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: '#44444F',
            maxWidth: 'none',
            h1: { color: '#0C0C0F', letterSpacing: '-0.025em', fontWeight: '700' },
            h2: { color: '#0C0C0F', letterSpacing: '-0.02em', fontWeight: '700' },
            h3: { color: '#0C0C0F', fontWeight: '600' },
            a: { color: '#0284C7', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } },
            strong: { color: '#0C0C0F' },
            code: {
              color: '#0369A1',
              backgroundColor: '#F0F9FF',
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
              borderLeftColor: '#0284C7',
              backgroundColor: '#F0F9FF',
              borderRadius: '0 0.75rem 0.75rem 0',
              padding: '0.75rem 1.5rem',
              fontStyle: 'normal',
            },
            table: { fontSize: '0.9rem' },
            'th': { color: '#0C0C0F', fontWeight: '600' },
            'thead th': { borderBottomColor: '#EBEBEF' },
            'tbody tr': { borderBottomColor: '#F5F5F8' },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
