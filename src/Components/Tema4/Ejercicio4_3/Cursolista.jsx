import Course from "./Course.jsx"
function Cursolista({ courses }) {
  return (
    <>
      <h1>Plataforma de Cursos Online</h1>
      {courses.map((course, index) => (
        <Course key={index} {...course} />
      ))}
    </>
  );
}
export default Cursolista