import React, { Component } from "react";
import Listado from "../../Components/Listado/Listado";
import Loader from "../../Components/Loader/Loader"
import CardBuscador from "../../Components/CardBuscador/CardBuscador";
import Card from "../../Components/Card/Card"
import Buscador from "../../Components/Buscador/Buscador"
import './home.css'

//state, component, 

class Home extends Component {
    constructor(props) {
     super(props);

        this.state = {
            info: '',
            resultadosBusqueda: [],
            buscar: false
        }
    }
    componentDidMount() {
        fetch(
            `https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart?limit=8`
        )
            .then((results) => results.json())
            .then((resultados) => {
                
                this.setState({
                    info: resultados,

                });
            })
            .catch((e) => console.log(e));

    }

    buscarData(valor) {

        if (valor.length > 0) {
            fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/search?q=${valor}`)
                .then(resp => resp.json())
                .then(data => this.setState({
                    resultadosBusqueda: data.data,
                    buscar: true 
                    
                }, () => {
                
                }))
        }

    }



    render() {

        let mostrarBuscador = (resultado, idx)=> {
            if (this.state.buscar) {
               return <CardBuscador data={resultado} key={idx}/> 
            }
            else {
            return <Card data={resultado} key={idx}/>
            }
        }

        if (this.state.info) {
            return (
                <div className="home">
                    <Buscador metodoQueBusca={(valor) => this.buscarData(valor)}></Buscador>
                    <div className="card">
                    {
                        this.state.resultadosBusqueda.length > 0 //[{},{},{}]
                            ?
                            //'hola'
                            this.state.resultadosBusqueda.map((resultado, idx) => mostrarBuscador(resultado, idx))
                            //<CardBuscador info ={this.state.resultadosBusqueda} /> //arreglar .cover y
                            : ''
                    }
                    </div>
                    <Listado info={this.state.info.tracks.data} titulo={'Canciones'} />
                    <Listado info={this.state.info.albums.data} titulo={'Albumes'} />
                </div>
            )
        } else {
            return (<div className="lds-hourglass">
                <h3>Loading...</h3>
            </div>)
        }


    }

}

export default Home;