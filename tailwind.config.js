/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/script.js'],
  theme: {
    extend: {
      colors : {
        'background' : '#111827'
      },
      backgroundImage: {
        'custom-gradient' : 'linear-gradient(to right, #69D9AF, #39BDF5)',
      }
    },
  },
  plugins: [],
}

