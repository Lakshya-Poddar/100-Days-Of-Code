import React, { Component } from 'react'
import CartList from './CartItems'
import {MenuContext} from '../context'

export class Cart extends Component {
    static contextType= MenuContext;
    
     
    render() {
        const {menuItems, detailProduct} =this.context
        return (
            <div>
            {menuItems.map(item=><CartList item={item} key={item.id} />)}
                
            </div>
        )
    }
}

export default Cart
