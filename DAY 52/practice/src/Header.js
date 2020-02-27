import React from 'react'
import download from './download.jpeg'
function Header() {
    return (
        <header>
            <img src={download} alt="hello" />
            <p>MEME GENERATOR</p>
        </header>
    )
}

export default Header
