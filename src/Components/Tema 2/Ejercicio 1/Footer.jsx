function Footer(){
    const año=new Date().getFullYear();

    return( 
        <div>
            <p>Año: {año.toString()}</p>
        </div>
    )
}
export default Footer