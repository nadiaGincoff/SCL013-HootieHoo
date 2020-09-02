import React from "react";
import { Link } from 'react-router-dom'
import Fade from "react-reveal/Fade";
import HeaderKids from '../Header/ChildrensHeader/Header';
import AngryCrown from '../../img/header/covid-corona.png';
import Jabier from '../../img/header/header-jabier.png';
import Questions from "../GameChild/Quiz";
import bRegresar from '../../assets/img/botonregresar.png'
import "./Children.css";

const Children = () => {

  return (
    <div className='divContainer'>
      <HeaderKids leftImage={AngryCrown} rightImage={Jabier} />
      <Fade>
        <Questions></Questions>
      </Fade>
      <Link to='/Niños'>
      <img className='bBack' src={bRegresar}></img>
      </Link>
    </div>
  );
};

export default Children;
