import React from "react"
import { graphql, Link } from 'gatsby'
import Header from './Header.js'
import MDXRenderer from "gatsby-mdx/mdx-renderer"

const MdxTemplate = ({ data: { mdx }, pageContext }) => {
  const {prev, next} = pageContext
  return (
    <div>
      <Header></Header>
      <h1>{mdx.frontmatter.title}</h1>
      <MDXRenderer>{mdx.code.body}</MDXRenderer>
      <div>
          {
              prev &&
              <Link to={prev.frontmatter.path}>
                  Prev
              </Link>
          }
      </div>
      <div>
          {
              next &&
              <Link to={next.frontmatter.path}>
                  Next
              </Link>
          }
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
      }
      code {
        body
      }
    }
  }
`

export default MdxTemplate