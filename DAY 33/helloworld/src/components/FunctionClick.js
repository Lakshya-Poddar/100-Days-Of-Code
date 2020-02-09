import React from 'react'

function FunctionClick() {
    function clickHandler(){
        console.log('button clicked')
    }



    return (
        <div>
            <button onClick={clickHandler()}>HELLO</button>
        </div>
    )
}

export default FunctionClick
