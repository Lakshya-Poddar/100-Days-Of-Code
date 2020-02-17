import React from 'react'
import './Menu.css'
import {Link} from 'react-router-dom'
function Menu() {
    return (
        <div className="Menustyle">
            <ul>
                <li><Link to='/'>HOME</Link></li>
                <li><Link to='About'>ABOUT</Link></li>
                <li><Link to='Contact'>CONTACT</Link></li>
            </ul>
        </div>
    )
}


export default Menu
