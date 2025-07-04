
import School from "./School"

function Eje3Tem5() {
    const schoolData = {
      classrooms: [
        {
          teacher: {
            name: "Laura Sánchez",
            subjects: ["Matemáticas", "Física", "Programación"],
            experience: 12
          },
          students: [
            { name: "Ana", age: 17, grades: [90, 85, 95], course: "3A" },
            { name: "Luis", age: 18, grades: [80, 88, 92], course: "3A" },
            { name: "Carla", age: 17, grades: [100, 90, 85], course: "3A" }
          ]
        },
        {
          teacher: {
            name: "Carlos Pérez",
            subjects: ["Historia", "Literatura", "Arte"],
            experience: 8
          },
          students: [
            { name: "Juan", age: 16, grades: [75, 80, 70], course: "2B" },
            { name: "María", age: 16, grades: [90, 95, 85], course: "2B" },
            { name: "Pedro", age: 17, grades: [60, 70, 65], course: "2B" }
          ]
        }
      ]
    };
  return (
    <div>
      <School {...schoolData} />
    </div>
  );
}
export default Eje3Tem5