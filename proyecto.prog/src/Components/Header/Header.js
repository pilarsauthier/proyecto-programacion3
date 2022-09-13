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
            <div>
                <header className='header'>
                    <div className='logo'>
                        <i className='fas fa-solid fa-music fa-2x'/>
                        <h1>Global Music</h1>
                    </div>
                    <div>
                        <ul className='navBar'>
                            <li><a href='/'>Home</a></li>
                            <li><a href='#'>Favoritos</a></li>
                        </ul>
                    </div>
                </header>
            </div>
        )
    }
}
export default Header;
