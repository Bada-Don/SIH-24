/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'Stylus': ['Stylus BT'],
      'Swis': ['Swis721 BlkEx BT'],
      'Arial': ['Arial']
    },
    extend: {
      lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem',
      }
    },
  },
  plugins: [],
}