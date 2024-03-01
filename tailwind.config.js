/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: ["prettier-plugin-tailwindcss", require("@tailwindcss/forms")],
};