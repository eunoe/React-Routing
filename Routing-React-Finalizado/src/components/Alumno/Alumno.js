import React, { Component } from "react";
import Global from "../../Global";
import "./Alumno.css";

export default class Alumno extends Component {
  alumno = Global.alumnos[this.props.posicion];

  render() {
    return (
      <div>
        <h1>Detalles alumno</h1>
        <h3>{this.alumno.nombre + " " + this.alumno.apellido}</h3>
        <div className="detalles">
          <ul>
            <li>Edad: {this.alumno.edad}</li>
            <li>Clase: {this.alumno.clase}</li>
          </ul>
          <a href="/alumnos">Volver</a>
        </div>
      </div>
    );
  }
}
