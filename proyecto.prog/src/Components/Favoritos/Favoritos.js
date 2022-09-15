import React, {Component} from 'react';
import Listado from '../Listado/Listado';
import Card from '../Card/Card';
import './favoritos.css'

class Favoritos extends Component {
    constructor(props){
        super(props)
        this.state = {
            arrayFavs: []
        }
    }

    componentDidMount(){
        let storage = localStorage.getItem('favoritos')
        if(storage!= null){
            let parsedStorage = JSON.parse(storage)

            Promise.all(
                parsedStorage.map(elm =>{
                    return(
                        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/track/${elm}`)
                        .then(resp => resp.json())
                        .then(data => data)
                    )
                })
            )
            .then(data => this.setState({
                arrayFavs: data
            }, ()=> console.log(this.state.arrayFavs)))
        }
    }
    render(){
        return(
            <h1> Favoritos </h1> ,
            <div>
    
        {this.state.arrayFavs.map((fav, idx)=>{
                 console.log(fav);
                 return <Card key={`${Date.now()}-${idx}`} data={fav}/>
             })}
    
            </div>  
        )
    }
}

export default Favoritos