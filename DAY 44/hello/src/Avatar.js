import React from 'react'
import './Avatar.css'
import 'tachyons'
import AvatarList from './AvatarList'
function Avatar(props) {
    return (
        <div className='mainpage'>
        <h1>WELCOME TP AVATAR WORLD</h1>
        <AvatarList id='1' name='lakshya' work='web developer'></AvatarList>
        <AvatarList id='2' name='poddar' work='web developer'></AvatarList>
        <AvatarList id='3' name='l.poddar' work='web developer'></AvatarList>
        <AvatarList id='4' name='lakshyapoddar' work='web developer'></AvatarList>

        <button>SUBSCRIBE</button>
        </div>
    )
}

export default Avatar
