import React from "react";
import "./App.css";
import Router from "./Router";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <div>
      <Menu></Menu>
      <div className="App">
        <Router></Router>
      </div>
    </div>
  );
}

export default App;
