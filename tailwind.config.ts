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
      container: { center: true, padding: '1rem' }
    }
  },
  plugins: []
} satisfies Config;
