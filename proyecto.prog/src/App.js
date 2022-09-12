import React from 'react';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import VerTodas from './Components/VerTodas/VerTodas'


import NotFound from './Components/NotFound/NotFound';

import { Link, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Header/> 
  
      
  
<Switch>
  <Route path="/" exact={true} component={Home}/>
  <Route path="/VerTodas" component={VerTodas}/>
  <Route path="" component={NotFound}/> 
</Switch>
    <Footer/>
    </div>
  );
}

export default App;
