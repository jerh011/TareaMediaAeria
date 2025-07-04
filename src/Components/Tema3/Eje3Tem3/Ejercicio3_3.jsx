import WeatherApp from "./WeatherApp";
// Renderiza
function Ejercicio3_3() {
  const weatherExample = {
    temperature: 27,
    conditions: ["Soleado", "Viento moderado"],
    alert: null, // puede ser "Tormenta", o null
  };
  
  // También puedes probar con datos vacíos:
  const emptyData = {
    temperature: null,
    conditions: [],
    alert: "Lluvia intensa",
  };
  return (
    <>
    <h2>Ejercicio 3.3</h2>
    <div className="eje3Tem3">
      <h1>Sistema de Clima</h1>
      <WeatherApp weatherData={weatherExample} />
    </div>
    </>
  );
}
export default Ejercicio3_3