import React, {Component} from "react";
import Buscador from "../Buscador/Buscador";
import CardBuscador from "../CardBuscador/CardBuscador";
import Listado from "../Listado/Listado";
import Loader from "../Loader/Loader"
import './home.css'



class Home extends Component {
    constructor(props){
    
        super(props);
        this.state = {
            info: '',
            resultadosBusqueda: []
        }
    }
    componentDidMount(){
        fetch(
            `https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart?limit=8`
        )
        .then((results)=> results.json())
        .then((resultados)=>{
            console.log(resultados);
            this.setState({
                info: resultados,
            });
        })
        .catch((e)=> console.log(e));

    }

    buscarData(valor){

        //hacer un if de que si el valor esta vacio que no avance con el fetch.


        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/search?q=${valor}`) 
        .then(resp=> resp.json())
        .then(data => this.setState({
            resultadosBusqueda: data.data
        }, ()=> {
            console.log('esta es la busqueda')
            console.log(this.state.resultadosBusqueda)}))
    }

    render(){

        console.log(this.state.info);
        if(this.state.info){
            return(
                <div className="home">
                    <Buscador metodoQueBusca ={(valor) => this.buscarData(valor)}></Buscador>
                {
                    this.state.resultadosBusqueda.length > 0 //[{},{},{}]
                    ?
                    //'hola'
                    this.state.resultadosBusqueda.map((resultado,idx)=> <CardBuscador data ={resultado} /> )
                    //<CardBuscador info ={this.state.resultadosBusqueda} /> //arreglar .cover y
                    : ''
                }
                     
                <Listado info= {this.state.info.tracks.data}  titulo={'Canciones'} />
                <Listado info= {this.state.info.albums.data}  titulo={'Albumes'} />
                </div>
            )
        }else{
            return (<div className="lds-hourglass">
            <h3>Loading...</h3>
            </div>)
        }

        
    }

}

export default Home;