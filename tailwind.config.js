/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    extend: {
      backgroundImage : {
        'footer_bg' : "url('/src/assets/images/OC 03.svg')",
        'header_bg' : "url('/src/assets/images/header.svg')",
      },
      fontFamily : {
        'poppins' : ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [require("daisyui")],
}

