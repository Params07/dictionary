module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily :{
        'Rampart':["Rampart One", "cursive"],
          'Roboto':["Roboto"],
          'Irish':["Irish Grover"],
        'ms':["Bitter"],
        'AF':["Abril","Fatface"],
        'Barlow':["Barlow","Semi","Condensed"]
    },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
