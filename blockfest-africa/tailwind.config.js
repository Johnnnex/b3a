/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./layout/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./reusable component/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        poppins: ['Poppins', "sans-serif"],
        satoshi: ['Satoshi', "sans-serif"],
        eScript: ['Euphoria Script', 'cursive'],
      },
    },
  },
  plugins: [],
}

