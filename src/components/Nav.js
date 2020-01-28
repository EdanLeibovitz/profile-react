import React, { Component } from 'react'
import Circle from './Circle';

export default class Nav extends Component {
    render() {
        return (
            <div className="nav">
                <Circle text="בדיקה 1" symbol="mobile"/>
                <Circle text="בדיקה 2" symbol="mobile"/>
                <Circle text="בדיקה 3" symbol="mobile"/>
                <Circle text="בדיקה 4" symbol="mobile"/>
                <Circle text="בדיקה 5" symbol="mobile"/>
                <Circle text="בדיקה 6" symbol="mobile"/>
            </div>
        )
    }
}
