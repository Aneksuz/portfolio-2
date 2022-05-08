module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primaryblack: "#0E0E0E",
      primarywhite: "#FFFDF0",
      accent: "#0F7FFF",
    },
    extend: {
      fontFamily: {
        Oswald: ['"Oswald"'],
        Oxygen: ['"Oxygen"'],
      },
    },
  },
  plugins: [],
};
