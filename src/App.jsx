import "./app.css";
import { useState } from "react";
import Tema1 from "./Components/Tema1/Tema1";
//tema2
import Tema2 from "./Components/Tema 2/Tema2";
//tema3
import Tema3 from "./Components/Tema3/Tema3";
//teama 4
import Tema4 from "./Components/Tema4/Tema4";
//Tema5
import Tema5 from "./Components/Tema5/Tema5";
function App() {
  const [activeTema, setActiveTema] = useState("Tema1"); // Solo guardamos el tema activo

  const activateTema = (tema) => {
    setActiveTema(tema);
  };

  return (
    <>
      <div className="Botones centrar">
        <button id="Tema1" onClick={() => activateTema("Tema1")}>
          Tema 1
        </button>
        <button id="Tema2" onClick={() => activateTema("Tema2")}>
          Tema 2
        </button>
        <button id="Tema3" onClick={() => activateTema("Tema3")}>
          Tema 3
        </button>
        <button id="Tema4" onClick={() => activateTema("Tema4")}>
          Tema 4
        </button>
        <button id="Tema5" onClick={() => activateTema("Tema5")}>
          Tema 5
        </button>
      </div>

      {activeTema === "Tema1" && (
        <div className="container">
          <div className="encabezado centrar">
            <h1> <strong>Tema 1</strong></h1>
          </div>
          <Tema1 />
        </div>
      )}

      {activeTema === "Tema2" && (
         <div className="container">
          <div className="encabezado centrar">
            <h1> <strong>Tema 2</strong></h1>
          </div>
          <Tema2 />
        </div>
      )}

      {activeTema === "Tema3" && (
        <div className="container">
          <div className="encabezado centrar">
            <h1> <strong>Tema 3</strong></h1>
          </div>
          <Tema3 />
        </div>
      )}

      {activeTema === "Tema4" && (
        <div className="container">
          <div className="encabezado centrar">
            <h1> <strong>Tema 4</strong></h1>
          </div>
          <Tema4 />
        </div>
      )}

      {activeTema === "Tema5" && (
        <div className="container">
          <div className="encabezado centrar">
            <h1> <strong>Tema 1</strong></h1>
          </div>
          <Tema5 />
        </div>
      )}
    </>
  );
}

export default App;
