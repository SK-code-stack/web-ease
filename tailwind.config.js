/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {

      colors: {
        // mydark:"#202216",  c9
        // mylight:"#F2DE9B",c9
        mydark:"#2E2E2E", 
        mylight:"#D6CFE1",
        mytArea:"#3e3e40",
        mytAreaLight:"#e9e4f2"
      },
      boxShadow: {
        // TS
        //  hov: "inset 4px 4px 6px #bebebe,inset -4px -4px 6px #bebebe", 
        //  upper: " 4px 4px 5px #bebebe, inset -4px -4px 12px #5a5c5b", 
        
         upper: "6px 6px 6px #56535a, -6px -6px 6px #ffffff", 
         hov: "inset 6px 6px 6px #56535a,inset -6px -6px 6px #ffffff", 
         dupper: "6px 6px 6px #121212, -6px -6px 6px #4a4a4a", 
         dHov: "inset 6px 6px 6px #121212,inset -6px -6px 6px #4a4a4a", 
        //  buttons 
         Bupper: "3px 3px 3px #56535a, -3px -3px 3px #ffffff", 
         Bact: "inset 3px 3px 3px #56535a,inset -3px -3px 3px #ffffff", 
         Bdupper: "3px 3px 3px #121212, -3px -3px 3px #4a4a4a", 
         Bdact: "inset 3px 3px 3px #121212,inset -3px -3px 3px #4a4a4a", 
      },
      fontFamily: {
        myfont: ["Playfair Display", "serif"],
      }
    },
  },
  plugins: [],
};


