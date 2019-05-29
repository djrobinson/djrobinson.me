const path = require('path')

const createTagPages = (createPage, posts) => {
    const AllTagsTemplate = path.resolve('src/templates/allTagsIndex.js')
    const SingleTagTemplate = path.resolve('src/templates/singleTagIndex.js')

    const postsByTag = {}

    posts.forEach(({node}) => {
        if (node.frontmatter.tags) {
            node.frontmatter.tags.forEach(tag => {
                if (!postsByTag[tag]) {
                    postsByTag[tag] = []
                }
                postsByTag[tag].push(node)
            })
        }
    })

    const tags = Object.keys(postsByTag)

    createPage({
        path: '/tags',
        component: AllTagsTemplate,
        context: {
            tags: tags.sort()
        }
    })

    tags.forEach(tagName => {
        const posts = postsByTag[tagName]
        createPage({
            path: `/tags/${tagName}`,
            component: SingleTagTemplate,
            context: {
                posts,
                tagName
            }
        })
    })
}

exports.createPages = (({graphql, actions}) => {
    const { createPage } = actions
    const blogIndexTemplate = path.resolve('src/templates/blogIndex.js')
    const aboutPageTemplate = path.resolve('src/templates/aboutPage.js')

    createPage({
        path: '/blog',
        component: blogIndexTemplate
    })

    createPage({
        path: '/about',
        component: aboutPageTemplate
    })

    const blogsAndTags = new Promise((resolve, reject) => {
        const blogPostTemplate = path.resolve('src/templates/blogPost.js')
        resolve (
            graphql(
                `
                query {
                    allMarkdownRemark( 
                        sort: {order: ASC, fields: [frontmatter___date]},
                        filter: {fileAbsolutePath: {regex: "/(posts)/"}} 
                    ) {
                        edges {
                            node {
                                frontmatter {
                                    path
                                    title
                                    tags
                                }
                            }
                        }
                    }
                }
                `
            ).then(result => {
                const posts = result.data.allMarkdownRemark.edges

                createTagPages(createPage, posts)

                posts.forEach(({node}, i) => {
                    const path = node.frontmatter.path
                    createPage({
                        path,
                        component: blogPostTemplate,
                        context: {
                            pathSlug: path,
                            prev: i === 0 ? null : posts[i - 1].node,
                            next: i === (posts.length - 1) ? null : posts[i + 1].node
                        }
                    })
                    resolve()
                })
            })
        )
    })


    return blogsAndTags
})