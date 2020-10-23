import React, { useState } from 'react';
import './App.css';
import ParticlesBg from "particles-bg";
import { questions, petrs } from "./data.js";
// import data from './data.json';
// import Restore from '@material-ui/icons/Restore';


function App() {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [petr, setPetr] = useState(0);
  const [petrImg, setPetrImg] = useState(require('./img/petr_mystery.png'));

  const handleAnswerOptionClick = (petr) => {
    petr += 1;
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
      setShowResult(true);
      setPetrImg(require('./img/beach_bum_petr.jpg'))
		}
  };
  
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className="App">
      <div>
        <ParticlesBg type="circle" bg={true}/>
      </div>
      <header className="App-header">
        <h1 class="animate_animated animate_bounce">Which petr are you?</h1>
      </header>
      <img src={petrImg} alt="Petr Sticker" class="animate_animated animate_bounce"/>
      <div className="Quiz">
        {showResult ? (
          <div className='score-section'>
            <h3>you got:</h3>
            <h2>beach bum petr</h2>
            <p>Description</p>
            <button onClick={refreshPage} id='takeAgain'>Take the quiz again</button>
          </div>
        ) : (
          <>
            <div className='question-section'>
              <div className='question-count'>
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className='question-text'>{questions[currentQuestion].questionText}</div>
            </div>
            <div className='answer-section'>
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button onClick={() => handleAnswerOptionClick(answerOption.petr)}>{answerOption.answerText}</button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
