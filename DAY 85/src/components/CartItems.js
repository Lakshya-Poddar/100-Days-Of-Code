import React from 'react'
import { menuItems } from '../data'

function CartItems({item}) {
    return (
        <div>
        
            hello {item.id} from {item.title}
        </div>
    )
}

export default CartItems
