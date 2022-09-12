import Card from "../Card/Card"
import './Listado.css'

function Listado(props){
    return(
    <section className="fila">
        <h2 className="lista">{props.titulo}</h2>  
        <h3>Ver todas</h3>
        <div className="card">
        {props.info.map((item, idx) =>{
            console.log(item);
        return <Card key={`${Date.now()}-${idx}`} data={item}/>
        
    })}</div>
    
    </section>
    )
}

export default Listado;