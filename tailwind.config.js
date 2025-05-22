/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'fadeDown': 'fadeDown 0.5s ease-out forwards',
        'slideUp': 'slideUp 9s linear infinite',
        'rotate-slow': 'rotate 20s linear infinite',
      },
      keyframes: {
        fadeDown: {
          '0%': { opacity: 0, transform: 'translateY(-10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideUp: {
          '0%, 16.66%, 100%': { 
            transform: 'translateY(110%)',
            visibility: 'visible',
          },
          '33.33%, 50%': { 
            transform: 'translateY(0)',
            visibility: 'visible',
          },
          '66.66%, 83.33%': { 
            transform: 'translateY(-110%)',
            visibility: 'hidden',
          },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
};