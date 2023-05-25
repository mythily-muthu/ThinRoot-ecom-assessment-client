/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        secondary: "#ffecad",
        primary: "#00b0b5",
        light: "#00000099",
        yellow: "#ffd60a",
        grey: "#f5f3f4"
      }
    },
  },
  plugins: [],
}

