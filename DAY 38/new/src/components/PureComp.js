import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
    render() {
        return (
            <div>
                Pure COMPONENT {this.props.name}
            </div>
        )
    }
}

export default PureComp
