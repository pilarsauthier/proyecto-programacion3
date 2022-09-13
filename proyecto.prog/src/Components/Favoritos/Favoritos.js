import React, {Component} from 'react';

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
                        fetch(``)
                    )
                })
            )
        }
    }
}

export default Favoritos