/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customRed: '#CE2A3A',
        customBeige: '#F7E5BD',
        customGray: '#333333',
        customBlack: '#000000'
      },
      fontFamily: {
        'source-sans': ['Source Sans Pro', 'sans-serif']
      }
    },
  },
  plugins: [],
}
