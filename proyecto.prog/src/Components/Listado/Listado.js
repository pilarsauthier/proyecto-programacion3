import Card from "../Card/Card"
import './Listado.css'

function Listado(props){
    return(
    <section>
        <h2 className="lista">{props.titulo}</h2>  
        {props.info.map( item =>{
            console.log(item);
        return <Card data={item}/>
    })}
    
    </section>
    )
}

export default Listado;