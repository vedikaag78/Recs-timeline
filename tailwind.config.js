/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/*/.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./public/img/hero.svg')",
        
      }
    },
  },
  plugins: [],
};