function RestaurantInfo({nombreRestaurante,descripcionRestaurante,direccion,telefono}){

    return (
        <div>
            <h3>Datos del restaurante</h3>
            <p>Nombre:{nombreRestaurante}</p>
            <p>Descripcion del  restaurante:{descripcionRestaurante}</p>
            <p>Direccion:{direccion}</p>
            <p>Telefono:{telefono}</p>
        </div>
    )
}
export default  RestaurantInfo