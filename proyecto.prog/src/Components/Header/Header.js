import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Header.css'


class Header extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        return(
            <div>
                <header className='header'>
                    <div className='logo'>
                        <i className='fas fa-solid fa-music fa-2x'/>
                        <h1>Global Music</h1>
                    </div>
                    <div>
                        <ul className='navBar'>
                          <li> <Link to='/'>Home</Link> </li> 
                           <li> <Link to='Favoritos'>Favoritos</Link> </li>

                        </ul>
                    </div>
                </header>
            </div>
        )
    }
}
export default Header;
