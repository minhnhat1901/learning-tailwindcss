/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
      extend: {
        colors: {
          brand: {
            light: '#3AB0FF',
            DEFAULT: '#0081C9',
            dark: '#005F8F',
          },
        },
      },
    },
  plugins: [require('@tailwindcss/forms')],
}