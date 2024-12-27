/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      backgroundImage: {
        'menu-gradient': 'linear-gradient(180deg, rgba(41, 36, 24, 0.5), transparent)',
        'home-gradient': 'linear-gradient(180deg, hsla(0, 0%, 60%, 0.2), hsla(0, 0%, 48%, 0.2))',
        'icon-gradient': 'linear-gradient(90deg, #ebca65, #f7d973 48%, #ac6d00)',
      },
    },
  },
  plugins: [],
}

