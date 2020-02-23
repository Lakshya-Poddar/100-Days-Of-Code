import React, { Component } from 'react'

class Count extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
        this.change=this.change.bind(this)
    }
    change(){
        this.setState({
            count:this.state.count+1
        })
    }

    render() {
        return (
            <div>
               <h1>VALUE {this.state.count}</h1>
               <button onClick={this.change}>CLICK ME</button> 
            </div>
        )
    }
}

export default Count
