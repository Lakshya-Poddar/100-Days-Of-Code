import React, { Component ,createContext } from 'react'
import {menuItems,detailProduct} from './data'

export const MenuContext=createContext();

class MenuContextProvider extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             cart:[...menuItems],
             products:[...menuItems],

        }
    }

    getItem =(id)=>{
        const val = this.state.products.find(item=>item.id===id)
        return val;
    }
    
    increment =(id) =>{
        let tempCart = [...this.state.cart]
        const selectedProduct =tempCart.find(item =>item.id === id)
        const index = tempCart.indexOf(selectedProduct)
        const product =tempCart[index];
        product.count = product.count+1;
        product.total = product.count * product.price;

        this.setState(() =>{
            return{cart:[...tempCart]}
        })
    }

    decrement =(id) =>{
        let tempCart = [...this.state.cart]
        const  selectedProduct=tempCart.find(item => item.id===id)
        const  index = tempCart.indexOf(selectedProduct)
        const product=tempCart[index]
        if(product.count>=1)
        {
        product.count= product.count-1;
        product.total=product.count*product.price  
        }
        
        this.setState(()=>{
            return {cart:[...tempCart]}
        })
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
