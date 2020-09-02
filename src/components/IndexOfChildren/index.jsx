import React, { Fragment } from "react";
import HeaderKids from "../Header/ChildrensHeader/Header";
import { Link } from "react-router-dom";
import Jump from "react-reveal/Jump";
import Girl from "../../img/header/header-girl.png";
import Boy from "../../img/header/header-boy.png";
import Jabier from "../../img/card-button/menu/jabier-jabon.png";
import Mask from "../../img/card-button/menu/mask.png";
import Pencil from "../../img/card-button/menu/pencil.png";
import Play from "../../img/card-button/menu/play.png";
import Paragraph from "../Children/Paragraph";
import bRegresar from '../../assets/img/botonregresar.png'
import "./index.css";
import styled from "styled-components";

const CardButton = (props) => {
  return (
    <div className="containerCard">
      <img src={props.img} alt="card img" className="imgCardButton" />
    </div>
  );
};

const IndexOfChildren = () => {

  return (
    <Fragment>
      <div className='divContainer'>
          <HeaderKids leftImage={Girl} rightImage={Boy} />
          <Paragraph paragraph={`Aprendamos jugando`} />
          <div className='containerCardButtons'>
            <Link to='/trivia'>
                <CardButton img={Jabier} />
            </Link>
            <Link to='/adulto'>
                <CardButton img={Mask} />
            </Link>
            <Link to='/menucolorear'>
                <CardButton img={Pencil} />
            </Link>
            <Link to='/videos'>
                <CardButton img={Play} />
            </Link>
          
          </div>
          <Link to='/'>
            
            <img className='bBackIndex' src={bRegresar}></img>
         
          </Link>
      </div>
    </Fragment>
  );
};

export default IndexOfChildren;
