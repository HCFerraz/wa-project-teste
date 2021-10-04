module.exports = {
  mode: "jit",
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'main-blue-50': 'rgb(232,238,249)',
        'main-blue-100': 'rgb(209,222,242)',
        'main-blue-200': 'rgb(185,205,236)',
        'main-blue-300': 'rgb(139,171,224)',
        'main-blue-400': 'rgb(116,155,217)',
        'main-blue-500': 'rgb(93,138,211)',
        'main-blue-600': 'rgb(70,121,205)',
        'main-blue-700': 'rgb(46,104,199)',
        'main-blue-800': 'rgb(23,88,192)',
        'main-blue-900': 'rgb(0, 71, 186)',
      },
      fontFamily: {
        roboto: ['"Roboto"', '"sans-serif"'],
        poppins: ['"Poppins"', '"sans-serif"']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
