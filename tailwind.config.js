/** @type {import('tailwindcss').Config} */

// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'forest-green': {
          DEFAULT: '#22573B', // Main deep green
          '50': '#E9F3EC',
          '100': '#D3E7DA',
          '200': '#A7CFB5',
          '300': '#7BB790',
          '400': '#509F6B',
          '500': '#388E56',
          '600': '#2A7C47',
          '700': '#22573B',   // Main deep green (same as DEFAULT)
          '800': '#1A432D',
          '900': '#122F20',   // Darkest green
        },
        'accent-green': {
          DEFAULT: '#558B2F', // Brighter, desaturated green
          'light': '#A3C1AD', // Lighter version for text on dark bg
          'dark': '#447225',  // Darker for hover states
        },
        'warm-beige': { // Used for some section backgrounds
          DEFAULT: '#F5F5DC',
          'light': '#FAFAD2', // Lighter version for hovers if needed
        },
        'cream': { // Primary light background for sections & cards
          DEFAULT: '#FFF8DC',
        },
        'dark-brown': {
          DEFAULT: '#4A3B31', // Main dark brown for text
          'light': '#7D6B5F', // Lighter brown for secondary text
        },
        'muted-terracotta': { // Optional accent if you choose to use it
          DEFAULT: '#B85C38',
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'blob': {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};