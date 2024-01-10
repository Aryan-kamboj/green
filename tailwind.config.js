/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        HelveticaNeue: ['Helvetica Neue', 'sans-serif']

      },
    },
  },
  plugins: [],
}

