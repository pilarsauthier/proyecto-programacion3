import React, {Component} from "react";
import Card from "../../Components/Listado/Listado";
import {Link} from "react-router-dom"
import "./detalleT.css"

class DetalleT extends Component{
    constructor(props){
        super(props)
        this.state={
            id: props.match.params.id,
            tracks: {},
            ready: false,
        }
    }

    componentDidMount(){
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/track/${this.state.id}`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            this.setState({
                
                tracks: data,
                ready: true
            })
        } )
        .catch(err => console.log(err))
    } 

    render(){
        return(

        <div className='card-detailT'>
            <h1>Detalle de {this.state.tracks.title}</h1>
        {
            this.state.ready ?
                <div>
                    <img className='img' src={this.state.tracks.album.cover_medium} />
                    <h1>Cancion: {this.state.tracks.title}</h1>
                    <h3>Artista: {this.state.tracks.artist.name}</h3>
                    <h3>Album: {this.state.tracks.album.title}</h3>
                   
                    
                      
                    
                </div>

                : <div className="lds-hourglass">
                <h3>Loading...</h3>
                </div>

        }

    </div>


         )
    }
}

export default DetalleT;