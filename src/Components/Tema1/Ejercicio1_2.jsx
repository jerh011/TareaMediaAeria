function Ejercicio1_2(){
    // Datos base - modifica con tu información
    const fechaNacimiento = new Date(1999, 6, 11) // Año, mes-1, día
    const añosExperiencia = 2
    const cafesPorDia = 1
    const horasSueñoPorDia = 5
    const librosLeidosAño = 1
    const horasEjercicioPorSemana = 5
    // Fecha actual
    const hoy = new Date()
    // Diferencia en milisegundos y conversión a días
    const msEnUnDia = 1000 * 60 * 60 * 24
    const diasVividos = Math.floor((hoy - fechaNacimiento) / msEnUnDia)
    // Cálculos
    const cafesTotales = diasVividos * cafesPorDia
    const horasDormidas = diasVividos * horasSueñoPorDia
    const añosVividos = hoy.getFullYear() - fechaNacimiento.getFullYear()
    const librosTotales = librosLeidosAño * añosVividos
    const horasEjercicioTotales = horasEjercicioPorSemana * 52 * añosVividos

    
    return (
    <div>
      <h1>Ejercicio 1.2</h1>
      <p>Años de Experiencia:{añosExperiencia}</p>
      <p>Cafés por Día: {cafesPorDia}</p>
      <p>Horas de Sueño por Día: {horasSueñoPorDia}</p>
      <p>Libros Leídos al Año:{librosLeidosAño}</p>
      <p>Horas de Ejercicio por Semana: {horasEjercicioPorSemana}</p>
      <p>Días vividos: {diasVividos.toLocaleString()}</p>
      <p>Total de cafés consumidos: {cafesTotales.toLocaleString()}</p>
      <p>Horas dormidas:{horasDormidas.toLocaleString()}</p>
      <p>Total de libros leídos:{librosTotales.toLocaleString()}</p>
      <p>Total de horas de ejercicio: {horasEjercicioTotales.toLocaleString()}</p>
    </div>
  );
}
export default Ejercicio1_2;