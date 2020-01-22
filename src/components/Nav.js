import React, { Component } from 'react'
import Circle from './Circle';

export default class Nav extends Component {
    render() {
        return (
            <div className="nav">
                <Circle/>
                <Circle/>
                <Circle/>
                <Circle/>
                <Circle/>
                <Circle/>
            </div>
        )
    }
}
