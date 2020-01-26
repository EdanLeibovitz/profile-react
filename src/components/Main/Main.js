import React, { Component } from "react";
import AboutMe from "./AboutMe";
import MyServices from "./MyServices";
import Contact from "./Contact";

export default class Main extends Component {
  render() {
    return (
      <div className="main">
        <AboutMe />
        <div className="left-side-container">
          <MyServices />
          <Contact />
        </div>
      </div>
    );
  }
}
