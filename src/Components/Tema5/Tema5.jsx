import Ejecicio5_1 from "./Ejercicio 5_1/Ejecicio5_1"
import Ejecicio5_2 from "./Ejeccicio5_2/Ejercicio5_2"
import Eje3Tem5 from "./Ejercicio5_3/Eje3Tem5";
import { useState } from "react"; 
import "./Tema5.css"
function Tema5() {
     const [Ejercicio, setEjercicios] = useState("Ejercicio1");
      const activateEjecicio = (ejercicio) => {
        setEjercicios(ejercicio);
      };
return (
    <div className="conteiner">
      
      <div className="ejercicios">

        {Ejercicio==="Ejercicio1"? <Ejecicio5_1/>:Ejercicio==="Ejercicio2"? <Ejecicio5_2/>:<Eje3Tem5/>}
      
      </div>
      
      <div className="botones">
        <button onClick={() => activateEjecicio('Ejercicio1')}>Ejercicio 1</button>
        <button onClick={() => activateEjecicio('Ejercicio2')}>Ejercicio 2</button>
        <button onClick={() => activateEjecicio('Ejercicio3')}>Ejercicio 3</button>
      </div>

    </div>
)

}
export default Tema5;
