const colors = require('@tailwindcss/ui/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

const spacing = {
  px: '1px',
  '0': '0',
  '1': '0.25rem',
  '2': '0.5rem',
  '3': '0.75rem',
  '4': '1rem',
  '5': '1.25rem',
  '6': '1.5rem',
  '8': '2rem',
  '10': '2.5rem',
  '12': '3rem',
  '16': '4rem',
  '20': '5rem',
  '24': '6rem',
  '32': '8rem',
  '40': '10rem',
  '48': '12rem',
  '56': '14rem',
  '64': '16rem',
}

module.exports = {
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
