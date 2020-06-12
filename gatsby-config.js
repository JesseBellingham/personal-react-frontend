module.exports = {
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `open sans\:300,600`
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-130655923-2",
        head: true
      }
    },
  ],
  siteMetadata: {
    title: 'Jesse Bellingham',
    description: 'Full stack developer',
    keywords: 'full, stack, software, developer, portfolio',
    url: 'https://www.jessebellingham.com'
  }
};
