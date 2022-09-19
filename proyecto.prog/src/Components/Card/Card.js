import React, {Component} from 'react'
import {Link} from "react-router-dom"
import './Card.css'

class Card extends Component{
    constructor(props){
        super(props)
        this.state ={
          text: 'Ver mas',
          showing: true,
          favorito: false,
          descClassName: 'hidden'

        }
      }

      componentDidMount(){
        let storage = localStorage.getItem('favoritos')
        let parsedStorage = JSON.parse(storage)
        if(parsedStorage !== null){
          let isFavorite = parsedStorage.includes(this.props.data.id) /*Si 89 esta incluido en el array */
          if(isFavorite) {
            this.setState({
              favorito:true
            })
          }
        }
    
      }
      showDescription(){
        if (this.state.showing){
          this.setState({
            text: "Ver Menos",
            showing: false,
            descClassName: "show"
          })
        }
        else{
          this.setState({
            text: 'Ver mas',
            showing: true,
            descClassName: 'hidden'
          })
        }
      }

      addFavorites(id){
        let favStorage = localStorage.getItem('favoritos')
    
        if(favStorage === null){
          let favArr = [id]
          let arrToString = JSON.stringify(favArr)
          localStorage.setItem('favoritos', arrToString)
        } else {
          let parsedArr = JSON.parse(favStorage)
          parsedArr.push(id)
          let arrToString = JSON.stringify(parsedArr)
          localStorage.setItem('favoritos', arrToString)
        }
    
        this.setState({
          favorito:true
        })
    
      }
    
      removeFavorites(id){
        let favStorage = localStorage.getItem('favoritos')
        let parsedStorage = JSON.parse(favStorage)
        let filterStorage = parsedStorage.filter(elm => elm !== id) 
    
        let storageToString = JSON.stringify(filterStorage)
    
        localStorage.setItem('favoritos', storageToString)
    
        this.setState({
          favorito: false
        })
      }

    render(){
    return(
       <div className='card-detail'> 
        <article>
            <img src={this.props.data.cover_medium || this.props.data.album.cover_medium}></img> 
            <div> 
              <h2>{this.props.data.title}</h2>
              <h3>{this.props.data.artist.name}</h3>
            
            {
                    this.props.data.type === "track" ?
                        <Link to={`/DetalleTrack/${this.props.data.id}`}>  <button  className='boton'>Ir Detalle</button> </Link>
                        :
                        <Link to={`/DetalleAlbum/${this.props.data.id}`}>  <button  className='boton'>Ir Detalle</button> </Link>
                }
           
       
              <div className={this.state.descClassName}>
                <p className='card-detail'>Duracion: {this.props.data.duration || null} segundos</p>
                <p className='card-detail'>Ranking: {this.props.data.rank || this.props.data.position}</p>
              </div> 
              <button className='boton' onClick={()=>this.showDescription()}>{this.state.text}</button>
            
            </div> 
              {
                this.state.favorito
                ?
                  <button onClick={()=> this.removeFavorites(this.props.data.id) }>Sacar de favoritos</button>
                :
                  <button onClick={()=> this.addFavorites(this.props.data.id) }>Agregar a favoritos</button>
              }
          </article>
        </div>
    )
    }
}


export default Card; 