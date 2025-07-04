import EmployeeCard from "./EmployeeCard";
const empleados = [
  {
    nombre: "Ana Martínez",
    puesto: "Desarrolladora Frontend",
    edad: 28,
    salarioMensual: 3200,
  },
  {
    nombre: "Carlos López",
    puesto: "Diseñador UX/UI",
    edad: 32,
    salarioMensual: 2800,
  },
  {
    nombre: "María García",
    puesto: "Project Manager",
    edad: 35,
    salarioMensual: 3800,
  },
  {
    nombre: "David Rodríguez",
    puesto: "Desarrollador Backend",
    edad: 29,
    salarioMensual: 3400,
  },
  {
    nombre: "Laura Sánchez",
    puesto: "QA Tester",
    edad: 26,
    salarioMensual: 2600,
  },
];

function Ejecicio5_1() {
  return (
    <>
    <h2>Ejercicio 5.1</h2>
    <table border="6">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Puesto</th>
          <th>Edad</th>
          <th>Salario anual</th>
        </tr>
      </thead>
      <tbody>
        {empleados.map((x) => {
          return <EmployeeCard datos={x} />;
        })}
      </tbody>
    </table>
        </>
  );
}

export default Ejecicio5_1;
