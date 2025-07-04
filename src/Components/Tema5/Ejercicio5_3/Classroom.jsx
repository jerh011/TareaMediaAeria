import Teacher from "./Teacher" 
import Student from "./Student"

function Classroom({ teacher, students }) {
  const allGrades = students.flatMap(s => s.grades);
  const classAverage = (allGrades.reduce((a, b) => a + b, 0) / allGrades.length).toFixed(2);

  const topStudent = students.reduce((top, current) => {
    const avg = current.grades.reduce((a, b) => a + b, 0) / current.grades.length;
    return avg > top.avg ? { student: current, avg } : top;
  }, { student: null, avg: 0 });

  // Estadísticas por materia
  const subjectStats = {};
  teacher.subjects.forEach((subject, index) => {
    const subjectGrades = students.map(s => s.grades[index]).filter(g => g !== undefined);
    const avg = subjectGrades.reduce((a, b) => a + b, 0) / subjectGrades.length || 0;
    subjectStats[subject] = avg.toFixed(2);
  });

  return (
    <div className="estudiantes">
      <Teacher {...teacher} />
      <h5>Estudiantes:</h5>
      {students.map((s, index) => (
        <Student key={index} {...s} />
      ))}

      <p>Promedio general: <strong>{classAverage}</strong></p>
      <p>Mejor calificacion: <strong>{topStudent.student?.name}</strong> (Prom: {topStudent.avg.toFixed(2)})</p>

      <h5>Promedio por materia:</h5>
      <ul>
        {Object.entries(subjectStats).map(([subject, avg], i) => (
          <li key={i}>{subject}: {avg}</li>
        ))}
      </ul>
    </div>
  );
}

export default Classroom