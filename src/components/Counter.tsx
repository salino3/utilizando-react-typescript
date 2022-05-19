// utilizando TypeScript no hace falta importar 'React'
import { useState } from "react";
import '../style.css';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const incrementar = (numero: number = 1):void => {
     setCounter(counter + numero);
  };

  return (
    <div className="mt-5">
      <h3>Counter</h3>
      <span>Valor: {counter}</span>
      <br />
      <button
        onClick={() => setCounter(0)}
        type="submit"
        className="btn btn-outline-danger mt-2"
      >
        {" "}
        Reset
      </button>
      
      <button
        onClick={() => incrementar(-1)}
        type="submit"
        className="btn btn-outline-warning mt-2"
      >
        -1
      </button>
      <button
        onClick={() => incrementar()}
        type="submit"
        className="btn btn-outline-primary mt-2"
      >
        {" "}
        +1
      </button>
      <button
        onClick={() => incrementar(2)}
        type="submit"
        className="btn btn-outline-primary mt-2"
      >
        +2
      </button>
    </div>
  );
};

export default Counter;
