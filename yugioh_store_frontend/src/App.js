import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Shop from './Components/Shop/Shop';

function App() {
  return (
   
    <BrowserRouter>
   
        <Switch>
          <Route path='/main-page' component={Shop}/>
        </Switch>
  
    </BrowserRouter>
    
    
  );
}

export default App;
