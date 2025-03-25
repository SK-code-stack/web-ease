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
      },
      boxShadow: {
        // TS
         hov: "inset 4px 4px 6px #bebebe,inset -4px -4px 6px #bebebe", 
         upper: " 4px 4px 5px #bebebe, inset -4px -4px 12px #5a5c5b", 
        
        //  upper: "6px 6px 6px #56535a, -6px -6px 6px #ffffff", 
        //  hov: "inset 6px 6px 6px #56535a,inset -6px -6px 6px #ffffff", 
        //  dupper: "6px 6px 6px #bebebe, -6px -6px 6px #5a5c5b", 
        //  dHov: "inset 6px 6px 6px #bebebe,inset -6px -6px 6px #5a5c5b", 
      },
    },
  },
  plugins: [],
};


