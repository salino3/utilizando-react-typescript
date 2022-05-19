import React, { Fragment } from "react";
// useState
import Counter from './components/Counter';
import Usuario from "./components/Usuario";
// useEffect
import TimePadre from './components/TimePadre';
import ContadorRed from "./components/ContadorRed";
import Formulario from "./components/Formulario";
import NuevoFormulario from "./components/NuevoFormulario";


function App() {
  return (
    <Fragment>
      <h1>Hola mundo con Typescript</h1>
      <hr />
      <h1>useState:</h1>

      <Counter />

      <Usuario />
      <br />
      <h2>UseEffect - UseRef</h2>
      <hr />

      <TimePadre />
      <br />
      <h2>UseReducer</h2>
      <hr />
      <ContadorRed />
      <hr />
      <br />
      <h2>Custom Hooks</h2>
      <hr />
      <Formulario />
      <br />
      <NuevoFormulario />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </Fragment>
  );
}

export default App;
