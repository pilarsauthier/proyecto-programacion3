


function Card(props){
    return(
        <article>
            <img src={props.data.cover || props.data.album.cover}></img> 
            <h3>{props.data.title}</h3>
            <p>Duracion: {props.data.duration} segundos,</p>
            <button>Ver Mas</button>
            <button>Ir Detalle</button>
            <button>Agregar a Favoritos</button>
        </article>
    )
}

export default Card; 