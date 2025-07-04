import Cursolista from "./Cursolista";
const coursesData = [
  {
    title: "Curso de React",
    instructor: { name: "María López", bio: "Desarrolladora Frontend Senior" },
    progress: 65,
    rating: 5,
    modules: Array.from({ length: 4 }, (_, i) => ({
      title: `Módulo ${i + 1}`,
      lessons: [`Lección 1`, `Lección 2`, `Lección 3`],
    })),
  },
  {
    title: "Curso de JavaScript",
    instructor: { name: "Carlos Pérez", bio: "Ingeniero de Software" },
    progress: 45,
    rating: 4,
    modules: Array.from({ length: 4 }, (_, i) => ({
      title: `Módulo ${i + 1}`,
      lessons: [`Lección 1`, `Lección 2`, `Lección 3`],
    })),
  },
  {
    title: "Curso de HTML y CSS",
    instructor: { name: "Ana Torres", bio: "Diseñadora Web" },
    progress: 80,
    rating: 5,
    modules: Array.from({ length: 4 }, (_, i) => ({
      title: `Módulo ${i + 1}`,
      lessons: [`Lección 1`, `Lección 2`, `Lección 3`],
    })),
  },
];

function Eje3Tem4() {
  return (
    <div >
      <Cursolista courses={coursesData} />
    </div>
  );
}

export default  Eje3Tem4