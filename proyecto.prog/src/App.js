
import NotFound from './Components/NotFound';

import { Link, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    
<Switch>
  <Route exact path="/" component={Home}/>
  <Route component={NotFound}/> 
</Switch>
    </div>
  );
}

export default App;
