import React from "react";
import Questions from './Quiz'
import style from "./GameChild.module.css";

// export const Trivia = (props) => {
//   const handleOnClickAnswer = (isCorrect) => {
//     const onOk = props.onOk;
//     const onError = props.onError;
//     if (isCorrect === true) {
//       onOk && onOk();
//     } else {
//       onError && onError();
//     }
//   };

//   const questions = props.questions || [];
//   return (
//     <div>
//       {questions.map((question, qindex) => {
//         return (
//           <div key={`question-${qindex}`} className={style.question}>
//             <p>{question.description}</p>
//             <div className={style.answer}>
//               {question.answers.map((answer, aindex) => {
//                 return (
//                   <button
//                     onClick={() => handleOnClickAnswer(answer.isCorrect)}
//                     key={`answer-${aindex}`}
//                   >
//                     {answer.description}
//                     {
//                       <img
//                         className={style.imgTrivia}
//                         alt=""
//                         src={answer.img}
//                       />
//                     }
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

const Trivia = () => {
  return (
    <div>
      <Questions></Questions>
    </div>
  )
}

export default Trivia