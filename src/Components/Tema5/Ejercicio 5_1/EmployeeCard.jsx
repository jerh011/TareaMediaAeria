function EmployeeCard({ datos }) {
  return (
    <tr>
        <th>{datos.nombre}</th>
        <th>{datos.puesto}</th>
        <th>{datos.edad}</th>
        <th>{datos.salarioMensual*12}</th>
    </tr>
  );
}

export default EmployeeCard;
