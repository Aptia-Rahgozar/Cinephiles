/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        color01: "#123524",
        color01Light: "#ADD8E6",
        color02: "#3E7B27",
        color02Light: "#E6E6FA",
      },
    },
  },
  plugins: [],
};
