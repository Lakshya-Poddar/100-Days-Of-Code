import React, { Component , useContext } from 'react'
import {ThemeContext} from '../contexts/ThemeContext'
import { AuthContext } from '../contexts/AuthContext'


// class Navbar extends Component {
//     // static contextType = ThemeContext;

//     render() {
        
//         return (
//             <AuthContext.Consumer>{(authContext)=>(
//                 <ThemeContext.Consumer>{(themeContext)=>{
//                 const {isAuthenticated,toggleAuth}=authContext
//                 const {isLightTheme , light,dark}=themeContext
//                 const theme=isLightTheme?light:dark
//                 return(
//                     <nav style={{background:theme.ui,color:theme.syntax}}>
//                 <h1>CONTEXT APP</h1>
//                 <div onClick={toggleAuth}>
//                     {isAuthenticated?"LOGGED IN": "LOGGED OUT"}
//                 </div>
//                 <ul>
//                     <li>HOME</li>
//                     <li>ABOUT</li>
//                     <li>CONTACT</li>
//                 </ul>
//             </nav>
//                 )
//             }}
            
//             </ThemeContext.Consumer>
//             )}
            
//             </AuthContext.Consumer>
//         )
//     }
// }


function Navbar() {
    const {isLightTheme , light,dark} =useContext(ThemeContext)
    const {isAuthenticated,toggleAuth}= useContext(AuthContext)
    const theme=isLightTheme?light:dark
    return (
        <nav style={{background:theme.ui,color:theme.syntax}}>
                <h1>CONTEXT APP</h1>
                <div onClick={toggleAuth}>
                    {isAuthenticated?"LOGGED IN": "LOGGED OUT"}
                </div>
                <ul>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>CONTACT</li>
                </ul>
            </nav>
    )
}

export default Navbar

