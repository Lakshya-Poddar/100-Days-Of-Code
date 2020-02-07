import React ,{Component} from 'react';

class Welcome extends Component{
    render(){
        return <h1>HELLO {this.props.name} FROM CLASS</h1>
    }
}

export default Welcome