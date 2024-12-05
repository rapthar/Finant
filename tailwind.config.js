/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          50: '#2d2d2d',
          100: '#262626',
          200: '#1f1f1f',
          300: '#1a1a1a',
          400: '#171717',
          500: '#121212',
          600: '#0f0f0f',
          700: '#0a0a0a',
          800: '#050505',
          900: '#000000'
        }
      }
    },
  },
  plugins: [],
};
