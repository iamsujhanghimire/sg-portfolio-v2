/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{vue,js,jsx,ts,tsx}', './pages/index.js','./components/**/*.{vue,js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      'titleFont': ['Montserrat', 'sans-serif'],
      'subtitleFont':['Raleway', 'sans-serif'],
      'bodyFont':['Source Sans Pro','sans-serif']
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('tailwindcss-text-fill-stroke'),
  ],
}
