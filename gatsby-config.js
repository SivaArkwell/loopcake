require(`dotenv`).config();

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

module.exports = {
  siteMetadata: {
    siteTitle: `LoopCake`,
    siteTitleAlt: `LoopCake - Here To Explore The Digital World`,
    siteHeadline: `LoopCake - Here To Explore The Digital World`,
    siteUrl: `https://loopcake.com/`,
    siteDescription: `Exploring the digital world, one bit at a time`,
    siteLanguage: `en`,
    siteImage: `/loopcake-background-logov1.jpg`,
    author: `LoopCake`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `LoopCake - Here To Explore The Digital World`,
        short_name: `LoopCake`,
        description: `Exploring the digital world, one bit at a time`,
        start_url: `/`,
        background_color: `#141821`,
        display: `standalone`,
        icons: [
          {
            src: `/favicon.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/favicon.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
};
