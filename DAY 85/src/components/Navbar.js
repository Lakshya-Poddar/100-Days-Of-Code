import React from 'react'
import img from '../logo.png'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <NavElement>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <img src={img} className="navbar-brand" alt="logo" />
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav ml-auto mx-auto ">
                     <Link to="/"><a class="nav-item nav-link mx-4 active nounderline" href="#">Home <span class="sr-only">(current)</span></a></Link>
                     <Link to="/menu"><a class="nav-item nav-link mx-4" href="#">Menu</a></Link>
                     <Link to="/contact"><a class="nav-item nav-link mx-4" href="#">Contact Us</a></Link>
                     <Link to="/about"><a class="nav-item nav-link mx-4" href="#">About</a></Link>   
                     <Link to="/cart"><a class="nav-item nav-link mx-4 " href="#">Cart</a></Link>
                </div>
                </div>
            </nav>
            
        </NavElement>
    )
}

const NavElement =styled.nav `
.nav-item{
color:#ff9900 !important;
}
.nav-item:hover{
    text-decoration:none !important;
}
Link {
    text-decoration:none !important;
}
.navbar-brand{
    width:200px;
    height:150px
}
`
