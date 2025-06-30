function Ejercicio3_1(){
    const peliculas = [
            { titulo: "El Padrino", año: 1972 },
            { titulo: "Pulp Fiction", año: 1994 },
            { titulo: "El Señor de los Anillos", año: 2001 },
            { titulo: "Matrix", año: 1999 },
            { titulo: "Inception", año: 2010 }
]
//reduce  suma todos los valores ingresados 
    const añostotales=peliculas.reduce((total,x)=> total +x.año,0);
    //ayuda a redondiar el promedio 
    const promedio=Math.round(añostotales/peliculas.length);
    return(
        <div>
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
    )
}
export default Ejercicio3_1