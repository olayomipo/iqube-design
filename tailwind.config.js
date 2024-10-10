/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'product-sans': ['Product Sans', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0px 6px 10px 0px #211E4314',
      },
      backgroundImage: {
        'gradient': "url('src/assets/bgv55.svg')",
        'gradient-to-b': 'linear-gradient(180deg, var(--tw-gradient-stops))',

      },
      colors: {
        peach: '#FFDAB9',
        'pale-yellow': '#FFFACD',
        'custom-yellow-1': 'rgba(242, 201, 76, 0.2)',
        'custom-yellow-2': 'rgba(242, 153, 74, 0.2)',
      },
      breakpoints: {
        'xs': '480px', // Very small screens
      },
    },
  },
  plugins: [],
}

