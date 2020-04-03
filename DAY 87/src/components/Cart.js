import React,{useContext} from 'react'
import {MenuContext} from '../context'
import CartList from  './CartItems'
import EmptyCart from './EmptyCart'
import styled from 'styled-components'

function Cart() {
    const {cart} =useContext(MenuContext)

    if(cart.length>0)
    { return (
        <React.Fragment>
        <NAV className="container-fluid text-center d-none d-lg-block bg-dark ">
        <Line></Line>
            <div className="row text-uppercase  ">
                <div className ="col-10 col-lg-2 mx-auto"><h3  className="font">title</h3></div>
                <div className ="col-10 col-lg-2 mx-auto"><h3 className="font">image</h3></div>
                <div className ="col-10 col-lg-2 mx-auto"><h3 className="font">price</h3></div>
                <div className ="col-10 col-lg-2 mx-auto"><h3 className="font">count</h3></div>
                <div className ="col-10 col-lg-2 mx-auto"><h3 className="font">total</h3></div>
            </div>
        </NAV>
            {cart.map(item=><CartList item={item} key={item.id} />)}
        </React.Fragment>
    )}
    else
    {
        return <EmptyCart />
    }
}

export default Cart


const Line = styled.div `
    width:100%;
    height:1px;
    background:#fff; 
    margin-bottom:10px;
`
const NAV =styled.nav `
    color:#fff;
    padding-top:10px;
`