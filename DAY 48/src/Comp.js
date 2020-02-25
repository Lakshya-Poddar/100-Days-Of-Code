import React, { Component } from 'react'

class Comp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
        }
    }
   componentDidMount(){
fetch("/api/people/1")
    .then(response => response.json())
    .then(data =>console.log(data))
}
    render() {
        return (
            <div>
               
            </div>
        )
    }
}

export default Comp
