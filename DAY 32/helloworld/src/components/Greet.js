import React from 'react';

// function Greet(){
//     return <h1>HELLO LAKSHYA</h1>
// }

const Greet=(props)=>{
    return(<div><h1>HELLO {props.name}</h1>
    {
        props.children
    }
</div>)}
export default Greet