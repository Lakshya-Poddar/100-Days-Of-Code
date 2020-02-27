import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             firstname:"",
             lastname:"",
             isFriendly:true,
             favColor:"blue"
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
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="firstname" placeholder="FIRST NAME" onChange={this.handlechange} />
                <input type="text" name="lastname" placeholder="LAST NAME" onChange={this.handlechange} />
                <h1>{this.state.firstname} {this.state.lastname} {this.state.favColor}</h1>

                <label><input type="checkbox" name="isFriendly" checked={this.state.isFriendly} onChange={this.handlechange}/>
                hello</label> 
                <label><input type="radio" name="gender" value="male"  onChange={this.handlechange}/>
                male</label> 
                <label><input type="radio" name="gender" value="male"  onChange={this.handlechange}/>
                female</label>  
                <select value={this.state.favColor} onChange={this.handlechange} name="favColor">
                    <option value="blue">
                    BLUE
                    </option>
                    <option value="red">
                        RED
                    </option>
                    <option value="black">
                        BLACK
                    </option>
                </select>  
                <button>SUBMIT</button>        
            </form>
        )
    }
}

export default Form
