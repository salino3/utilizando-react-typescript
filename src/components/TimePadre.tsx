import React, { Fragment, useState } from "react";
import Timer from './Timer';
import "../style.css";


export default function TimePadre() {


  const [millisegundos, setMillisegundos] = useState(1000);


  return (
    <Fragment>
      <span>Milisegundos {millisegundos}</span>

      <button
        className="btn btn-outline-success"
        onClick={() => setMillisegundos(1000)}
      >
        1000
      </button>
      <button
        className="btn btn-outline-success"
        onClick={() => setMillisegundos(2000)}
      >
        2000
      </button>

      <Timer milisegundos={millisegundos} />
    </Fragment>
  );
}
