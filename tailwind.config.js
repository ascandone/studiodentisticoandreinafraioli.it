const colors = require('@tailwindcss/ui/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.tsx', './src/**/*.js', './src/**/*.jsx'],
  theme: {
    colors,
    extend: {},
    fontFamily: {
      ...defaultTheme.fontFamily,
      sans: ['Poppins', ...defaultTheme.fontFamily.sans],
    },
    spacing: {
      ...defaultTheme.spacing,
      ...Object.fromEntries(
        Array.from({ length: 10 }, (_, i) => 64 + 8 * (i + 1)).map(n => [
          n,
          `${0.25 * n}rem`,
        ]),
      ),
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'), //
  ],
}
