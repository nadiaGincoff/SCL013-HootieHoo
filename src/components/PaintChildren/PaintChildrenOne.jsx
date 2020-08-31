import React, { Component, Fragment } from "react";
import CanvasDraw from "react-canvas-draw";

import patrulla from '../assets/img/patrulla.png'
import together from '../../img/header/header-together.png'
import puma from '../../img/header/header-puma.png'
import HeaderKids from "../Header/ChildrensHeader/Header";

class PaintChildrenOne extends Component {
  state = {
    color: "#ffc600",
    width: 400,
    height: 774,
    brushRadius: 10,
 
  };
  componentDidMount() {
    // let's change the color randomly every 2 seconds. fun!
    window.setInterval(() => {
      this.setState({
        color: "#" + Math.floor(Math.random() * 16777215).toString(16)
      });
    }, 10000);
  }
  render() {
    return (
        <Fragment>
        <HeaderKids leftImage={together} rightImage={puma} />

      <div>
          
       
        <div className={style.tools}>
         
          <button
            onClick={() => {
              this.saveableCanvas.clear();
            }}
          >
           Borrar
          </button>
          
         
          <div>
            <label>Ancho Brocha:</label>
            <input
              type="number"
              value={this.state.brushRadius}
              onChange={e =>
                this.setState({ brushRadius: parseInt(e.target.value, 10) })
              }
            />
          </div>
          
        </div>
        <div className={style.dFCanvas}>
        <CanvasDraw
          ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
          brushColor={this.state.color}
          brushRadius={this.state.brushRadius}
          canvasWidth={this.state.width}
          canvasHeight={this.state.height}
          imgSrc={patrulla}
      
        />
        </div>
      </div>
      </Fragment>
    );
  }
}



export default PaintChildrenOne