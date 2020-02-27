import React, { Component } from 'react'

class MemeGenerator extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             toptext:"",
             bottomtext:"",
             allMemeImgs:[],
             randomImg:"https://cdn.vox-cdn.com/thumbor/6KFVCent801L2drZfUUgQFCz5KA=/22x0:477x303/620x413/filters:focal(22x0:477x303):format(webp)/cdn.vox-cdn.com/imported_assets/1682605/ZU0cbbr.png"
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)

    }
     componentDidMount(){
         fetch("http://cors-anywhere.herokuapp.com/http://api.imgFlip.com/get_memes")
            .then(response => response.json())
            .then(response =>{
                const {memes}=response.data
                 this.setState({allMemeImgs:memes})
            })
     }
     handleChange(event)
     {
        const {name,value} =event.target
        this.setState({
            [name]:value
        })
    }

    handleSubmit(event)
    {
        event.preventDefault()
        const randNum=Math.floor(Math.random()* this.state.allMemeImgs.length)
        const randomMemeImg=this.state.allMemeImgs[randNum].url
        this.setState({
            randomImg:randomMemeImg
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    name="toptext" 
                    type="text" 
                    placeholder="top text" 
                    value={this.state.toptext} 
                    onChange={this.handleChange} />
                    <input 
                    name="bottomtext" 
                    type="text" 
                    placeholder="bottom  text" 
                    value={this.state.bottomtext} 
                    onChange={this.handleChange} />
                    <button>GEN</button>
                </form>
                <div>
                    <img src={this.state.randomImg} />
                    <h2>{this.state.toptext}</h2>
                    <h2>{this.state.bottomtext}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator
