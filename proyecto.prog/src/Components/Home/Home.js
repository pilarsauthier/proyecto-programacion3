import React, {Component} from "react";


class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    componentDidMount(){
        fetch(
            `https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&top?limit=10`
        )
        .then((results)=> results.json())
        .then((resultados)=>{
            console.log(resultados);
        })
    }

    render(){
        return(
            <div>
                <h1>Home</h1>
            </div>
        )
    }

}

export default Home;