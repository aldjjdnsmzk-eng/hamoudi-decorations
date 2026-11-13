/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: 'rgb(var(--color-ivory) / <alpha-value>)',
        charcoal: 'rgb(var(--color-charcoal) / <alpha-value>)',
        stone: 'rgb(var(--color-stone) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        olive: {
          DEFAULT: 'rgb(var(--color-olive) / <alpha-value>)',
          deep: 'rgb(var(--color-olive-deep) / <alpha-value>)',
        },
        clay: {
          DEFAULT: 'rgb(var(--color-clay) / <alpha-value>)',
          deep: 'rgb(var(--color-clay-deep) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: [
          '"IBM Plex Sans Arabic"',
          'Tajawal',
          '"Noto Sans Arabic"',
          '"Segoe UI"',
          'Tahoma',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
