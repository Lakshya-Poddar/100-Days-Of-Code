import React, { Component ,createContext } from 'react'
import {menuItems,detailProduct} from './data'

export const MenuContext=createContext();

class MenuContextProvider extends Component {
    render() {
        return (
            <MenuContext.Provider value={{menuItems:menuItems,detailProduct:detailProduct}}>
                {this.props.children}
            </MenuContext.Provider>
        )
    }
}

export default MenuContextProvider
