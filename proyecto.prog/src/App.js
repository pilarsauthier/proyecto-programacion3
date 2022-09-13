import React from 'react';
import Home from './Components/Home/Home'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Favoritos from './Components/Favoritos/Favoritos'
import VerTodasCanciones from './Components/VerTodas/VerTodasCanciones'
import VerTodosAlbum from './Components/VerTodas/VerTodosAlbum'


import NotFound from './Components/NotFound/NotFound';

import { Link, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Header/> 
  
      
  
<Switch>
  <Route exact path="/" component={Home}/>
  <Route path='/' component={Favoritos} />
  <Route component={NotFound}/> 
  <Route path="/" exact={true} component={Home}/>
  <Route path="/VerTodasCanciones" component={VerTodasCanciones}/>
  <Route path="/VerTodosAlbum" component={VerTodosAlbum}/>
  <Route path="" component={NotFound}/> 
</Switch>
    <Footer/>
    </div>
  );
}

export default App;
