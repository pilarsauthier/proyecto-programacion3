import React, {Component} from 'react'
import Card from "../Card/Card"
import './Listado.css'

class Listado extends Component{
    constructor(props){
        super(props)
        this.state={
            info:'',
            titulo: props.titulo
        }
    }

    

    render(){
        
        return(
        <section className="fila">
        <div className='titulo'>
            <h2 className="lista">{this.state.titulo}</h2>  
        </div>
        <div className="card">
        {this.props.info.map((item, idx) =>{  /* map mi metodo de array que retorna un array modficiado */
          
        return <Card key={idx} data={item}/>
        
    })}</div>
    
    </section>
        )
    }
   
}


export default Listado;