import React from "react";
// import Data from "../../Data.json";
import Fade from "react-reveal/Fade";
// import Trivia from "../GameChild/GameChild";
import HeaderKids from '../Header/ChildrensHeader/Header';
import AngryCrown from '../../img/header/covid-corona.png';
import Jabier from '../../img/header/header-jabier.png';
import Questions from "../GameChild/Quiz";

const Children = () => {
  // const onOk = () => {
  //   alert("Respuesta Correcta");
  // };
  // const onError = () => {
  //   alert("Respuesta Incorrecta");
  // };

  return (
    <div className='divContainer'>
      <HeaderKids leftImage={AngryCrown} rightImage={Jabier} />
      <Fade>
        <Questions></Questions>
        {/* <Trivia onOk={onOk} onError={onError} questions={Data.questions} /> */}
      </Fade>
    </div>
  );
};

export default Children;
