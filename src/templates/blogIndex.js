import React from "react"
import { graphql, Link } from "gatsby"
import Header from "../components/Header"

const blogIndexTemplate = ({data}) => {
    const { edges } = data.allMdx
    console.log(edges)
    return (
        <div>
            <Header></Header>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                fontFamily: 'avenir'
            }}>
                {edges.map(edge => {
                    const {frontmatter} = edge.node
                    return (
                        <div 
                            key={frontmatter.path}
                            style={{marginBottom: '1rem'}}
                        >
                            <Link  to={frontmatter.path}>
                                {frontmatter.title}
                            </Link>
                        </div>
                    )
                })}
                <div>
                    <Link to='/tags'>Browse Tags</Link>
                </div>
            </div>
        </div>
    )
}

export const query = graphql`
    query HomepageQuery {
        allMdx (
            filter: {fileAbsolutePath: {regex: "/(posts)/"}},
            sort: {order: DESC, fields: [frontmatter___date]}    
        ){
            edges {
                node {
                    frontmatter {
                        title
                        path
                        date
                    }
                }
            }
        }
    }
`

export default blogIndexTemplate
