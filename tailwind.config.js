/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      xs: "320px",
      sm: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      "2xl": "2560px",
    },
    container: {
      center: true,
    },
    colors: {
      primary: "#212121",
      accent: "#303030",
      additional: "#424242",
      neutral: "#f2f2f2",
    },
    fontFamily: {
      primary: ["Montserrat", "sans-serif"],
      accent: ["Poppins", "sans-serif"],
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      lg: "20px",
      xl: "24px",
      "2xl": "30px",
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
