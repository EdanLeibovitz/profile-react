import React, { Component } from 'react'

export default class Service extends Component {
    render() {
        return (
                <div className="service">{this.props.text}</div>
        )
    }
}
