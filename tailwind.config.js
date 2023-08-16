/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts, tsx, jsx}",
    "./layouts/**/*.{js,vue,ts, tsx, jsx}",
    "./pages/**/*.{js,vue,ts, tsx, jsx}",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.{js,vue,ts, tsx, jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

