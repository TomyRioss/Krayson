/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        oswald: ["oswald","sans-serif"],
        poppins: ["Poppins","sans-serif"]
      }
    },
  },
  plugins: [],
}