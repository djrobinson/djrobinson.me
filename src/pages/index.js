import React from "react"
import { StaticQuery, graphql } from 'gatsby';

const Header = () => {
    return (
        <StaticQuery
            query={graphql`
                query {
                    site {
                        siteMetadata {
                            title
                            description
                        }
                    }
                }
            `}
            render={data => {
                return (
                    <h1>{data.site.siteMetadata.title}</h1>
                )
            }}
        />
    )
}

const Layout = () => {
    return (
        <div>
            <Header />
        </div>
    )
}

export default Layout