/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js" // add this line
  ],
  theme: {
    extend: {
       colors: {
        'pantone-130c': '#FF9C04',
        'pantone-cool-gray': '#8B8989',
        'pantone-286c': '#003A7E',
        'pantone-312c': '#0087C0',
        'pantone-pro-black-c': '#000000',
        'black-100': '#000000',
        'black-70': '#4D4D4D',
        'black-50': '#808080',
        'black-45': '#8C8C8C',
        'black-35': '#A5A5A5',
      },
      keyframes: {
        'slide-in-left': {
          '0%': {
            transform: 'translateX(-100%)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1'
          },
        }
      },
      animation: {
        'slide-in-left': 'slide-in-left 0.5s ease-out forwards'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}