import Card from "../Card/Card"
import './Listado.css'

function Listado(props){
    return(
    <section>
        <h2 className="lista">{props.titulo}</h2>  
        <h3>Ver todas</h3>
        <div className="card">
        {props.info.map( item =>{
            console.log(item);
        return <Card data={item}/>
        
    })}</div>
    
    </section>
    )
}

export default Listado;