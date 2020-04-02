import React, { Component ,createContext } from 'react'
import {menuItems,detailProduct} from './data'

export const MenuContext=createContext();

class MenuContextProvider extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             cart:[...menuItems]
        }
    }
    
    increment =(id) =>{
        return console.log("increment clicked");
        
    }

    decrement =(id) =>{
        return console.log("decrement clicked");
        
    }

    render() {
        return (
            <MenuContext.Provider value={{menuItems:menuItems,detailProduct:detailProduct,increment:this.increment,decrement:this.decrement,...this.state}}>
                {this.props.children}
            </MenuContext.Provider>
        )
    }
}

export default MenuContextProvider
