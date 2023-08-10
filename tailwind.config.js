/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        blue: "hsl(223, 87%, 63%)",
        paleBlue: " hsl(223, 100%, 88%)",
        lightRed: "hsl(354, 100%, 66%)",
        gray: "hsl(0, 0%, 59%)",
        veryDarkBlue: "hsl(209, 33%, 12%)",
      },
      fontSize: {
        bodyCopy: "20px",
      },
      fontFamily: {
        franklin: "Libre Franklin",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
