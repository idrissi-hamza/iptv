/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'trans-right': {
          '0%,100%': { transform: 'translateX(10px)' },
          '50%': { transform: 'translate(0)' },
        },
        'rotate': {
          '0%,100%': { transform: 'rotate(10deg) ' },
          '50%': { transform: 'rotate(0)' },
        },
        'fade-in': {
          '0%': { transform: 'translateY(-2rem)', opacity: '0' },
          '100%': { transform: 'translate(0)', opacity: '1' },
        },
        'fade-out': {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translate(-2rem)', opacity: '0' },
        },
      },

      animation: {
        'trans-right': 'trans-right 3s ease-in-out infinite',
        'rotate': 'rotate 5s ease-in-out infinite',
        'fade-in': 'fade-in 0.5s ease-in-out ',
        'fade-out': 'fade-out .5s ease-in-out ',
      },
    },
  },
  plugins: [],
};
