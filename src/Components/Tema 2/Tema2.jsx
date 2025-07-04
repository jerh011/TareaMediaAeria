import Eje1Tem2 from "./Ejercicio 1/Eje1Tem2"
import Eje2Tem2 from "./Ejercicio 2/Eje2Tem2"
import Eje3Tem2 from "./Eje3Tem2";
import { useState } from "react";
import "./Tema2.css"
function Tema2() {
     const [Ejercicio, setEjercicios] = useState("Ejercicio1");
      const activateEjecicio = (ejercicio) => {
        setEjercicios(ejercicio);
      };
return (
    <div className="conteiner">
      
      <div className="ejercicios">

        {Ejercicio==="Ejercicio1"? <Eje1Tem2/>:Ejercicio==="Ejercicio2"? <Eje2Tem2/>:<Eje3Tem2/>}
      
      </div>
      
      <div className="botones">
        <button onClick={() => activateEjecicio('Ejercicio1')}>Ejercicio 1</button>
        <button onClick={() => activateEjecicio('Ejercicio2')}>Ejercicio 2</button>
        <button onClick={() => activateEjecicio('Ejercicio3')}>Ejercicio 3</button>
      </div>

    </div>
)

}
export default Tema2