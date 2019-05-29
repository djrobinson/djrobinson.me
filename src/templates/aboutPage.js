import React from "react"
import Header from '../components/Header'
import { Link, graphql } from 'gatsby'

const aboutPageTemplate = ({data}) => {
    console.log("Data: ", data)
    const html = data.markdownRemark.html;
    const frontmatter = data.markdownRemark.frontmatter;
    const title = frontmatter.title;
    const subtitle = frontmatter.subtitle;

    return (
        <div>
            <Header></Header>
            <div>
                <h1>{title}e</h1>
                <h3>{subtitle}</h3>
                <div className='aboutpage'
                    dangerouslySetInnerHTML={{__html: html}}
                    style={{fontFamily: 'avenir'}}
                />
            </div>
        </div>
    )
}

export const query = graphql`
    query ($path: String!) {
        markdownRemark(frontmatter: {path: {eq: $path} }) {
            html
            frontmatter {
                title,
                subtitle
            }
        }
    }
`

export default aboutPageTemplate