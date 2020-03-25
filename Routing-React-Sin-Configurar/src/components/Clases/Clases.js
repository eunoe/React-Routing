import React, { Component } from "react";
import Global from "../../Global";

export default class Clases extends Component {
  clases = Global.clases;

  render() {
    return (
      <div>
        <h1>Clases</h1>
        <ul>
          {this.clases.map((clase, i) => {
            return (
              <li key={i}>
                <a href={"/clase/" + clase}>{clase}</a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
