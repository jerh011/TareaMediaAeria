import React, { useEffect, useState } from 'react';

function Reloj() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const horaActual = now.toLocaleTimeString();

  const cumple = new Date(now.getFullYear(), 5, 11);
  if (now > cumple) cumple.setFullYear(cumple.getFullYear() + 1);
  const diasRestantes = Math.ceil((cumple - now) / (1000 * 60 * 60 * 24));

  const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const mensajes = [
    'Feliz dia Domingo',
    'Feliz dia Lunes',
    'Feliz dia Martes',
    'Feliz dia Miercoles',
    'Feliz dia Jueves',
    'Feliz dia Viernes',
    'Feliz dia Sabado',
  ];
  const dia = diasSemana[now.getDay()];
  const mensajeDia = mensajes[now.getDay()];

  const inicio = new Date(now.getFullYear(), 0, 1);
  const fin = new Date(now.getFullYear() + 1, 0, 1);
  const progreso = ((now - inicio) / (fin - inicio) * 100).toFixed(2);


  const hora = now.getHours();
  let frase = '';
  if (hora < 12) 
    frase = '¡Buenos días! levantate maquina de chambeoo.';
  else if (hora < 18) 
    frase = 'ya casi llegas a tu canton.';
  else
   frase = 'Ya duerme no es una opcion .';

  return (
    < div className='ejercicio1_3'>
      <h2>Relog Digital</h2>
      <p>Hora actual: {horaActual}</p>
      <p>Días hasta tu cumpleaños: {diasRestantes}</p>
      <p>Hoy es: {dia} — {mensajeDia}</p>
      <p>Progreso del año: {progreso}%</p>
      <p>Frase motivacional: {frase}</p>
    </div>
  );
}

export default Reloj