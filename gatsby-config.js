module.exports = {
    siteMetadata: {
        title: `Christian Yores`,
        description: `Christian Yores Portfolio`,
        author: `Christian Yores`
    },
    plugins: [
        // css in jsx
        `gatsby-plugin-styled-components`,

        // helmut (seo)
        `gatsby-plugin-react-helmet`,

        // filesystem images
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`
            }
        },

        // for md reading
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `projects`,
                path: `${__dirname}/src/data/projects`
            }
        },

        // for transforming md to html
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    // for images in md
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            quality: 100,
                            withWebp: true
                        }
                    }
                ]
            }
        },

        // image processing
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                defaultQuality: 100
            }
        },

        // pwa manifest
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Christian Yores`,
                short_name: `Christian Yores`,
                start_url: `/`,
                background_color: `#000000`,
                theme_color: `#325BEF`,
                display: `minimal-ui`,
                icon: `src/images/logo.png` // This path is relative to the root of the site.
            }
        }
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ]
};
