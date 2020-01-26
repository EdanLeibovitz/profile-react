import React, { Component } from "react";

export default class MyServices extends Component {
  render() {
    return (
      <div className="my-services inner-container margin-tb">
        <h2>השירותים שאני נותן</h2>
        <div>
          <div className="service">שירות א</div>
          <div className="service">שירות ב</div>
          <div className="service">שירות ג</div>
          <div className="service">שירות ד</div>
          <div className="service">שירות ה</div>
        </div>
      </div>
    );
  }
}
