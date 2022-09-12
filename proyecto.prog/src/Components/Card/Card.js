
import './Card.css'

function Card(props){
    return(
       <div className='card-detail'> 
       <article>
            <img src={props.data.cover_medium || props.data.album.cover_medium}></img> 
            <h3>{props.data.title}</h3>
            <p className='card-detail'>Duracion: {props.data.duration || null} segundos</p>
            <p className='card-detail'>Ranking: {props.data.rank || props.data.position}</p>
            
            <button className='boton'>Ver Mas</button>
            <button className='boton'>Ir Detalle</button>
            <button className='boton'>Agregar a Favoritos</button>
        </article>
        </div>
    )
}


export default Card; 