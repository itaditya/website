const { fontFamily } = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  theme: {
    fontFamily: {
      heading: ['Lora', fontFamily.serif],
      body: ['Roboto', fontFamily.sans],
    },
    extend: {
      colors: {
        gray: colors.blueGray,
        sky: colors.sky,
        primary: {
          300: 'hsl(155, 47%, 86%)',
          400: 'hsl(155, 47%, 66%)',
          DEFAULT: 'hsl(155, 47%, 56%)',
          600: 'hsl(155, 47%, 46%)',
          700: 'hsl(155, 47%, 36%)',
          800: 'hsl(155, 47%, 26%)',
          900: 'hsl(155.1, 90%, 11.2%)',
        },
        'twitter-cta': {
          DEFAULT: 'hsl(202.8, 89.1%, 53.1%)',
          600: 'hsl(202.8, 78.7%, 47.8%)',
          700: 'hsl(202.8, 78.8%, 42.5%)',
        },
        'twitter-background': 'hsl(208.9, 35.1%, 15.1%)',
      },
      transitionDuration: {
        DEFAULT: '200ms',
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-in-out',
        slide: 'slide 3s linear 1s forwards',
      },
    },
  },
  mode: 'jit',
  purge: {
    content: ['./src/**/*.js'],
  },
};
