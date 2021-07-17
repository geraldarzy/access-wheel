import LandingPage from './components/LandingPage';
import Map from './components/Map';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route, useHistory} from 'react-router-dom';

function App() {
  // fetch('https://api.woosmap.com/localities/details?key=woos-6b2a8838-6f25-3d58-b0bd-93f9d027c352&public_id=MVZWBfGZQnAQn9JtE9CJZjgeB4Q=').then(resp=>resp.json()).then(resp=>console.log(resp))
  return (
    <>
    <Switch>
      <Route exact path='/'>
        <LandingPage/>
        <Map/>
      </Route>

    </Switch>
    </>
  );
}

export default App;
