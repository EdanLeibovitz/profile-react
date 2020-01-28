import React, { Component } from "react";
export default class Circle extends Component {

  render() {
    return (
      <div className="circle">
        <i class={`icon fas fa-${this.props.symbol}-alt`}></i>
        <div>{this.props.text}</div>
      </div>
    );
  }
}
