import React, { Component } from 'react'
import Menu from './Menu'
import {MenuContext} from '../context'


export class MenuList extends Component {
    static contextType  = MenuContext
    render() {
        const {menuItems} =this.context
        
        console.log(menuItems)
        return (
            menuItems.map(item=>{
                return <Menu item={item} key={item.id} />
            })
        )
    }
}

export default MenuList
