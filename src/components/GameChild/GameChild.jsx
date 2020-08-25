import React from 'react';
import "./GameChild.css";

export const Trivia = (props) => {
  const handleOnClickAnswer = (isCorrect) =>{
    const onOk = props.onOk
    const onError = props.onError
    if (isCorrect ===true) {
      onOk && onOk(); 
    } else{
      onError && onError() 
    }
  }
  const questions = props.questions || [];
  return (
    <div>
      {questions.map((question,qindex)=>{
        return (
          <div key={`question-${qindex}`}  className='question'>
            <p>{question.description}</p>
            <div className='answers'>
              {question.answers.map((answer, aindex)=>{
                return (
                    <button
                    onClick={()=> handleOnClickAnswer(answer.isCorrect)}
                    key={`answer-${aindex}`}>
                    {answer.description}{<img className="img-Trivia" alt="" src ={answer.img} />}
                  </button>
                )
              })}
            </div>
          </div>            
        )
        })}
      </div>
  )
}   