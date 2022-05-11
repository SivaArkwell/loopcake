require(`dotenv`).config();

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

module.exports = {
  siteMetadata: {
    siteTitle: `LoopCake`,
    siteTitleAlt: `LoopCake - Here To Explore The Digital World`,
    siteHeadline: `LoopCake - Here To Explore The Digital World`,
    siteUrl: `https://loopcake.com/`,
    siteDescription: `Explloring the digital world, one bit at a time`,
    siteLanguage: `en`,
    siteImage: `/loopcake-background-logov1.jpg`,
    author: `LoopCake`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sections`,
        path: `${__dirname}/src/sections`,
      },
    },
    mdx && {
      resolve: `gatsby-plugin-mdx`,
      options: {
        lessBabel: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-theme-ui`,
  ].filter(Boolean),
};
