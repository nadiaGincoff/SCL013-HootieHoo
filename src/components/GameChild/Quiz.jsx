import React, { useState, useEffect } from 'react'
import './Quiz.css';
import { JSONManager } from '../../networking/JSONManager';
import Jump from "react-reveal/Jump";
import Pulse from 'react-reveal/Pulse';
import Paragraph from '../Children/Paragraph';
import YouLost from '../../img/game-result/youlost.png'
import YouWin from '../../img/game-result/youwin.png'
import { useSpeechSynthesis } from 'react-speech-kit'
import Modal from 'react-modal'

const paragraph = `Tus respuestas correctas son: `
Modal.setAppElement('#root')
const QuizResult = (props) => {
    return ( 
        <div>
            <Jump>
                <Paragraph paragraph={ paragraph + props.gameResult }></Paragraph>
                <img src={props.resultImage} alt='jabierResult' />
            </Jump>
        </div>
    );
}
 

const Questions = () => {
    const { speak } = useSpeechSynthesis(); 
    const [ isMenuOpen, setIsMenuOpen ] = useState(false);
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

    // Leer data desde JSONManager
    useEffect(() => {
        JSONManager.getQuestions()
        .then(questions => {
            setQuestions(questions)
            setCurrentQuestion(questions[0])
        })
    }, [])
    
    // Guardo las respuestas correctas, sino continuo con la trivia
    const sendAnswer = (isCorrect) => {
        if ( isCorrect ) {
            setRightAnswers(rightAnswers + 1)
        }
        if ( questionIndex === questions.length ) {
            setGameState(false)
            return
        }
        if ( questionIndex > 5) {
            setIsMenuOpen(true)
        }
        
        setQuestionIndex(questionIndex + 1)
        setCurrentQuestion(questions[questionIndex])
    } 

    // El juego continua si hay respuestas por responder
    if (gameState) {
        return ( 
            <div>
                <Jump>
                    <div className="containerQuestions">
                        <div key={ currentQuestion.id } > 
                            <div>
                                <button style={{background: 'red', width: '29px'}} onClick={() => speak({ text: currentQuestion.description })}></button>
                                <Paragraph paragraph={currentQuestion.description} ></Paragraph>
                            </div>
                             
                            <div className='containerCardButtonsGame'>
                                { currentQuestion.answers.map(answer => (
                                    <Pulse>     
                                        <div className='containerCardGame'>
                                            <img onClick={() => { sendAnswer(answer.isCorrect) }} className='imgCardButtonGame' src={ answer.img } />
                                        </div>    
                                    </Pulse>                         
                                ))}
                            </div>                                                  
                        </div>
                    </div>
                </Jump>
            </div> 
        );

    // Renderiza según cantidad de respuestas
    } else if (rightAnswers < 3) {
        
        return (
           
            <div>
                
                   
                    <Modal isOpen={isMenuOpen} onRequestClose={() => setIsMenuOpen(false)} closeTimeoutMS={2000} className='modalStyle'>
                        <QuizResult gameResult={rightAnswers} resultImage={YouLost}></QuizResult>
                    </Modal>
                                 
               
            </div>

        )
    } else {
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