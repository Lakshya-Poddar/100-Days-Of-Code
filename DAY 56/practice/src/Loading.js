import React, { Component } from 'react'
import Img from './Img'

export class Loading extends Component {
    render() {
        return (
            <div>
               <Img></Img> 
               {console.log("LOADING 2")}
            </div>
        )
    }
}

export default Loading
