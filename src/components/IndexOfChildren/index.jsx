import React, { Fragment } from "react";
import HeaderKids from "../Header/ChildrensHeader/Header";
import "./index.css";
import { Link } from "react-router-dom";
import Girl from "../../img/header/header-girl.png";
import Boy from "../../img/header/header-boy.png";
import Jabier from "../../img/card-button/jabier-jabon.png";
import Mask from "../../img/card-button/mask.png";
import Pencil from "../../img/card-button/pencil.png";
import Play from "../../img/card-button/play.png";
import Paragraph from "../Children/Paragraph";
import "./index.css";

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
       
          <div className='containerCardButtons'>
          <Paragraph paragraph={`Aprendamos jugando`} />
            <Link to='/trivia'>
                <CardButton img={Jabier} />
            </Link>
            <Link to='/trivia'>
                <CardButton img={Mask} />
            </Link>
            <Link to='/menucolorear'>
                <CardButton img={Pencil} />
            </Link>
            <Link to='/videos'>
                <CardButton img={Play} />
            </Link>
          </div>
      </div>
    </Fragment>
  );
};

export default IndexOfChildren;
