import React, {Component} from 'react'
import Card from "../Card/Card"
import './Listado.css'

class Listado extends Component{
    constructor(props){
        super(props)
        this.state={
            info:[]
        }
    }

    

    render(){
        
        return(
        <section className="fila">
        <div className='titulo'>
            <h2 className="lista">{this.props.info.titulo}</h2>  
        </div>
        
        <div className="card">
        {this.props.info.map((item, idx) =>{
          
        return <Card key={`${Date.now()}-${idx}`} data={item}/>
        
    })}</div>
    
    </section>
        )
    }
   
}


export default Listado;