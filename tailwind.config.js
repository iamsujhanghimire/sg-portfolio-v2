/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{vue,js,jsx,ts,tsx}', './pages/index.js','./components/**/*.{vue,js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      'titleFont': ['Eurostile-Extended', 'Poppins', 'sans-serif'],
      'subtitleFont':['Darkmode', 'sans-serif'],
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('tailwindcss-text-fill-stroke'),
  ],
}
