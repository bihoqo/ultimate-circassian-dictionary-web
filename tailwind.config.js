/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/containers/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#13547a",
        "brand-light": "#80d0c7",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
