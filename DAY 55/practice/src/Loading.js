import React, { Component } from 'react'
import logo from './logo.svg'
class Loading extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             display:false
        }
    }
    
    componentDidMount(){
    setTimeout(()=>{
        this.setState({
            display:true
        })}
    ,2500)
    }
    render() {
        return (
            <div>
               {this.state.display?<div className="App-header">{console.log("FALSE")}
               <h1>LOADING COMPLETED</h1></div>:<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header></div>} 
            </div>
        )
    }
}

export default Loading
