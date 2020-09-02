import React, { useState, useEffect } from "react";
import "./Quiz.css";
import { JSONManager } from "../../networking/JSONManager";
import { Link } from "react-router-dom";
import Jump from "react-reveal/Jump";
import Pulse from "react-reveal/Pulse";
import Paragraph from "../Children/Paragraph";
import YouLost from "../../img/game-result/youlost.png";
import YouWin from "../../img/game-result/youwin.png";
import Star from "../../img/game-result/star.png";
import { useSpeechSynthesis } from "react-speech-kit";
import Modal from "react-modal";
import UIfx from 'uifx'
import selectAudio from '../../sounds/select-answer.mp3'
import lostAudio from '../../sounds/you-lost.ogg'
import winAudio from '../../sounds/you-win.ogg'

// const soundSelect = new UIfx(select)

const soundSelect = new UIfx(
    selectAudio,
    {
      volume: 0.2, // number between 0.0 ~ 1.0
      throttleMs: 100
    }
)

const lost = new UIfx(
    lostAudio,
    {
      volume: 0.2, // number between 0.0 ~ 1.0
      throttleMs: 100
    }
)

const win = new UIfx(
    winAudio,
    {
      volume: 0.2, // number between 0.0 ~ 1.0
      throttleMs: 100
    }
)

Modal.setAppElement("#root");
const paragraph = `Tus respuestas correctas son: `;

let arrayRightAnswers = [];

const QuizResult = (props) => {
  return (
    <div className="modalItem">
      <Jump>
        <Paragraph paragraph={paragraph + props.gameResult}></Paragraph>
        <div className="starsContainer">
          {
            (arrayRightAnswers.shift(),
            arrayRightAnswers.map((answer) => <img src={Star} alt={answer} />))
          }
        </div>
        <img
          src={props.resultImage}
          alt="jabierResult"
          className="jabierResult"
        />
      </Jump>
    </div>
  );
};

const Questions = () => {
  const { speak } = useSpeechSynthesis();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [gameState, setGameState] = useState(true);
  const [rightAnswers, setRightAnswers] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState({
    id: "",
    description: "",
    answers: [],
  });

  // Leer data desde JSONManager
  useEffect(() => {
    JSONManager.getQuestions().then((questions) => {
      setQuestions(questions);
      setCurrentQuestion(questions[0]);
    });
  }, []);

  const resetGame = () => {
    arrayRightAnswers = [];
    setCurrentQuestion({
      id: "",
      description: "",
      answers: [],
    });
    setRightAnswers(0);
    setGameState(false);
    setQuestions([]);
    setQuestionIndex(0);
    setIsMenuOpen(false);
    return;
  };
  // Guardo las respuestas correctas, sino continuo con la trivia
  const sendAnswer = (isCorrect) => {
    if (isCorrect) {
      setRightAnswers(rightAnswers + 1);
      arrayRightAnswers.push(rightAnswers);
     
    }
    if (questionIndex === questions.length) {
      setGameState(false);
      setIsMenuOpen(true);
      return;
    }
    
    setQuestionIndex(questionIndex + 1);
    setCurrentQuestion(questions[questionIndex]);
  };

  // El juego continua si hay respuestas por responder
  if (gameState) {
    return (
      <div className="container">
        <Jump>
          <div className="containerQuestions">
            <div key={currentQuestion.id}>
              <div className="questionTitleContainer">
                <Paragraph paragraph={currentQuestion.description}></Paragraph>
                <button
                  className='buttonSpeak'
                  onClick={() => speak({ text: currentQuestion.description })}
                >
                  <i class="fas fa-volume-up" />
                </button>
              </div>
              <div className="containerCardButtonsGame">
                {currentQuestion.answers.map((answer) => (
                  <Pulse>
                    <div className="containerCardGame" onClick={() => soundSelect.play()}>
                      <img
                        onClick={() => {
                          sendAnswer(answer.isCorrect);
                        }}
                        className="imgCardButtonGame"
                        src={answer.img}
                      />
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
  } else if (rightAnswers <= 3) {
    return (
      <div>
        <Link to="/niños">
          <Modal
            isOpen={isMenuOpen}
            onAfterClose={resetGame}
            closeTimeoutMS={2000}
            className="modalStyle"
          >
            {lost.play()}
            <i className="fas fa-times-circle"></i>
            <Jump>
              <QuizResult
                gameResult={rightAnswers - 1}
                resultImage={YouLost}
                className="modalContent"
                reset={resetGame}
              />
            </Jump>
          </Modal>
        </Link>
      </div>
    );
  } else {
    return (
      <div>
        <Link to="/niños">
          <Modal
            isOpen={isMenuOpen}
            onAfterClose={resetGame}
            closeTimeoutMS={2000}
            className="modalStyle"
          >
            {win.play()}
            <i className="fas fa-times-circle"></i>
            <Jump>
              <QuizResult
                gameResult={rightAnswers - 1}
                resultImage={YouWin}
                className="modalContent"
                reset={resetGame}
              />
            </Jump>
          </Modal>
        </Link>
      </div>
    );
  }
};

export default Questions;

//<button style={{background: '', width: '29px'}} onClick={() => speak({ text: currentQuestion.description })}><i class="fas fa-volume-up"></i></button>
