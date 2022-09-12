import React, {Component} from "react";
import Listado from "../Listado/Listado";
import Loader from "../Loader/Loader"
import './home.css'



class Home extends Component {
    constructor(props){
    
        super(props);
        this.state = {
            info: ''
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

    render(){
        console.log(this.state.info);
        if(this.state.info){
            return(
                <div className="home">
                     
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