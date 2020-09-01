import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Children from "./components/Children/Children";
import Inicio from "./components/Inicio/Inicio";
import Adulto from "./components/Adultos/Adultos";
import Navbar from "./components/Nav/Navbar";
import IndexOfChildren from "./components/IndexOfChildren/index";
import MenuPaint from "./components/PaintChildren/MenuPaint";
import PaintChildrenOne from "./components/PaintChildren/PaintChildrenOne";
import PaintChildrenTwo from "./components/PaintChildren/PaintChildrenTwo";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import "./dark.css"

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
        <Route path="/videos" exact>
       <VideoPlayer/>
          </Route>
          <Route path="/menucolorearimg2" exact>
            <PaintChildrenTwo />
          </Route>
          <Route path="/menucolorearimg1" exact>
            <PaintChildrenOne />
          </Route>
          <Route path="/menucolorear" exact>
            <MenuPaint />
          </Route>
          <Route path="/trivia" exact>
            <Children />
          </Route>
          <Route path="/niños" exact>
            <IndexOfChildren />
          </Route>
          <Route path="/adulto" exact>
            <Adulto />
          </Route>
          <Route exact path="/" exact>
            <Inicio />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
