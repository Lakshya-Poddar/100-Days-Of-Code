import React, { Component } from 'react'

class Api extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             dataval:""
        }
    }
    
    componentDidMount(){
        fetch("http://api.com")
            .then(response => response.json())
            .then(data => this.setState({dataval:data}))
    }
    render() {
        return (
            <div>
                {this.state.dataval}   
            </div>
        )
    }
}

export default Api
