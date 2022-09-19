import './CardBuscador.css'

function CardBuscador(props) {
    console.log(props.data.album.cover_medium);
    return (

        <div className='card-detail'>
            <article>
                <img src={props.data.album.cover_medium}></img>
                <h3>{props.data.title}</h3>
                <p className='card-detail'>Duracion: {props.data.duration || null} segundos</p>
                <p className='card-detail'>Ranking: {props.data.rank || props.data.position}</p>

                <button className='boton'>Ver Mas</button>
                <button className='boton'>Ir Detalle</button>



                <button onClick={() => this.addFavorites(this.props.data.id)}>Agregar a favoritos</button>

            </article>
        </div>
    )
}


export default CardBuscador; 