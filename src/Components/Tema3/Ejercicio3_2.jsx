function Ejercicio3_2() {
  const libros = [
    {
      titulo: "Cien años de soledad",
      autor: "Gabriel García Márquez",
      paginas: 417,
      genero: "Realismo mágico",
    },
    {
      titulo: "1984",
      autor: "George Orwell",
      paginas: 328,
      genero: "Distopía",
    },
    {
      titulo: "El Quijote",
      autor: "Miguel de Cervantes",
      paginas: 863,
      genero: "Clásico",
    },
    {
      titulo: "Fahrenheit 451",
      autor: "Ray Bradbury",
      paginas: 249,
      genero: "Distopía",
    },
    {
      titulo: "Pedro Páramo",
      autor: "Juan Rulfo",
      paginas: 124,
      genero: "Realismo mágico",
    },
    {
      titulo: "Dune",
      autor: "Frank Herbert",
      paginas: 688,
      genero: "Ciencia ficción",
    },
  ];
  const paginasTotales = libros.reduce((total, x) => total + x.paginas, 0);
  const generos = libros.map((libro) => libro.genero);

  const coontgenero = {};

  generos.forEach((genero) => {
    if (coontgenero[genero]) coontgenero[genero]++;
    else coontgenero[genero] = 1;
  });

  return (
    <>
    <h2>Ejececicio 3.2</h2>
    <div className="Ejecicio3_2">
    
    
      <table border="1">
        <tr>
          <th>titulo</th>
          <th>autor</th>
          <th>paginas</th>
          <th>genero</th>
        </tr>

        {libros.map((x) => {
          return (
            <tr>
              <th>{x.titulo}</th>
              <th>{x.autor}</th>
              <th>{x.paginas}</th>
              <th>{x.genero}</th>
            </tr>
          );
        })}
      </table>
      <hr />
      <p>Paginas totales: {paginasTotales}</p>
      <hr />
      <div>
        {generos.map((x) => {
          return <p>{x}</p>;
        })}
        <hr />
        {Object.keys(coontgenero).map((x) => (
          <p key={x}>
            {x}: {coontgenero[x]}
          </p>
        ))}
      </div>
    </div>
        </>
  );
}
export default Ejercicio3_2;
