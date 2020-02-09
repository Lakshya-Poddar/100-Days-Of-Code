import React, { Component } from 'react'

class UserGreeting extends Component {

constructor(props) {
    super(props)

    this.state = {
         isLoggedIn:false
    }
}


    render() {


        return this.state.isLoggedIn && <div>WELCOME LAKSHYA</div>



        // return(
        //     this.state.isLoggedIn?
        //     <div>LAKSHYA</div>:
        //     <div>GUEST</div>
        // )




        // let message
        // if(this.state.isLoggedIn){
        //     message=<div>Lakshya</div>
        // }
        // else
        //     message=<div>guest</div>

        //     return(<div>{message}</div>)



        // if(this.state.isLoggedIn){
        //     return(
        //         <div>WELCOME LAKSHYA</div>
        //     )
        // }
        // else{
        //     return(
        //         <div>WELCOME GUEST</div>
        //     )
        // }
        // return (
        //     <div>
        //     <div>welcome lakshya
        //         </div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting
