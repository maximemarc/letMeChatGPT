/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{html,js,jsx,ts,tsx,ejs}"],
  mode: "jit",
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {},
  },
  plugins: [],
};
