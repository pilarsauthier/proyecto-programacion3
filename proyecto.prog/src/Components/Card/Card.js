
import './Card.css'

function Card(props){
    return(
       <div className='card'> 
       <article className="card-detail">
            <img src={props.data.cover || props.data.album.cover}></img> 
            <h3>{props.data.title}</h3>
            <p className='card-detail'>Duracion: {props.data.duration} segundos</p>
            
            <button className='boton'>Ver Mas</button>
            <button className='boton'>Ir Detalle</button>
            <button className='boton'>Agregar a Favoritos</button>
        </article>
        </div>
    )
}

export default Card; 