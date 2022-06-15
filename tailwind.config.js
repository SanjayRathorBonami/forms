/** @type {import('tailwindcss').Config} */
module.exports = {

  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors : {
      "main" : {
        "m" : "#0771D8",
        "l" : "",
        "d" : ""

      },
      "white" : "#fff",
      "error" : "#F64225",
      "formbg" : "#F9FAFB"

    },

    extend: {},
  },
  plugins: [],
}
