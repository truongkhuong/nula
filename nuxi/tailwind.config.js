/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts,jsx,tsx}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    spacing: {
      0: '0',
      1: '0.4rem',
      2: '0.8rem',
      3: '1.6rem',
      4: '2.4rem',
      5: '3.2rem',
      6: '4.8rem',
      '2x': '2rem',
      '4x': '4rem',
      '6x': '6rem',
      '8x': '8rem',
    },
    fontSize: {
      xl: '1rem',
      sm: '1.2rem',
      base: '1.4rem',
      lg: '1.6rem',
      xl: '2rem',
    },
    extend: {},
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: '3.2rem', fontWeight: 700 },
        'h2': { fontSize: '2.4rem', fontWeight: 700 },
        'h3': { fontSize: '2rem', fontWeight: 700 },
        'h4': { fontSize: '1.6rem', fontWeight: 700 },
      })

      // addBase({
      //   'html': { fontSize: "calc(min(100vw, 1440px) * 10 / 1440)" },
      // })
    })
  ],
}

