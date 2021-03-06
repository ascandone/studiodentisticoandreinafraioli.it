module.exports = {
  siteMetadata: {
    title: 'Studio Andreina Fraioli',
    description: '',
  },
  plugins: [
    `gatsby-plugin-preact`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
