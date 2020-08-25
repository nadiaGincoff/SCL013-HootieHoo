import React from 'react'
import Data from '../../Data.json';
import { Trivia } from '../GameChild/GameChild';
import Logo from '../Logo/Logo'
 


export const Niños = () =>{
  const onOk = () =>{
    alert("Respuesta Correcta")

  }
  const onError = () =>{
    alert("Respuesta Incorrecta")
  }
  return(
    <div>
     <Logo/>
      <Trivia onOk={onOk} onError={onError} questions={Data.questions}/>
    </div>
  )
}

export default Niños
