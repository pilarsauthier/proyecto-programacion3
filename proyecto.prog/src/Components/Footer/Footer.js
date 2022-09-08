import React, {Component} from 'react'
import './footer.css'

class Footer extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(
            <footer>
                <div className='footer'>
                    <h4>Franco Galluzzo</h4>
                    <h4>Clara Zemborain</h4>
                    <h4>Maria del Pilar Sauthier</h4>
                </div>
            </footer>
        )
    }
}

export default Footer 