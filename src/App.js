import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Children from './components/Children/Children'
import Inicio from './components/Inicio/Inicio'
import Adulto from './components/Adultos/Adultos'
import Navbar from './components/Nav/Navbar';
import IndexOfChildren from './components/IndexOfChildren/index';
import MenuPaint from './components/PaintChildren/MenuPaint';

function App() {
  return (
    <Router>
      <div className="container">
      <Switch>
        <Route path="/MenuColorearImg2" exact>
          
        
          </Route>
  
        <Route path="/MenuColorearImg1"exact>
 
        
          </Route>
     
        <Route path="/MenuColorear" exact>
          <MenuPaint/>
        
          </Route>
          <Route path="/trivia" exact>
            <Children />    
          </Route>
          <Route path="/Niños" exact>
            <IndexOfChildren />    
          </Route>
          <Route path="/Adulto" exact>
            <Adulto/>
          </Route>
          <Route path="/Menu" exact>
            <Navbar/>
          </Route>
          <Route exact path="/" exact>
            <Inicio/>      
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
