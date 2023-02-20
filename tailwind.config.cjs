/* eslint-disable @typescript-eslint/semi */
/* eslint-disable comma-dangle */
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', ...defaultTheme.fontFamily.sans,],
      },
      colors: {
        main: '#FC4747',
        secondary: '#161D2F',
        accent: '#54698F',
        dark: '#10141E',
      },
      screens: {
        xsm: '375px',
        '1xl': '1440px',
      },
    },
  },
  plugins: [],
}
