module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primaryblack: "#0E0E0E",
        primarywhite: "#FFFDF0",
        accent: "#006BE6",
        accentdark: "#0F7FFF",
      },
      spacing: {
        herospc: "1.785rem",
      },
      fontFamily: {
        Oswald: ['"Oswald"'],
        Oxygen: ['"Oxygen"'],
      },
    },
  },
  plugins: [],
};
