// import React, { Component } from 'react'

// export class Menu extends Component {
//     render() {
//         return (
//             <div>
//                 {this.props.item.id}{"   "}
//                 <img src={this.props.item.img} />
//                 {this.props.item.title}{"   "}
//                 {this.props.item.info}{"   "}
//                 <br></br>

//             </div>
//         )
//     }
// }

// export default Menu
import React from 'react'

function Menu({item}) {
    return (
        <div>
            <h2 className="text-danger">{item.id}</h2>
            {item.title}
        </div>
    )
}

export default Menu
