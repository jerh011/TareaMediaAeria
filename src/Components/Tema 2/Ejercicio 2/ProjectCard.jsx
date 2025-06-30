function ProjectCard(){
    const proyectos = [
  { nombre: "SSPRUTS", tecnologia: "Angular +  ASP.NET Core Web API", descripcion: "Sistema de solicitud de recuperaticion UTS" },
  { nombre: "CENDI", tecnologia: "Angular +  ASP.NET Core Web API", descripcion: "Centro de Desarrollo Infantil" },
  { nombre: "Plantilla de Potros App ", tecnologia: "Maui.net", descripcion: "Potros a app es una aplicacionnovil pra los  estudiantes de itson" }
]
 return (
    <div>
    {proyectos.map(x=>{
        return  <div>
                    <h3>Proyecto:{x.nombre}</h3>
                    <p>Tecnologias:{x.tecnologia}</p>
                    <p>Descripcion:{x.descripcion}</p>
                </div>
        })}
</div>
 )
}

export default ProjectCard