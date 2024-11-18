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
        poppins: ["Poppins","sans-serif"],
        montserrat: ["Montserrat","sans-serif"]
      },
      animation: {
        'fade-in-down': 'fade-in-down 1s ease-out',
        'floating': 'float 4s ease-in-out infinite',
        'floating2': 'float 4s ease-in-out infinite 1s',
        'floating3': 'float 4s ease-in-out infinite 2s'
      },
      keyframes: {
        'fade-in-down': {
          '0%':{
            opacity: '0',
            transform: 'translateY(-20px)'
          },
          '100%':{
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'float': {
          '0%': { 
            transform: 'translateY(0)'
          },
          '50%': { 
            transform: 'translateY(-10px)' 
          },
          '100%': { 
            transform: 'translateY(0)'
          }
        }
      }
    },
  },
  plugins: [],
}