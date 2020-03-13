import React,{useContext} from 'react'
import { BookContext } from '../contexts/BookContext'

function Navbar() {
    const {books}= useContext(BookContext)
    return (
        <div className="navbar">
        <h1>NINJA  READING  LIST</h1>
        <p>CURRENTLY YOU HAVE {books.length} BOOKS TO GET THROUGH..... </p>
            
        </div>
    )
}

export default Navbar
