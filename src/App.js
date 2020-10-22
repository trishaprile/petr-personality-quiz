import React, { useState } from 'react';
import './App.css';
import ParticlesBg from "particles-bg";

function App() {

  const questions = [
		{
			questionText: 'What do you like to do in your free time?',
			answerOptions: [
				{ answerText: 'New York'},
				{ answerText: 'London'},
				{ answerText: 'Paris'},
				{ answerText: 'Dublin'},
			],
		},
		{
			questionText: 'Pick a color',
			answerOptions: [
				{ answerText: 'Jeff Bezos'},
				{ answerText: 'Elon Musk'},
				{ answerText: 'Bill Gates'},
				{ answerText: 'Tony Stark'},
			],
		},
		{
			questionText: 'Choose a career',
			answerOptions: [
				{ answerText: 'Apple'},
				{ answerText: 'Intel'},
				{ answerText: 'Amazon'},
				{ answerText: 'Microsoft'},
			],
		},
		{
			questionText: 'Which word describes you the most?',
			answerOptions: [
				{ answerText: '1'},
				{ answerText: '4'},
				{ answerText: '6'},
				{ answerText: '7'},
			],
		},
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowResult(true);
		}
	};

  return (
    <div className="App">
      <header className="App-header">
        Which petr are you?
      </header>
      <div>
        <ParticlesBg type="circle" bg={true}/>
      </div>
      <div className="Quiz">
        {showResult ? (
          <div className='score-section'>
            You got:
            beach bum petr
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
                <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;



// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
