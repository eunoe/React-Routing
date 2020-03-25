import React, { Component } from "react";
import logo from "../../logo.svg";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Routing React</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Este proyecto está destinado a demostrar el uso de Routing en React.
        </p>
      </div>
    );
  }
}
