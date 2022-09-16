import React from 'react';
import Home from './Screens/Home/Home'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Favoritos from './Screens/Favoritos/Favoritos'
import VerCanciones from './Screens/VerCanciones/VerCanciones'
import VerAlbumes from './Screens/VerAlbumes/VerAlbumes'

import NotFound from './Components/NotFound/NotFound';

import { Link, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Header/> 
    
    
<Switch>
  <Route path="/" exact={true} component={Home}/>
  <Route path="/VerCanciones" exact={true} component={VerCanciones}/>
  <Route path="/VerAlbumes" component={VerAlbumes}/>
  <Route path='/Favoritos' component={Favoritos} />
  <Route path="" component={NotFound}/> 
  
</Switch>
    <Footer/>
    </div>
  );
}

export default App;
