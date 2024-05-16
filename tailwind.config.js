/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        poetsen: ["Poetsen One", "sans-serif"],
        sedan: ["Sedan SC", "sans-serif"],
        freemna: ["Freeman", "sans-serif"],
      },
    },
  },
  plugins: [],
};
