import React from "react"
import { graphql, Link } from 'gatsby'
import Header from '../components/Header'

const AllTagsTemplate = ({data, pageContext}) => {
    console.log(pageContext)

    const { tags } = pageContext
    return (
        <div>
            <Header></Header>
            <div>
                <ul>
                    {tags.map((tagName, index) => {
                        return (
                            <li key={index}>
                                <Link to={`/tags/${tagName}`}>
                                    {tagName}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default AllTagsTemplate