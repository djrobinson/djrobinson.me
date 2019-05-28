import React from "react"
import { graphql, Link } from "gatsby"
import Header from "../components/Header"

const HomePage = () => {
    return (
        <div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                fontFamily: 'avenir'
            }}>
                <h1>Danny Robinson</h1>
                <Link to="/blog">Blog</Link>
                <Link to="/about">About</Link>
            </div>
        </div>
    )
}

export default HomePage