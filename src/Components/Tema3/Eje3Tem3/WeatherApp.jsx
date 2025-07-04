import Morning from "./Morning";
import Afternoon from "./Afternoon";
import Night from "./Night";
import WeatherConditions from "./WeatherConditions";

function WeatherApp({ weatherData }) {
  const currentHour = new Date().getHours(); // 0 - 23
  const isDay = currentHour >= 6 && currentHour < 18;
  const { temperature, conditions, alert } = weatherData || {};

  return (
    <>
      {/* Renderizado condicional por hora */}
      {
        currentHour < 12
          ? <Morning />
          : currentHour < 18
          ? <Afternoon />
          : <Night />
      }

      {/* Temperatura si está definida */}
      {temperature != null ? (
        <p>Temperatura: {temperature}°C</p>
      ) : (
        <p>No hay información de temperatura.</p>
      )}

      {/* Mostrar alerta solo si existe */}
      {alert && <p> Alerta: {alert}</p>}

      {/* Condiciones del clima */}
      <WeatherConditions conditions={conditions} />
    </>
  );
}


const weatherExample = {
  temperature: 27,
  conditions: ["Soleado", "Viento moderado"],
  alert: null, 
};

const emptyData = {
  temperature: null,
  conditions: [],
  alert: "Lluvia intensa",
};
export default WeatherApp 