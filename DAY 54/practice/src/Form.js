import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             display:"HURRAH YOU WON"
        }
    }
    
    handleChange=(event)=>{
        const {checked , name}=event.target
        checked?this.setState({display:"CLICKED"}):this.setState({ display:"HURRAH YOU WON"})
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" />
                    <label>
                    <input type="checkbox" name="clicked" onChange={this.handleChange}/>CLICK ME</label>
                </form>
                {this.state.display}
            </div>
        )
    }
}

export default Form
