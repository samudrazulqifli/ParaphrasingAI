/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage : {
        'footer_bg' : "url('/src/assets/images/footer.png')",
        'header_bg' : "url('/src/assets/images/header.png')",
      },
      fontFamily : {
        'poppins' : ['Poppins', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
};
