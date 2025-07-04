function Student({ name, age, grades, course }) {
  const average = (grades.reduce((a, b) => a + b, 0) / grades.length).toFixed(2);

  return (
    <div >
      <strong>{name}</strong> ({age} años) – Curso: {course} <br />
      Calificaciones: {grades.join(", ")} <br />
      Promedio: <strong>{average}</strong>
    </div>
  );
}

export default Student