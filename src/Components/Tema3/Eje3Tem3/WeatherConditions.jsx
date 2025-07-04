
function WeatherConditions({ conditions }) {
  return (
    <>
      <h4>Condiciones actuales:</h4>
      {conditions && conditions.length > 0 ? (
        <ul>
          {conditions.map((cond, i) => (
            <li key={i}>{cond}</li>
          ))}
        </ul>
      ) : (
        <p>No hay condiciones disponibles.</p>
      )}
    </>
  );
}
export default WeatherConditions