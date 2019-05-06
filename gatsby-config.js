module.exports = {
    siteMetadata: {
        title: 'A few thoughts ',
        description: 'A never ending research project'
    },
    plugins: [
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages`
            }
        }
    ]
}