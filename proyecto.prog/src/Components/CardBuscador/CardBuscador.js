import './CardBuscador.css'

function CardBuscador(props){
    return(
       <div className='card-detail'> 
       <article>
           
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


export default CardBuscador; 