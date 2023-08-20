/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        mobile: 'url(../assets/images/bg-intro-mobile.png)',
        desktop: 'url(../assets/images/bg-intro-desktop.png)'
      },
      colors: {
        red: {
          DEFAULT: 'hsl(0, 100%, 74%)'
        },
        green: {
          DEFAULT: 'hsl(154, 59%, 51%)'
        },
        blue: {
          DEFAULT: 'hsl(248, 32%, 49%)',
          'dark-blue': 'hsl(249, 10%, 26%)',
          'grayish-blue': 'hsl(246, 25%, 77%)'
        }
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
