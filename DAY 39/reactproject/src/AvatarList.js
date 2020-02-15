import React from 'react'

function AvatarList(props) {
    return (
        <div className='avatarstyle ma4 bg-light-purple dib pa2'>
            <img src='https://joeschmoe.io/api/v1/lakshya' alt='avatar' />
            <h1 className=''>
                {props.name}
            </h1>
            <p>
                {props.work}
            </p>
        </div>
    )
}

export default AvatarList

