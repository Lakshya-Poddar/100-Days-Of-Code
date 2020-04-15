import React, { Component, createContext } from 'react'
export const NumberContext = createContext();

class NumberProvider extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             totalval:[],
             num:null,
             calledout:[],
             count:1
        }
    }


    generate =()=>{
        let num1= Math.ceil(Math.random()*90)
        while(this.state.calledout.includes(num1))
        {
            num1= Math.ceil(Math.random()*90)
        }
            this.setState(()=>{
                return{
                    num:num1,
                    calledout:[num1,...this.state.calledout],
                    count:this.state.count+1    
                }
            });           
        
    }

    setProducts=()=>{
        let tempProducts=[];
                for(let i=1;i<=90;i++){
                tempProducts=[...tempProducts,i];}
        this.setState(()=>{
            return{totalval:tempProducts}
        })
    }

    componentDidMount (){
        this.setProducts()
    }
    
    render() {
        return (
            <NumberContext.Provider value={{...this.state,
            totalval:this.state.totalval,
                                            generate:this.generate,
                                            num:this.state.num,
                                            calledout:this.state.calledout,
                                            }}>
                {this.props.children}
            </NumberContext.Provider>
        )
    }
}

export default NumberProvider