const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'Fredericka-the-Great': 'Fredericka the Great'
      },
      fontWeight: {
        'lighter': 'lighter',
        'bolder': 'bolder',
        '100': 100,
        '200': 200,
        '300': 300,
        '400': 400,
        '500': 500,
        '600': 600,
        '700': 700,
        '800': 800,
        '900': 900
      },
      cursor: {
        'none': 'none',
        'progress': 'progress',
        'copy': 'copy',
        'col-resize': 'col-resize',
        'zoom-in': 'zoom-in',
        'zoom-out': 'zoom-out'
      },
      transitionDuration: {
        '1500': '1500ms',
        '2000': '2000ms',
        '2500': '2500ms',
        '3000': '3000ms',
        '3500': '3500ms',
        '4000': '4000ms',
        '4500': '4500ms',
        '5000': '5000ms'
      },
      colors
    },
  },
  variants: {
    extend: {
      textTransform: ['hover', 'focus'],
      borderWidth: ['hover', 'focus']
    },
  },
  plugins: [
    require('@afancylab/afancy')
  ]
}
