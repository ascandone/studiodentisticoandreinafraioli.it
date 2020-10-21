const colors = require('@tailwindcss/ui/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    colors,
    extend: {},
    fontFamily: {
      ...defaultTheme.fontFamily,
      sans: ['Poppins', ...defaultTheme.fontFamily.sans],
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'), //
  ],
}
