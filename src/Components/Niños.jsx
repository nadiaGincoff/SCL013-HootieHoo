import React from 'react'
import Data from '../Data.json';
import { Trivia } from './GameChild';
import imagotipo from "../img/imagotipo.jpg";
 


export const Niños = () =>{
  const onOk = () =>{
    alert("Respuesta Correcta")

  }
  const onError = () =>{
    alert("Respuesta Incorrecta")
  }
  return(
    <div>
      <img className="imagotipo" alt="imagotipo" src={imagotipo} />
      <Trivia onOk={onOk} onError={onError} questions={Data.questions}/>
    </div>
  )
}

export default Niños
