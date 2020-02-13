import React, { Component } from 'react'

class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'lakshya'
        }
        console.log('lifecycle a')
    }
    
    static getDerivedStateFromProps(props,state){
        console.log('get derived from a')
        return null
    }
    componentDidMount(){
        console.log('component did mount')
    }
    render() {
        console.log('lifecycle a render')
        return (
            <div>
            <div>
               LifecycleA
            </div></div>
        )
    }
}

export default LifecycleA
