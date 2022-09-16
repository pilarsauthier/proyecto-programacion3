import React, { Component } from "react";
import Listado from "../../Components/Listado/Listado";
import Card from "../../Components/Card/Card"
import Loader from "../../Components/Loader/Loader"
import '../../Components/Listado/Listado.css'
import CardBuscador from "../../Components/CardBuscador/CardBuscador";
import Buscador from "../../Components/Buscador/Buscador"
import './vertodas.css'
import '../Home/home.css'

class VerCanciones extends Component {
    constructor(props) {

        super(props);
        this.state = {
            info: ''
        }
    }
    componentDidMount() {
        fetch(
            `https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart?limit=48`
        )
            .then((results) => results.json())
            .then((resultados) => {
                console.log(resultados);
                this.setState({
                    info: resultados,
                });
            })
            .catch((e) => console.log(e));

    }

    render() {

        const mostrarBuscador = (resultado, idx)=> {
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
                </div>
            )
        } else {
            return (<div className="lds-hourglass">
                <h3>Loading...</h3>
            </div>)
        }


    }
}

export default VerCanciones