import Gallery from "./Ejecicio4_1/Gallery"
import MenuItem from "./Ejercicio4_2/MenuItem"
import Eje3Tem4 from "./Ejercicio4_3/Eje3Tem4";
import { useState } from "react"; 
import  "./Tema4.css"
function Tema4(){
     const [Ejercicio, setEjercicios] = useState("Ejercicio1");
      const activateEjecicio = (ejercicio) => {
        setEjercicios(ejercicio);
      };
return (
    <div className="conteiner">
      
      <div className="ejercicios">

        {Ejercicio==="Ejercicio1"? <Gallery/>:Ejercicio==="Ejercicio2"? <MenuItem/>:<Eje3Tem4/>}
      
      </div>
      
      <div className="botones">
        <button onClick={() => activateEjecicio('Ejercicio1')}>Ejercicio 1</button>
        <button onClick={() => activateEjecicio('Ejercicio2')}>Ejercicio 2</button>
        <button onClick={() => activateEjecicio('Ejercicio3')}>Ejercicio 3</button>
      </div>

    </div>
)

}

export default Tema4