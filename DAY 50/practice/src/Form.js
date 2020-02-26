import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             firstname:"",
             lastname:""
        }
        this.handlechange=this.handlechange.bind(this)
    }
    
    handlechange(event){
        this.setState({
            [event.target.name]:event.target.value,
        })
    }

    render() {
        return (
            <form>
                <input type="text" value={this.state.firstname} name="firstname" placeholder="FIRST NAME" onChange={this.handlechange} />
                <input type="text" value={this.state.lastname} name="lastname" placeholder="LAST NAME" onChange={this.handlechange} />
                <h1>{this.state.firstname} {this.state.lastname}</h1>
                
            </form>
        )
    }
}

export default Form
