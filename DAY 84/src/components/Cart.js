import React, { Component } from 'react'
import CartList from './CartItems'
import {MenuContext} from '../context'

export class Cart extends Component {
    render() {
        return (
            <div>
                hello from cart
                <CartList />
            </div>
        )
    }
}

export default Cart
