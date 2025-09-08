/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        Rubik: ["Rubik", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        brand: {
          DEFAULT: "#16a34a",
          light: "#166534",
          dark: "#166534",
        },
      },
    },
  },
  plugins: [],
};
