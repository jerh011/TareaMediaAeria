import Instructor from "./Instructor";
import ProgressBar  from "./ProgressBar"
import Rating from "./Rating"
import Module from "./Module"
function Course({ title, instructor, modules, rating, progress }) {
  return (
    <div >
      <h2>{title}</h2>
      <Instructor {...instructor} />
      <ProgressBar progress={progress} />
      <Rating stars={rating} />

      {modules.map((mod, index) => (
        <Module key={index} title={mod.title} lessons={mod.lessons} />
      ))}
    </div>
  );
}
export default Course