import React, {Component} from 'react';
import './Header.css'


class Header extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        return(
            <header className='header'>
                <div className='logo'>
                    <h1>Global Music</h1>
                </div>
                <div>
                    <ul className='navBar'>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>Favoritos</a></li>
                        <li><a href="#">Ver Todos</a></li>
                    </ul>
                </div>
            </header>
        )
    }
}
export default Header;
