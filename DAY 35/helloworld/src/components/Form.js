import React, { Component } from 'react';





class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             comments:'',
             topic:'react'
        }
    }
    handelUsernameChange =(event)=>{
        this.setState({
            username:event.target.value
        })
    }
    handelCommentsChange =(event)=>{
        this.setState({
            comments:event.target.value
        })
    }
    handelTopicChange =(event)=>{
        this.setState({
            topic:event.target.value
        })
    }

    render() {
        return (
            <div>
                <label>Username</label>
                <input type='text' value={this.state.username} onChange={this.handelUsernameChange}></input>
                <label>comments</label>
                <textarea value={this.state.comments} onChange={this.handelCommentsChange}></textarea>
                <label>topic</label>
                <select value={this.state.topic} onChange={this.handelTopicChange}>
                    <option value="react">React</option>
                    <option value="angular">angular</option>
                    <option value="vue">vue</option>
                </select>
                <button type="submit" >SUBMIT </button>
            </div>
        )
    }
}

export default Form
