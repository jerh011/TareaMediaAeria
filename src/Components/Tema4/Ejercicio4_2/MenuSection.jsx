function MenuSection({ datos }) {
  return (
      <tr>
        <th>{datos.nombre}</th>
        <th>{datos.descripcion}</th>
        <th>${datos.precio}</th>
        <th>{datos.ingredientes}</th>
      </tr>
  );
}
export default MenuSection;
