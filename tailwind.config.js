module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          300: 'hsl(155, 47%, 86%)',
          400: 'hsl(155, 47%, 66%)',
          default: 'hsl(155, 47%, 56%)',
          600: 'hsl(155, 47%, 46%)',
          700: 'hsl(155, 47%, 36%)',
          800: 'hsl(155, 47%, 26%)',
          900: 'hsl(155.1, 90%, 11.2%)',
        },
        'twitter-cta': {
          default: 'hsl(202.8, 89.1%, 53.1%)',
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
      width: {
        'max-content': 'max-content',
      },
      fontFamily: {
        heading: ['Lora'],
        body: ['Roboto'],
      }
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'visited', 'group-hover'],
    textDecoration: ['hover', 'focus', 'group-hover'],
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
    borderWidth: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
};
