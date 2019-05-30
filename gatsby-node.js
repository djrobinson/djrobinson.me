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
        resolve (
            graphql(
                `
                query {
                    allMdx(
                        filter: {fileAbsolutePath: {regex: "/(posts)/"}} 
                    ) {
                        edges {
                            node {
                                id
                                frontmatter {
                                    path
                                    tags
                                    title
                                }
                            }
                        }
                    }
                }
                `
            ).then(result => {
                if (result.errors) {
                    console.error(result.errors)
                    reject(result.errors)
                }
                const posts = result.data.allMdx.edges

                createTagPages(createPage, posts)

                posts.forEach(({node}, i) => {
                    createPage({
                        path: node.frontmatter.path,
                        component: path.resolve(`./src/components/BlogPost.js`),
                        context: {
                            id: node.id,
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