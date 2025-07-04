import RestaurantInfo from "./RestaurantInfo"
import MenuSection from "./MenuSection"
// Datos del menú
const entrantes = [
  { nombre: "Jamón Ibérico", descripcion: "Jamón de bellota cortado a mano", precio: 18, ingredientes: "Jamón ibérico, pan tostado, tomate" },
  { nombre: "Croquetas de Jamón", descripcion: "Croquetas caseras cremosas", precio: 12, ingredientes: "Jamón serrano, bechamel, pan rallado" },
  { nombre: "Gazpacho Andaluz", descripcion: "Sopa fría de verduras", precio: 8, ingredientes: "Tomate, pepino, pimiento, ajo, aceite" },
  { nombre: "Patatas Bravas", descripcion: "Patatas fritas con salsa picante", precio: 9, ingredientes: "Patatas, salsa brava, alioli" }
]

const principales = [
  { nombre: "Paella Valenciana", descripcion: "Paella tradicional con pollo y verduras", precio: 22, ingredientes: "Arroz, pollo, judías, pimiento" },
  { nombre: "Cordero Asado", descripcion: "Cordero al horno con hierbas", precio: 28, ingredientes: "Cordero, romero, ajo, patatas" },
  { nombre: "Merluza a la Plancha", descripcion: "Pescado fresco con verduras", precio: 24, ingredientes: "Merluza, espárragos, limón" },
  { nombre: "Cocido Madrileño", descripcion: "Plato tradicional de garbanzos", precio: 19, ingredientes: "Garbanzos, chorizo, morcilla, verduras" }
]

const postres = [
  { nombre: "Flan Casero", descripcion: "Flan tradicional con caramelo", precio: 6, ingredientes: "Huevos, leche, azúcar, vainilla" },
  { nombre: "Tarta de Santiago", descripcion: "Tarta de almendra gallega", precio: 7, ingredientes: "Almendras, huevos, azúcar, limón" },
  { nombre: "Crema Catalana", descripcion: "Crema quemada con canela", precio: 6, ingredientes: "Nata, yemas, azúcar, canela" },
  { nombre: "Torrijas", descripcion: "Pan frito con miel y canela", precio: 5, ingredientes: "Pan, leche, huevo, miel, canela" }
]

// Información del restaurante
    const nombreRestaurante = "La Cocina de María"
    const descripcionRestaurante = "Cocina tradicional española con toque moderno"
    const direccion = "Calle Mayor 123, Madrid"
    const telefono = "+34 91 123 4567"

function MenuItem(){

    return (
<>
<h2>Ejercicio4.2</h2>
        <div className="Ejercicio4_2">
             <table border="1">
        <tr>
          <th>nombre</th>
          <th>descripcion</th>
          <th>precio</th>
          <th>Ingredientes</th>
        </tr>
            <MenuSection datos={postres[0]} />
            <MenuSection datos={principales[0]} />
            <MenuSection datos={entrantes[0]} />
           </table>
           <RestaurantInfo nombreRestaurante="nombreRestaurante" descripcionRestaurante="descripcionRestaurante" direccion="direccion" telefono="telefono"/> 
        </div>
</>
    )
}

export default MenuItem