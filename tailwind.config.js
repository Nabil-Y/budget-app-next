/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#047857",
        secondary: "#D9F99D",
        black: "#171717",
        white: "#F8FAFC",
        grey: "#94A3B8",
      },
    },
  },
  plugins: [],
};
