import React, { Fragment } from "react";
import HeaderKids from "../Header/ChildrensHeader/Header";
import "./index.css";
import { Link } from "react-router-dom";
import Reveal from "react-reveal/Fade";
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
    <Fragment className="divContainer">
      <div>
        
          <HeaderKids leftImage={Girl} rightImage={Boy} />
          <Paragraph paragraph={`Aprendamos jugando`} />
          <div className="containerCardButtons">
            <Link to="/trivia">
              <CardButton img={Jabier} />
            </Link>
            <CardButton img={Mask} />
            <CardButton img={Pencil} />
            <CardButton img={Play} />
          </div>
       
      </div>
    </Fragment>
  );
};

export default IndexOfChildren;
