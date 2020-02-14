import React, { Component } from 'react'
import RegularComp from './RegularComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

class Parentcomp extends Component {

constructor(props) {
    super(props)

    this.state = {
         name:'lakshya'
    }
}

componentDidMount(){
    setInterval(()=>{
        this.setState({
            name:'lakshya'
        })
    },2000)
}

    render() {
        return (
            <div>
                parent componnet
                <MemoComp name={this.state.name}></MemoComp>
                {/* <RegularComp name={this.state.name}></RegularComp>
                <PureComp name={this.state.name}></PureComp>
            </div> */}</div>
        )
    }
}

export default Parentcomp
