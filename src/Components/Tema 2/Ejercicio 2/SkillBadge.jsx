function SkillBadge(){
    const habilidades = ["JavaScript", "Angular", "C#", "CSS", "Git", "Docker","PgSQL"]
    return(
        
        <div>
      
            <h4>Skills</h4>
            <ol>
            {habilidades.map(x=>{
               return <li>{x}</li>
            })}
            </ol>
        </div>
    )
}
export default SkillBadge