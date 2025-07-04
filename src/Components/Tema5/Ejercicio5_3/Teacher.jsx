function Teacher({ name, subjects, experience }) {
  return (
    <div>
      <h4>Profesor: {name}</h4>
      Materias: {subjects.join(", ")} <br />
      Experiencia: {experience} años
    </div>
  );
}
export default Teacher