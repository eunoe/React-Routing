import React, { Component } from "react";
import Global from "../../Global";
import "./Clase.css";

export default class Clase extends Component {
  state = {
    alumnos: Global.alumnos
  };

  componentDidMount() {
    this.filtrarAlumnos(this.props.clase);
  }

  filtrarAlumnos = clase => {
    var alumnos = this.state.alumnos;

    var alumnosclase = alumnos.filter(x => x.clase === clase);
    this.setState({ alumnos: alumnosclase });
  };

  render() {
    return (
      <div>
        <h1>Clase {this.props.clase}</h1>
        <h3>Alumnos</h3>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Edad</th>
            </tr>
          </thead>
          <tbody>
            {this.state.alumnos.map((alumno, i) => {
              return (
                <tr key={i}>
                  <td>{alumno.nombre}</td>
                  <td>{alumno.apellido}</td>
                  <td>{alumno.edad}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <a href="/clases">Volver</a>
      </div>
    );
  }
}
