/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '319px',
        'mobile': '375px',
        'desktop': '1440px'
      },
      colors: {
        orange: 'hsl(26, 100%, 55%)',
        paleorange: 'hsl(25, 100%, 94%)',
        darkblue: 'hsl(220, 13%, 13%)',
        darkgrayblue: 'hsl(219, 9%, 45%)',
        grayblue: 'hsl(220, 14%, 75%)',
        lightgrayblue: 'hsl(223, 64%, 98%)',
        silver: '#d9d9d9',
        mid: '#979797',
        smoke: '#848884',
        dark: '#444444',
        darker: '#0A0708',
        deep: '#030303',
        deeper: '#000300',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      width: {
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '176': '44rem',
        '192': '48rem',
        '208': '52rem',
        '224': '56rem',
        '240': '60rem',
        '256': '64rem',
        '288': '72rem',
        '320': '80rem',
      },
      height: {
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '176': '44rem',
        '192': '48rem',
        '208': '52rem',
        '224': '56rem',
        '240': '60rem',
        '256': '64rem',
        '288': '72rem',
        '320': '80rem',
      },
      backgroundImage: {
        'icon-close': "url('./assets/icon-close.svg')",
        'icon-menu': "url('./assets/icon-menu.svg')",
      },
    },
  },
}

