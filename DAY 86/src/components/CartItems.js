import React,{useContext} from 'react'
import {MenuContext} from '../context'  
import styled from 'styled-components'

function CartItems({item}) {
    const {increment,decrement} =useContext(MenuContext)
    return (
        <Func>
            <div className="container-fluid my-2 text-center">
            <div className="row text-uppercase mx-auto">
               
                <div className ="col-10 col-lg-2 mx-auto my-3 "><b>{item.title}</b></div>
                <div className ="col-10 col-lg-2 mx-auto"><img style={{width:'4rem',height:'4rem'}} src={item.img} className="img-fluid" alt="product" /></div>
                <div className ="col-10 col-lg-2 mx-auto my-3">
                <span className="d-lg-none">PRICE : </span>
                <b>$</b> {item.price}
                </div>
                <div className ="col-10 col-lg-2 mx-auto my-3">
                <div className="d-flex justify-content-center text-center align-items-center">
                    <span className="btn func" onClick={()=>increment(item.id)}>+</span>
                    <span className="btn func">{item.count}</span>
                    <span className="btn func" onClick={()=>decrement(item.id)}>-</span>
                </div>
                 </div>
                <div className ="col-10 col-lg-2 mx-auto my-3">
                <span className="d-lg-none">TOTAL : </span>
                <b>$</b>{item.total}</div>
                
            </div>
            <hr></hr>
            </div>
        </Func>
    )
}

export default CartItems

const Func=styled.div `
font-family: 'Comic Neue', cursive;
.func{
    border:1px solid #000;
    margin:1px;
}
.func:hover{
    background:#000;
    color:#fff;
}
b{
    font-size:23px;
}
`