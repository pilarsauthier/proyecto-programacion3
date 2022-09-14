import React, {Component} from 'react';
import Listado from '../Listado/Listado';
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
                        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/${elm}`)
                        .then(resp => resp.json())
                        .then(data => data)
                    )
                })
            )
            .then(data => console.log(data))
        }
    }
    render(){
        return(
            <h1> Favoritos </h1>,
            
            <div>
             <Listado info= {this.state.arrayFavs} titulo={'Tracks'}/>
            </div>
        )
    }
}

export default Favoritos