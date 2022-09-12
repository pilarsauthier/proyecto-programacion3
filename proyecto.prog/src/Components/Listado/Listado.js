import Card from "../Card/Card"

function Listado(props){
    return(
    <section>
        <h2>{props.titulo}</h2>  
        {props.info.map( item =>{
            console.log(item);
        return <Card data={item}/>
    })}
    
    </section>
    )
}

export default Listado;