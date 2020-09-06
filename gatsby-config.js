module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-styled-jsx`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Spectral Developers`,
        short_name: `SpectralDevs`,
        start_url: `/`,
        description: `Nuestro objetivo principal es dar un servicio optimo a nuestros clientes y hacer que sus negocios puedan dar el siguiente paso a la era digital.`,
        lang: 'es',
        background_color: `#f5f5f5`,
        theme_color: `#3a3c3e`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
        icon_options: {
          purpose: `maskable`
        }
      }
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#4589ee`,
        // Disable the loading spinner.
        showSpinner: true
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `fab4dc7a3ebf80dacf47c43eced87a`
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
