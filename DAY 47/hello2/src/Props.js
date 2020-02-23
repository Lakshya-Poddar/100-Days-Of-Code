import React from 'react'

function Props(props) {
    return (
        <div>
           <h3>WELCOME {props.name}</h3> 
           <p>Email {props.email}</p>
           <p>Contact Number {props.phno}</p>
        </div>
    )
}

export default Props
