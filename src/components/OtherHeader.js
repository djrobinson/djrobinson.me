import React from "react"
import { Link } from 'gatsby';

const OtherHeader = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontFamily: 'avenir'
        }}>
            <h2>Danny Robinson's Website</h2>
            <Link to="/">Home</Link>
        </div>
    )
}

export default OtherHeader