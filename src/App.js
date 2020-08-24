import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Niños from './Components/Niños'
import Inicio from './Components/Inicio'
import Adulto from './Components/Adultos'

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/Niños">
            <Niños/>    
          </Route>
          <Route path="/Adulto">
            <Adulto/>
          </Route>
          <Route path="/">
            <Inicio/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
