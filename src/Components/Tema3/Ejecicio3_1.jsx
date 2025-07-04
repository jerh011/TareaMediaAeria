function Ejercicio3_1(){
    const peliculas = [
            { titulo: "El Padrino", año: 1972 },
            { titulo: "Pulp Fiction", año: 1994 },
            { titulo: "El Señor de los Anillos", año: 2001 },
            { titulo: "Matrix", año: 1999 },
            { titulo: "Inception", año: 2010 }
]

    const añostotales=peliculas.reduce((total,x)=> total +x.año,0);
 
    const promedio=Math.round(añostotales/peliculas.length);
    return(
        <>
        <h2>Ejececicio 3.1</h2>
        <div className="Ejecicio3_1">
             
            <h3>Top paliculas del mundo mundial</h3>
            <hr/>
            <ul>
                {
                    peliculas.map(x=>{
                        return <li>{x.titulo} {x.año}</li>
                    })
                }
            </ul>
            <hr/>
            <p><strong>Promedio de años: {promedio}</strong></p>

            <hr />
          
        </div>
                </>
    )
}
export default Ejercicio3_1