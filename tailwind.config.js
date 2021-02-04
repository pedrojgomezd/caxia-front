const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.js", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    color: {
      gray: colors.coolGray,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
