import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"


const HomePage = () => {
    return (
        <div>
            <Helmet>
                <link href="https://fonts.googleapis.com/css?family=Alegreya+SC&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Spectral&display=swap" rel="stylesheet" />
            </Helmet>
            <div className="row">
                <div className="grid">
                    <div className="grid-cell grid-4">
                        hey
                    </div>
                    <div className="grid-cell grid-4">
                        <h1>Danny<br/>Robinson</h1>
                    </div>
                    <div className="grid-cell grid-4">
                        <Link to="/blog">Blog</Link>
                        <Link to="/about">About</Link>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="grid">
                    <div className="grid-cell grid-4">
                        <h1>lorem ipsum     jfoijweij   wg
                            egjwowijgiqjweg
                                ewgjoiwejg
                                    oijweiojwoiejg</h1>
                    </div>
                    <div className="grid-cell grid-4">
                        <h1>Danny Robinson</h1>
                    </div>
                    <div className="grid-cell grid-4">
                        <Link to="/blog">Blog</Link>
                        <Link to="/about">About</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage