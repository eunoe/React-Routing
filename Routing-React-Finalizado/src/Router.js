import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Alumnos from "./components/Alumnos/Alumnos";
import Alumno from "./components/Alumno/Alumno";
import Clases from "./components/Clases/Clases";
import Clase from "./components/Clase/Clase";

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/alumnos" component={Alumnos} />
          <Route exact path="/clases" component={Clases} />
          <Route
            exact
            path="/alumno/:posicion"
            render={props => {
              var posicion = props.match.params.posicion;
              return <Alumno posicion={posicion} />;
            }}
          />
          <Route
            exact
            path="/clase/:clase"
            render={props => {
              var clase = props.match.params.clase;
              return <Clase clase={clase} />;
            }}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
