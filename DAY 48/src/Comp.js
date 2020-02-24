import React, { Component } from 'react'

class Comp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:false
        }
        this.change=this.change.bind(this)
    }
    change(){
        this.setState({
            isLoggedIn:!this.state.isLoggedIn
        })
    }
    render() {
        let btntext= this.state.isLoggedIn?"Log in": "Log out"
        return (
            <div>
               {this.state.isLoggedIn?<h1>Logged out</h1>:<h1>Logged In</h1>} 
               <button onClick={this.change}>{btntext}</button>
            </div>
        )
    }
}

export default Comp
