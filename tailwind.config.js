/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html'],
  purge: ['./public/index.html'],
  theme: {
    extend: {},
    minWidth: {
      375: '375px',
    },
    colors: {
      VeryDarkDesaturatedBlue: 'hsl(238, 29%, 16%)',
      SoftRed: 'hsl(14, 88%, 65%)',
      BgSoftViolet: 'hsl(273, 75%, 66%)',
      BgSoftBlue: 'hsl(240, 73%, 65%)',
      TxtVeryDarkGrayishBlue: 'hsl(237, 12%, 33%)',
      TxtDarkGrayishBlue: 'hsl(240, 6%, 50%)',
      DivLightGrayishBlue: 'hsl(240, 6%, 50%)',
      white: 'hsl(0, 100%, 100%)',
      noColor: 'hsla(0, 0%, 0%, 0)',
    },
    fontWeight: {
      400: '400',
      700: '700',
    },
  },
  plugins: [],
};
