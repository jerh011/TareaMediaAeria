import Ejercicio3_1 from "./Ejecicio3_1"
import Ejercicio3_2 from "./Ejercicio3_2"
import Ejercicio3_3 from "./Eje3Tem3/Ejercicio3_3";
import { useState } from "react";
import "./Tema3.css"
function Tema3(){
     const [Ejercicio, setEjercicios] = useState("Ejercicio1");
      const activateEjecicio = (ejercicio) => {
        setEjercicios(ejercicio);
      };
return (
    <div className="conteiner">
      
      <div className="ejercicios">

        {Ejercicio==="Ejercicio1"? <Ejercicio3_1/>:Ejercicio==="Ejercicio2"? <Ejercicio3_2/>:<Ejercicio3_3/>}
      
      </div>
      
      <div className="botones">
        <button onClick={() => activateEjecicio('Ejercicio1')}>Ejercicio 1</button>
        <button onClick={() => activateEjecicio('Ejercicio2')}>Ejercicio 2</button>
        <button onClick={() => activateEjecicio('Ejercicio3')}>Ejercicio 3</button>
      </div>

    </div>
)

}
export default Tema3
/*
 {
  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h1>🌦️ Sistema de Clima</h1>
      < weatherData={weatherExample} />
    </div>
  );
}



*/