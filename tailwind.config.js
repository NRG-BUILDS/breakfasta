/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#344E41",
      },
      borderRadius: {
        20: "20px",
        30: "30px",
        40: "40px",
      },
    },
  },
  plugins: [],
};
