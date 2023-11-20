/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "orange" : "#ff6d24",
        "brown" :"#4e413b",
        "secondary" : "#857671"
      }
    },
  },
  plugins: [],
}

