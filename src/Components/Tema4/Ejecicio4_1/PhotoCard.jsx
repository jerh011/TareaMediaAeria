function PhotoCard({ cont,titulo, descripcion }) {
  return (
    <>
        <h3>foto no.{cont}</h3>
      <p>Título: {titulo}</p>
      <div>Descripción: {descripcion}</div>
    </>
  );
}
export default PhotoCard
