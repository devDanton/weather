/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#C2BFF4",
        fontFamily: {
          regular: 'Lato_400_regular',
          bold: 'Lato_700_Bold',
          extrabold: 'Lato_900_Black',
        },
      },
      plugins: [],
    }
  }
}
