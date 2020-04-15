import React,{useContext} from 'react'
import {NumberContext} from '../context'
import styled from 'styled-components'

function Visible() {
    const {generate , num,totalval,calledout} =useContext(NumberContext)


    return (
        <Item className="container-fluid">
        <span className="row ml-auto mx-auto text-center">
                            {totalval.map((item)=> 
                            {
                            return <div key={item} className="col-1 p-1 m-1 item"><div className={calledout.includes(item)?"found":"notfound"}  >
                                {item}
                            </div>
                            </div>
                            })}
                    </span>
                    <Gen className="btn mr-0 pr-0 ml-0 pl-0 mt-3"  onClick={()=>generate()} >Generated Number : {num} </Gen>
                    <Gen className="btn  mt-1 " >Start Again (RESET)</Gen>
        </Item>

    )
}

export default Visible

const Item =styled.div 
`
    align-items:center;
    justify-content:center;
    margin-left:2.5%;
    overflow-X:hidden;

    .found{
        background:#000 !important;
        color:#fff;
        font-weight:700;
    }

.item{
    border:1px solid white;
    
}
`

const Gen =styled.div
`
  width:100%;
  border:2px solid #000;
  text-align:center;
  color:#000;
    background:#fff;
  &:hover{
    background:#000;
  color:#fff;
    
  }
`
