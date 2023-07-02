/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'light-color': '#131417',
        'dark-color': '#fff',
        'light-color-alt': '#00000099',
        'dark-color-alt': '#afb6cd',
        'primary-background-color': '#fff',
        'dark-primary-background-color': '#131417',
        'secondary-background-color': '#f1f1f1',
        'dark-secondary-background-color': '#252830',
        'hover-light-color': '#fff',
        'hover-dark-color': '#131417',
        'gradient-color': 'linear-gradient(115deg,#4fcf70,#fad648,#a767e5,#12bcfe,#44ce7b)',
        'transparent-light-color': 'rgba(255,255,255,.05)',

        'transparent-dark-color': 'rgba(0,0,0,.75)',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'xsm': '1.2rem',
        'sm': '1.6rem',
        'md': '2.4rem',
        'lg': '3rem',
        'xl': '4rem',

      },
      screens: {
        'xxl': '1500px',
      }
    }
  },
  darkMode: 'class',



  plugins: [],
}

