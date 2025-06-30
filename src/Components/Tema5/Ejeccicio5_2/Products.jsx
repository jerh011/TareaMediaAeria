function Products({ data }) {
  const { nombre, precio, descuento } = data;
  const precioFinal = (precio * (1 - descuento / 100)).toFixed(2);

  return (
    <div >
      
      <h3>{nombre}</h3>
      <p>Precio original: ${precio}</p>
      <p>Descuento: {descuento}%</p>
      <p><strong>Precio final: €{precioFinal}</strong></p>
    </div>
  );
}
export default Products;
