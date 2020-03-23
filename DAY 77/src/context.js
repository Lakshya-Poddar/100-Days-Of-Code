import React, { Component } from 'react'
import {storeProducts,detailProduct} from './data'

const ProductContext = React.createContext();
//provider

//consumer




class ProductProvider extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             products:[],
             detailProduct:detailProduct
        }
    }

    componentDidMount(){
        this.setProducts();
    }

    setProducts=()=>{
        let tempProducts=[];
        storeProducts.forEach(item =>{
            const singleItem={...item};
            tempProducts=[...tempProducts,singleItem];

        })
        this.setState(()=>{
            return{products:tempProducts}
        })
    }
    
    handleDetail=()=>{
        console.log('hello form detail')
    }
    
    addToCart=(id)=>{
        console.log('hello from add to cart',id);
        
    }

    render() {
        return (
            <ProductContext.Provider value={{...this.state,handleDetail:this.handleDetail,addToCart:this.addToCart}}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer=ProductContext.Consumer;



export  {ProductProvider,ProductConsumer}
