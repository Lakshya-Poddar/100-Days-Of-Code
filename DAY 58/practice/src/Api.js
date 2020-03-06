import React, { Component } from 'react'

class Api extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             dataval:"",
        }
    }
    handlechange=(event)=>{
        const {name,value}=event.target
        this.setState({
        [name]:value
        })
    }

    componentDidMount(){
        fetch("http://api.com")
            .then(response => response.json())
            .then(data => this.setState({dataval:data}))
    }
    render() {
        return (
            <div>
                {this.state.dataval.name}
            </div>
        )
    }
}

export default Api
