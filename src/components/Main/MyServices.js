import React, { Component } from "react";
import Service from "./Service";
export default class MyServices extends Component {
  render() {
    return (
      <div className="my-services inner-container margin-tb">
        <h2>השירותים שאני נותן</h2>
        <div>
            <Service text="שירות א"/>
            <Service text="שירות ב"/>
            <Service text="שירות ג"/>
            <Service text="שירות ד"/>
            <Service text="שירות ה"/>
        </div>
      </div>
    );
  }
}
