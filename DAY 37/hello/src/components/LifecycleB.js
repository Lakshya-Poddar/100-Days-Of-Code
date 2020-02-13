import React, { Component } from 'react'

class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'lakshya'
        }
        console.log('lifecycle b')
    }
    
    static getDerivedStateFromProps(props,state){
        console.log('get derived from b')
        return null
    }
    componentDidMount(){
        console.log('component did mountb')
    }
    render() {
        console.log('lifecycle a render b')
        return (
            <div>
               LifecycleA 
            </div>
        )
    }
}

export default LifecycleA
