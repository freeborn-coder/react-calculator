module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        dark:'#434051',
        darker:'#363441',
        darkest:'#2E2C37',
        light:'#F4F4F4',
        lighter:'#FBFBFB',
        accent:'#5A7BFF'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
