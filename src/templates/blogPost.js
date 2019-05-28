import React from 'react'
import { graphql, Link } from 'gatsby'
import Header from "../components/Header"

const Template = ({data, pageContext}) => {
    console.log(pageContext)
    const {prev, next} = pageContext

    const {markdownRemark} = data
    const title = markdownRemark.frontmatter.title
    const html = markdownRemark.html
    return (
        <div>
            <Header></Header>
            <h1 style={{fontFamily: 'avenir'}}>{title}</h1>
            <div className='blogpost'
                dangerouslySetInnerHTML={{__html: html}}
                style={{fontFamily: 'avenir'}}
            />
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

export const query = graphql`
    query($pathSlug: String!) {
        markdownRemark(frontmatter: {path: {eq: $pathSlug} }) {
            html
            frontmatter {
                title
            }
        }
    }
`

export default Template