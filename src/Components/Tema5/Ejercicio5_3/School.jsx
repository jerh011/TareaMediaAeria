import Classroom from "./Classroom"
function School({ classrooms }) {
  return (
    <div>
      <h1>Sistema de Gestión Escolar</h1>
      {classrooms.map((classroom, index) => (
        <Classroom key={index} {...classroom} />
      ))}
    </div>
  );
}
export default School