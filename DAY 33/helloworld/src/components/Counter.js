import React, { Component } from 'react'


class Counter extends Component {

 
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    increment(){
        // this.setState({
        //     count:this.state.count+1
        // },()=>{console.log('yee',this.state.count)})

        this.setState((preState)=>({
            count:preState.count+1
        }))
        console.log(this.state.count)
    }

    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }
  

    render() {
        return (
            <div>
               count- {this.state.count}
               <button onClick={()=> this.incrementFive()}>INCREMENT</button>
            </div>
        )
    }
}

export default Counter
