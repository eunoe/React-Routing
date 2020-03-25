import React, { Component } from "react";
import Global from "../../Global";
import "./Alumnos.css";

export default class Alumnos extends Component {
  state = {
    alumnos: Global.alumnos,
    status: false
  };

  eliminarAlumno = posicion => {
    var alumnos = this.state.alumnos;
    alumnos.splice(posicion, 1);
    this.setState({ alumnos: alumnos });
  };

  render() {
    return (
      <div>
        <h1>Alumnos</h1>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Edad</th>
              <th>Clase</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {this.state.alumnos.map((alumno, i) => {
              return (
                <tr key={i}>
                  <td>{alumno.nombre}</td>
                  <td>{alumno.apellido}</td>
                  <td>{alumno.edad}</td>
                  <td>{alumno.clase}</td>
                  <td>
                    <a href={"/alumno/" + i}>Ver detalles</a>
                    <button
                      onClick={() => {
                        this.eliminarAlumno(i);
                      }}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p>Al salir de la página los cambios no se guardarán.</p>
      </div>
    );
  }
}
