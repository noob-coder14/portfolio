module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'Acme': "'Acme', sans-serif",
        'Patrick': "'Patrick Hand', cursive",
        'Amatic': "'Amatic SC', cursive",
        'Itim': "'Itim', cursive"
      },
      // backgroundImage: theme=>({
      //   'colorPencil': "url('public/color pencil.png')"
      // })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}