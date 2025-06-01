/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#827AF9',
        'secondary': 'rgb(171, 178, 191)',
        'background': 'rgb(40, 44, 51)',
        'text': 'rgb(51, 51, 51)'
      },
      keyframes: {
        float: {
          '0%, 100%': {
            transform: 'translatey(0px)',
          },
          '50%': {
            transform: 'translatey(-20px)',
          }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite'
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}