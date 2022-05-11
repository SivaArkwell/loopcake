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
    siteImage: `/loopcake-v2.gif`,
    author: `LoopCake`,
  },
};
