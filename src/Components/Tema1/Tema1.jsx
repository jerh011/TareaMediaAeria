import Ejercicio1_1 from "./Ejercicio1_1";
import Ejercicio1_2 from "./Ejercicio1_2";
import Reloj from "./reloj";
import { useState } from "react";
import "./Tema1.css";

function Tema1() {
  const [Ejercicio, setEjercicios] = useState("Ejercicio1");
  const activateEjecicio = (ejercicio) => {
    setEjercicios(ejercicio);
  };
  return (
    <div className="conteiner">
   
      <div className="ejercicios">

        {Ejercicio==="Ejercicio1"? <Ejercicio1_1/>:Ejercicio==="Ejercicio2"? <Ejercicio1_2/>:<Reloj/>}
      
      </div>
      
      <div className="botones">
        <button onClick={() => activateEjecicio('Ejercicio1')}>Ejercicio 1</button>
        <button onClick={() => activateEjecicio('Ejercicio2')}>Ejercicio 2</button>
        <button onClick={() => activateEjecicio('Ejercicio3')}>Ejercicio 3</button>
      </div>

    </div>
  );
}
export default Tema1;
