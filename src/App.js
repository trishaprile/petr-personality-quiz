import React, { useState } from 'react';
import './App.css';
import ParticlesBg from "particles-bg";
import { questions, petrs } from "./data.js";
import styled, { keyframes } from 'styled-components';
import { bounce, fadeIn, slideInRight } from 'react-animations'

function App() {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [petrResult, setPetrResult] = useState('');
  const [petrImg, setPetrImg] = useState(require('./img/petr_mystery.png'));
  const [petrDesc, setPetrDesc] = useState('');

  const handleAnswerOptionClick = (petr) => {
    petrs.find(x => x.id === petr).points += 1;
    const nextQuestion = currentQuestion + 1;
    
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
      var finalPetr = petrs.sort(function(a, b){return b.points - a.points})[0];
      setPetrResult(finalPetr.name);
      setPetrImg(require(`${finalPetr.img}`));
      setPetrDesc(finalPetr.description);
      setShowResult(true);
		}
  };
  
  function refreshPage() {
    window.location.reload(false);
  }

  const Bounce = styled.div`animation: 1s ${keyframes`${bounce}`}`;
  const Fade = styled.div`animation: 1s ${keyframes`${fadeIn}`}`;
  const Slide = styled.div`animation: 1s ${keyframes`${slideInRight}`}`;


  return (
    <div className="App">
      <div>
        <ParticlesBg type="circle" bg={true}/>
      </div>
      <header className="App-header">
        <h1>Which petr are you?</h1>
      </header>
      <Bounce><img src={petrImg} alt="Petr Sticker"/></Bounce>
      <div className="Quiz">
        {showResult ? (
          <Fade><div className='score-section'>
            <h3>you got:</h3>
            <h2>{petrResult}</h2>
            <p>{petrDesc}</p>
            <button onClick={refreshPage} id='takeAgain'>Take the quiz again</button>
          </div></Fade>
        ) : (
          <>
            <Fade><div className='question-section'>
              <div className='question-count'>
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className='question-text'>{questions[currentQuestion].questionText}</div>
            </div></Fade>
            <Fade><div className='answer-section'>
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button onClick={() => handleAnswerOptionClick(answerOption.petr)}>{answerOption.answerText}</button>
              ))}
            </div></Fade>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
