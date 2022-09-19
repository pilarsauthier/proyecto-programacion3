import React, {Component} from "react";
import Card from "../../Components/Listado/Listado";
import {Link} from "react-router-dom"
import "./detalleA.css"

class DetalleA extends Component{
    constructor(props){
        super(props)
        this.state={
            id: props.match.params.id,
            album: {},
            ready: false,
        }
    }

    componentDidMount(){
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/album/${this.state.id}`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            this.setState({
                
                album: data,
                ready: true
            })
        } )
        .catch(err => console.log(err))
    } 

    render(){
        return(
        
                <div className='card-detailA'>
                    <h1>Detalle de {this.state.album.title}</h1>
                {
                    this.state.ready ?
                        <div>
                            <img className='imgA' src={this.state.album.cover_medium} />
                            <h1>Album: {this.state.album.title}</h1>
                            <h3>Artista: {this.state.album.artist.name}</h3>
                            <h3>{this.state.album.genres.name}</h3>
                            <h3>Fecha de estreno: {this.state.album.release_date}</h3>
                            {/* <h3>{this.state.album.tracklist}</h3> */}
                              
                            
                        </div>
        
                        : <div className="lds-hourglass">
                        <h3>Loading...</h3>
                        </div>
        
                }
        
            </div>
         )
    }
}

export default DetalleA;