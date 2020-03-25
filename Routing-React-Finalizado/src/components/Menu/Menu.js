import React, { Component } from "react";
import "./Menu.css";

export default class Menu extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/clases">Clases</a>
            </li>
            <li>
              <a href="/alumnos">Alumnos</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
