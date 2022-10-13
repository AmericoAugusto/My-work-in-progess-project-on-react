/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize: {
     xs: 14,
     sm :16,
     md: 18,
     lg: 20,
     xl: 24,
     "2xl": 32
    },
    colors: {
      "black-100": "#121214",
      "gray-100": "#7C7C8A",
      "gray-200": "#202024",
      "gray-300": "#C4C4CC",
      "black": "#000000",
      "white": "#E1E1E6",
      "red-100": "#991B1B",
      "red-200": "#FF453A",
      transparent: "transparent"
      

    },
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif"
      },
    },
  },
  plugins: [],
}
