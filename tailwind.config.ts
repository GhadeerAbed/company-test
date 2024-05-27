/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./page.tsx",
    "./src/**/*.{js,jsx,tsx,ts}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#17AA9D",
        secondary: "#8C8C8C",
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
      boxShadow: {
        customShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.12)",
        customShadow1: "4px 4px 0px 0px rgba(0, 0, 0, 4%)",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
