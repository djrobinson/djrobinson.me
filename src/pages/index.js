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
            <div className="clear-row">
                <div className="grid">
                    <div className="grid-col full-col-3 full-row-2">
                        <div className="row-4 col-6 blue">

                        </div>
                        <div className="row-4 col-6 green">
                            
                        </div>
                        <div className="row-4 col-12 purple">
                            
                        </div>


                    </div>
                    
                    <div className="full-col-4 full-row-9 center-left red">
                        <h1>Danny<br/>Robinson</h1>
                    </div>
                    <div className="full-col-4 full-row-4 orange center">
                        <Link to="/blog">Blog</Link>
                        <Link to="/about">About</Link>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default HomePage