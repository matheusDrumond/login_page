/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*{html, js}'],
  theme: {
    extend: {
      keyframes: {
        upDown:{
          '0%': {},
          '33%': {transform: 'translateY(3em)'},
          '66': {trasform: 'translateY(-6em)'},
          '100%': {translate: 'translateY(3em)'}
        }
      },
      animation: {
        upDown: 'upDown 6s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}

