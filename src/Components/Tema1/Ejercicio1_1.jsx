
function Ejercicio1_1() {
  const nombre = "Jerh011"
  const edad = 26
  const ciudad = "Cd.Obregon"
  const profesion = "Estudiante de Ingenieria gestion y desarrollo de software"
  const pasatiempos = ["Video Juegos", "Programar", "Viajar"]
  const colorFavorito = "Azul metalico"
  return (
    <div className="Ejercicio1_1">
      <h2>Ejercicio 1.1</h2>
      <p>Nombre:{nombre}</p>
      <p>Edad:{edad}</p>
      <p>Ciudad:{ciudad}</p>
      <p>Profecion:{profesion}</p>
      <ul>
         {pasatiempos.map(x=>{
          return <li>{x}</li>
         })}
      </ul>  
      <p>Color Faborito:{colorFavorito}</p>
    </div>
  );
}
export default Ejercicio1_1;