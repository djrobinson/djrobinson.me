module.exports = {
    siteMetadata: {
        title: "Danny Robinson's Website",
        description: 'A never ending research project'
    },
    plugins: [
        `gatsby-transformer-remark`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `site`,
                path: `${__dirname}/src/pages/site`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `posts`,
                path: `${__dirname}/src/pages/posts`
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
              name: 'Danny Robinson\'s Blog',
              short_name: 'Danny Robinson',
              start_url: '/',
              background_color: '#663399',
              theme_color: '#663399',
              display: 'minimal-ui',
              icon: 'static/favicon.png',
            },
          },
    ]
}