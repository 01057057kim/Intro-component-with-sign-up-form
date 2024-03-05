/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'dark-blue':'hsl(249, 10%, 26%)',
        'gray-blue':'hsl(246, 25%, 77%)',
        'RED':'hsl(0, 100%, 74%) ',
        'GREEN':' hsl(154, 59%, 51%)',
        'BLUE':'hsl(248, 32%, 49%)',
      },
      fontFamily:
      {
        'poppins': 'Poppins, sans-serif',
      },
      boxShadow: {
        'inner-lg': 'inset 0px -5px 0px 0px rgba(0,0,15,0.2)',
      }
    },
  },
  plugins: [],
}
