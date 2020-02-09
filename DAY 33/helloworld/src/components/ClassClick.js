import React, { Component } from 'react'

class ClassClick extends Component {
    clickHandler(){
        console.log('YOU CLICKED THE BUTTON')
    }
    
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>CLICK ME</button>
            </div>
        )
    }
}

export default ClassClick
