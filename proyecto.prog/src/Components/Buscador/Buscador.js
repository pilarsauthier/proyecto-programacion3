import React, { Component } from 'react';

class Buscador extends Component {
    constructor(props){
        super(props)
        this.state = {
            valorInput: ''
        }
    }

    prevenirRefresh(event){
        event.preventDefault()
    }

    controlarCambiosDelInput(event){
        this.setState({
            valorInput: event.target.value
        },
        ()=> this.props.metodoQueBusca(this.state.valorInput))
        
    }

    render() {
        return (
           <form onSubmit= {(event)=> this.prevenirRefresh(event)}>
            <input onChange={(event)=> this.controlarCambiosDelInput(event)} value={this.state.valorInput}/> 
            <button type='Submit'> </button>
           </form>
        );
    }
}

export default Buscador;


//etiqueta buscador en el home (ubicacion)
//css buscador
//card-detail en vez de card info