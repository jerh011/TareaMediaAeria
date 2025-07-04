import Lesson from "./Lesson"
function Module({ title, lessons }) {
  return (
    <div >
      <h4>{title}</h4>
      <ul>
        {lessons.map((lesson, index) => (
          <Lesson key={index} title={lesson} />
        ))}
      </ul>
    </div>
  );
}

export default Module