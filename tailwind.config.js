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
        lightBlue: colors.lightBlue,
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
        overlay: {
          100: 'rgba(0, 0, 0, 0.1)',
          200: 'rgba(0, 0, 0, 0.2)',
          300: 'rgba(0, 0, 0, 0.3)',
          400: 'rgba(0, 0, 0, 0.4)',
          500: 'rgba(0, 0, 0, 0.5)',
          600: 'rgba(0, 0, 0, 0.6)',
          700: 'rgba(0, 0, 0, 0.7)',
          800: 'rgba(0, 0, 0, 0.8)',
          900: 'rgba(0, 0, 0, 0.9)',
        },
      },
      transitionDuration: {
        DEFAULT: '200ms',
      },
    },
    minWidth: {
      '1/3': '33%',
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'visited', 'group-hover'],
    textDecoration: ['hover', 'focus', 'group-hover'],
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
    borderWidth: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
  purge: {
    enabled: process.env.PURGE_CSS,
    content: ['./src/**/*.js'],
    options: {
      whitelist: ['html', 'body'],
    },
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
