import React, { useState, useEffect } from 'react'
import './Quiz.css';
import { JSONManager } from '../../networking/JSONManager';
import Jump from "react-reveal/Jump";
import Pulse from 'react-reveal/Pulse';
import Paragraph from '../Children/Paragraph';
import YouLost from '../../img/game-result/youlost.png'
import YouWin from '../../img/game-result/youwin.png'
import Star from '../../img/game-result/star.png'
import Speech from 'react-speech';

const paragraph = `Tus respuestas correctas son: `

const QuizResult = (props) => {
    return ( 
        <div>
            <Speech text={ paragraph + props.gameResult} ></Speech>
            <Paragraph paragraph={ paragraph + props.gameResult }></Paragraph>
            <img src={props.resultImage} alt='jabierResult' />
        </div>
    );
}
 

const Questions = () => {

    const [ gameState, setGameState ] = useState(true)
    const [ rightAnswers, setRightAnswers ] = useState(0)
    const [ questions, setQuestions ] = useState([])
    const [ questionIndex, setQuestionIndex ] = useState(0)
    const [ currentQuestion, setCurrentQuestion ] = useState(
        {
            id: "",
            description: "",
            answers: []
        }
    )

    useEffect(() => {
        JSONManager.getQuestions()
        .then(questions => {
            setQuestions(questions)
            setCurrentQuestion(questions[0])
        })
    }, [])

    const sendAnswer = (isCorrect) => {
        if ( isCorrect ) {
            setRightAnswers(rightAnswers + 1)
        }
        if ( questionIndex === questions.length ) {
            setGameState(false)
            return
        }
        setQuestionIndex(questionIndex + 1)
        setCurrentQuestion(questions[questionIndex])
    } 
    if (gameState) {
        return ( 
            <div>
                <Jump>
                <div className="containerQuestions">
                    <div key={ currentQuestion.id } > 
                    <Pulse spy={rightAnswers}>
                        <div>
                            <Paragraph paragraph={currentQuestion.description}></Paragraph>
                        </div>
                        <div className='containerCardButtonsGame'>
                            { currentQuestion.answers.map(answer => (
                                
                                
                                <div className='containerCardGame'>
                                   
                                        <img onClick={() => { sendAnswer(answer.isCorrect) }} className='imgCardButtonGame' src={ answer.img } />
                                   
                                </div>   
                            
                            ))}
                       </div>
                    
                    </Pulse>
                    </div>
                </div>
                </Jump>
            </div> 
        );
    } else if (rightAnswers < 3) {
        console.log(rightAnswers)
        return (
            <div>
                <Jump>
                    <QuizResult gameResult={rightAnswers} resultImage={YouLost}></QuizResult>
                </Jump>
            
            </div>

        )
    } else {
        console.log(rightAnswers)
        return (
            <div>
                <Jump >
                    <QuizResult gameResult={rightAnswers} resultImage={YouWin} ></QuizResult>
                </Jump>
            </div>
        )
    }
}

export default Questions;