import React, { Component } from 'react'
import mainImage from '../assets/mainImage.jpeg'

export default class MainImage extends Component {
    render() {
        return (
            <img className="main-image" src={mainImage} alt="background"/>
        )
    }
}
