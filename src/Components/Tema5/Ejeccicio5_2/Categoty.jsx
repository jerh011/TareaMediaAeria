import Products from "./Products";
function Category({ nombre, productos }) {
  return (
    <div className="category">
      <hr />
      <h2 >{nombre}</h2>
      <div >
        {productos.map((prod) => (
          <Products key={prod.nombre} data={prod} />
        ))}
      </div>
    </div>
  );
}
export default Category;