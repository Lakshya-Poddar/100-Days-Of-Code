import React from 'react'

function AvatarList(props) {
    return (
        <div className='avatarstyle grow ma4 bg-light-purple shadow-4 dib pa2 tc'>
            <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt='avatar' />
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

