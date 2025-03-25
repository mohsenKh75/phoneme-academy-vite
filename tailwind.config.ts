import type { Config } from 'tailwindcss';
const figmaTheme = require('./figma/tailwind.theme.json');

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    extend: {
      colors: {
        ...figmaTheme.colors,
        background: 'var(--background)',
        foreground: 'var(--foreground)'
      },
      fontSize: {
        ...figmaTheme.fontSize
      },
      container: { center: true, padding: '1rem' }
    }
  },
  plugins: []
} satisfies Config;
