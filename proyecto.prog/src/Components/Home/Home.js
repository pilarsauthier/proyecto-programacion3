import React, {Component} from "react";
import Listado from "../Listado/Listado";

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            info: ''
        }
    }
    componentDidMount(){
        fetch(
            `https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/`
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
                <div>
                <Listado info= {this.state.info.tracks.data}  titulo={'Canciones'} />
                <Listado info= {this.state.info.albums.data}  titulo={'Albumes'} />
                </div>
            )
        }else{
            return (<h3>Loading...</h3>)
        }

        
    }

}

export default Home;