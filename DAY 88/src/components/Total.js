import React, { useContext } from 'react'
import {MenuContext} from '../context'

function Total() {
    const {subTotal,tax,total} =useContext(MenuContext)
    return (
        <div className="ml-auto text-right mt-3 mr-5">
            <h2>SubTotal : $ <span>{subTotal}</span> </h2>  
            <h2>Tax : $ <span>{tax}</span> </h2>
            <h2>Total : $ <span>{total}</span> </h2>           
        </div>
    )
}

export default Total
