import React, { Component } from 'react'
import MainImage from './MainImage'
import UserImage from './UserImage'
import UserName from './UserName'
import UserTitle from './UserTitle'
import Nav from './Nav'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <MainImage/>
                <div className="inner-container">
                    <UserImage/>
                    <UserName/>
                    <UserTitle/>
                    <Nav/>
                </div>
            </div>
        )
    }
}
