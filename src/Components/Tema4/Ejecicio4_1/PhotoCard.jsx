function PhotoCard({ cont,titulo, descripcion }) {
  return (
    <div>
        <h2>foto no.{cont}</h2>
      <p>Título: {titulo}</p>
      <div>Descripción: {descripcion}</div>
    </div>
  );
}
export default PhotoCard
