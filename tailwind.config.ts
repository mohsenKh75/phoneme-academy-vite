import type { Config } from 'tailwindcss';
const figmaTheme = require('./figma/tailwind.theme.json');

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/utils/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1084px',
      xl: '1280px',
      '2xl': '1536px'
    },
    extend: {
      backgroundImage: {
        'courses-background-img': "url('/png/bg-courses.png')",
        'dashboard-background-img': "url('/png/bg-dashboard.png')"
      },
      fontFamily: {
        regular: ['Regular'],
        bold: ['Bold'],
        light: ['Light']
      },
      colors: {
        ...figmaTheme.colors
      },
      fontSize: {
        ...figmaTheme.fontSize
      },
      container: { center: true, padding: '1rem' },
      keyframes: {
        'shake-to-expand': {
          '0%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-2px)' },
          '50%': { transform: 'translateX(2px)' },
          '75%': { transform: 'translateX(-1px)' },
          '100%': { transform: 'translateX(0)' }
        },
        'shake-to-shrink': {
          '0%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(2px)' },
          '50%': { transform: 'translateX(-2px)' },
          '75%': { transform: 'translateX(1px)' },
          '100%': { transform: 'translateX(0)' }
        }
      },
      animation: {
        'shake-expand': 'shake-to-expand 100ms ease-in-out',
        'shake-shrink': 'shake-to-shrink 100ms ease-in-out'
      },
      transitionTimingFunction: {
        'custom-ease': 'cubic-bezier(0.92, 0.06, 0.24, 0.65)'
      }
    }
  },
  plugins: []
} satisfies Config;
