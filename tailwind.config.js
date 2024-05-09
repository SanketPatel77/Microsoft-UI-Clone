/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {},
    screens: {
      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "860px",
      // => @media (min-width: 960px) { ... }

      lg: "1082px",
      // => @media (min-width: 1440px) { ... }
      xl: "1400px",
    },
  },
  plugins: [],
};
