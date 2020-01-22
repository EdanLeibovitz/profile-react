import React, { Component } from 'react'
import userImage from '../assets/userImage.jpeg'

export default class UserImage extends Component {
    render() {
        return (
            <img className="user-image" src={userImage} alt="background"/>
        )
    }
}
