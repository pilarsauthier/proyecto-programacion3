import Home from './Components/Home/Home';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'


import NotFound from './Components/NotFound';

import { Link, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Header/> 
    <Home/>
    <Footer/>
      
    

    </div>
  );
}

export default App;
