import React, { Component, Fragment } from "react";
import CanvasDraw from "react-canvas-draw";
import style from "../PaintChildren/PaintChildrenOne.module.css";
import leonCorona from "../../assets/img/imagencoronaleon.jpg";
import together from "../../img/header/header-together.png";
import puma from "../../img/header/header-puma.png";
import HeaderKids from "../Header/ChildrensHeader/Header";
import bRegresar from "../../assets/img/botonregresar.png";
import { Link } from "react-router-dom";

class PaintChildrenTwo extends Component {
  state = {
    color: "#ffc600",
    width: 363,
    height: 495,
    brushRadius: 10,
  };
  componentDidMount() {
    // let's change the color randomly every 2 seconds. fun!
    window.setInterval(() => {
      this.setState({
        color: "#" + Math.floor(Math.random() * 16777215).toString(16),
      });
    }, 10000);
  }
  render() {
    return (
      <Fragment>
        <div  className={style.divContainer}>
          <HeaderKids leftImage={together} rightImage={puma} />

         
            <div className={style.tools}>
              <button className={style.bClear}
                onClick={() => {
                  this.saveableCanvas.clear();
                }}
              >
                Borrar
              </button>

              <div>
              <label className={style.brushR}>Ancho Brocha:</label>
                <input
                 className={style.InBr}
                  type="number"
                  value={this.state.brushRadius}
                  onChange={(e) =>
                    this.setState({ brushRadius: parseInt(e.target.value, 10) })
                  }
                />
              </div>
            </div>
            <div className={style.dFCanvas}>
              <CanvasDraw
                ref={(canvasDraw) => (this.saveableCanvas = canvasDraw)}
                brushColor={this.state.color}
                brushRadius={this.state.brushRadius}
                canvasWidth={this.state.width}
                canvasHeight={this.state.height}
                imgSrc={leonCorona}
                style={{zIndex: '0'}}
              />
            </div>
          
          <div>
            <Link to="/MenuColorear">
              <img className={style.bBack} src={bRegresar}></img>
            </Link>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default PaintChildrenTwo;
