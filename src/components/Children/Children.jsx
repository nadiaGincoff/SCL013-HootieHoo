import React from "react";
import Data from "../../Data.json";
import Fade from "react-reveal/Fade";
import { Trivia } from "../GameChild/GameChild";
import Logo from "../Logo/Logo";

const Children = () => {
  const onOk = () => {
    alert("Respuesta Correcta");
  };
  const onError = () => {
    alert("Respuesta Incorrecta");
  };

  return (
    <div>
      <Logo />
      <Fade>
        <Trivia onOk={onOk} onError={onError} questions={Data.questions} />
      </Fade>
    </div>
  );
};

export default Children;
