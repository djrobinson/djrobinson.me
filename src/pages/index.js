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
            <div style={{
                display: 'flex',
                height: '100vh',
                width: '100vw',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
            <div
                style={{
                    marginLeft: "18%",
                    marginBottom: "10%" 
                }}
            >
                <h1
                    style={{
                        margin: 0,
                        padding: 0
                    }}
                >Danny</h1>
                <h1 style={{
                        margin: 0,
                        padding: 0
                    }}>Robinson</h1>
            </div>
            <div style={{
                display: 'flex',
                height: '100vh',
                width: '100vw',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Link to="/blog">Blog</Link>
                <Link to="/about">About</Link>
            </div>
                
            </div>
            <div className="row">
                <div className="Grid">
                    <div className="Grid-cell">aiojwgoijweoigjweiogj</div>
                    <div className="Grid-cell">Sup yo</div>
                    <div className="Grid-cell">Howdy punk</div>
                </div>
            </div>
        </div>
    )
}

export default HomePage