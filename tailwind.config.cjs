/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily:{"serifDisplay":["DM Serif Display", "serif"],"karla":["Karla", "sans-serif"]},
      colors:{"Dark_Violet": "hsl(256, 26%, 20%)",
      "VeryDarkViolet": "hsl(270, 9%, 17%)"}
      
    },
  },
  plugins: [],
}
