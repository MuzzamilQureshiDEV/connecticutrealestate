import type { Config } from 'tailwindcss';

/**
 * BRAND COLORS — change these three ramps and the whole site re-skins.
 *  navy   → primary brand colour (headers, dark sections, primary buttons)
 *  bronze → warm accent (highlights, icon chips, hover states)
 *  sand/neutral → the whitespace-heavy base
 *
 * Contrast notes: bronze-600 (#8A6220) is the lightest bronze that clears
 * WCAG AA (4.5:1) for text on white — bronze-400/500 are decorative only.
 */
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#F2F5F9',
          100: '#E2E8F0',
          200: '#C7D2E0',
          300: '#94A6BD',
          400: '#5C7395',
          500: '#33507A',
          600: '#1F3A61',
          700: '#152B4A',
          800: '#0E1F36',
          900: '#0A1626',
          950: '#060E19',
        },
        bronze: {
          50: '#FBF7EF',
          100: '#F6EDD9',
          200: '#EBD9B0',
          300: '#DEC07F',
          400: '#CFA451',
          500: '#B9862F',
          600: '#8A6220',
          700: '#6B4B19',
          800: '#4C3512',
          900: '#2E200B',
        },
        sand: {
          50: '#FAFAF9',
          100: '#F5F4F1',
          200: '#EAE8E3',
        },
      },
      fontFamily: {
        // Wired up through next/font in app/layout.tsx
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-inter)', 'ui-sans-serif', 'sans-serif'],
      },
      maxWidth: { site: '1240px' },
      boxShadow: {
        card: '0 1px 2px rgba(10,22,38,0.04), 0 12px 32px -16px rgba(10,22,38,0.18)',
        lift: '0 24px 60px -24px rgba(10,22,38,0.35)',
        glass: '0 4px 24px -10px rgba(10,22,38,0.18)',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 38s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
