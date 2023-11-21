/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "orange" : "#ff8a00",
        "yellow" : "#ffa239",
        "brown" :"#4e413b",
        "secondary" : "#857671",
        "back" : "#2d2013"
      }
    },
  },
  plugins: [],
}

