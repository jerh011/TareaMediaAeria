function SocialLink(){
    const redesSociales = [
        { nombre: "GitHub", url: "https://github.com/jerh011" },
        { nombre: "LinkedIn", url: "https://www.facebook.com/jesuseloyr/" },
        { nombre: "Instagram", url: "https://www.instagram.com/jerh011/" },
        { nombre: "Gmail", url:"https://wa.me/526221443188"}
    ]
    return(
        <div>
            <h4>Redes sosciales</h4>
            <ul>
            {redesSociales.map(x=>
                {
                return <li><a href={x.url}>{x.nombre}</a></li>
                })}
            </ul>
        </div>
    )
}

export default SocialLink