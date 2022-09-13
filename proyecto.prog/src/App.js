import React from 'react';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Favoritos from './Components/Favoritos/Favoritos'


import NotFound from './Components/NotFound';

import { Link, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Header/> 
    <Home/>
    <Footer/>
      
  
<Switch>
  <Route exact path="/" component={Home}/>
  <Route path='/' component={Favoritos} />
  <Route component={NotFound}/> 
</Switch>
    </div>
  );
}

export default App;
