module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
    ...(process.env.NODE_ENV !== 'production'
      ? []
      : [
          require('@fullhuman/postcss-purgecss')({
            content: ['./src/**/*.tsx', './src/**/*.js', './src/**/*.jsx'],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
          }),
        ]),
  ],
}
