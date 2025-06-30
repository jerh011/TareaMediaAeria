import PhotoCard from "./PhotoCard";
import GalleryHead from "./GalleryHeader";
function Gallery() {
  const fotos = [
    {
      titulo: "Amanecer en la Montaña",
      descripcion: "Primera luz del día iluminando los picos nevados",
      ubicacion: "Alpes Suizos",
    },
    {
      titulo: "Reflexiones Urbanas",
      descripcion: "Rascacielos reflejados en charcos después de la lluvia",
      ubicacion: "Nueva York",
    },
    {
      titulo: "Vida Marina",
      descripcion: "Coloridos peces tropicales en arrecife de coral",
      ubicacion: "Gran Barrera de Coral",
    },
    {
      titulo: "Bosque Encantado",
      descripcion: "Rayos de sol filtrándose entre árboles centenarios",
      ubicacion: "Selva Negra, Alemania",
    },
    {
      titulo: "Desierto Infinito",
      descripcion: "Dunas doradas extendiéndose hasta el horizonte",
      ubicacion: "Sahara, Marruecos",
    },
    {
      titulo: "Aurora Boreal",
      descripcion: "Luces verdes danzando en el cielo nocturno",
      ubicacion: "Islandia",
    },
  ];

  const tituloGaleria = "Momentos Capturados";
  const subtituloGaleria = "Galería de fotografía profesional";

  
  return (
    <div>
        <GalleryHead tituloGaleria={tituloGaleria} subtituloGaleria={subtituloGaleria}/>
        {
        fotos.map((x,index)=>
            {return <div> 
                <PhotoCard cont={index} titulo={x.titulo} descripcion={x.descripcion}/>   
            </div> 
        })}  
       
    </div>
  );
} 
export default Gallery;
