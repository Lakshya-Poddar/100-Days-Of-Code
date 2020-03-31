import React from 'react'
import img from '../logo.svg'
import styled from 'styled-components'
export default function Navbar() {
    return (
        // <NavElement>
        //     <nav class="navbar navbar-expand-sm navbar-dark ">
        //         <img src={img} className="navbar-brand" alt="logo" />
        //         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        //             <span class="navbar-toggler-icon"></span>
        //         </button>
        //         <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        //         <div class="navbar-nav ">
        //         <a class="nav-item nav-link mx-5 active" href="#">Home <span class="sr-only">(current)</span></a>
        //         <a class="nav-item nav-link mx-5" href="#">Menu</a>
        //         <a class="nav-item nav-link mx-5" href="#">Contact Us</a>
        //         <a class="nav-item nav-link mx-5" href="#">About</a>
        //         </div>
        //         </div>
        //     </nav>
            
        // </NavElement>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown link
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
    )
}

const NavElement =styled.nav `
background : #0000ff !important;
`
