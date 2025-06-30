function Footer(){
    const año=new Date().getFullYear();

    return( 
        <div>
            <p>{año.toString()}</p>
        </div>
    )
}
export default Footer