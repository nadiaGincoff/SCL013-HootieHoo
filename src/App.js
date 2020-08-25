import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Niños from './components/Niños/Niños'
import Inicio from './components/Inicio/Inicio'
import Adulto from './components/Adultos/Adultos'

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
