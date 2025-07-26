/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#252525",
        secondary: "#B7701B",
        hover: "#A85C01",
      },
    },
    screens: {
      sm: "375px", // mobile
      md: "768px", // tablet
      lg: "1440px", // desktop
    },
  },
  plugins: [],
};
