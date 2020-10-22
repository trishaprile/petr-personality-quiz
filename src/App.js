import React, { useState } from 'react';
import './App.css';
import ParticlesBg from "particles-bg";
// import data from './data.json';

function App() {

  var beachBum, dontTalk, eastr, grad, jolly, lucky, marchMadness, newYears, romantic, spooky, thankful, thanos;
  beachBum = dontTalk = eastr = grad = jolly = lucky = marchMadness = newYears = romantic = spooky = thankful = thanos = 0;

  const questions = [
		{
			questionText: 'Where do you like to study?',
			answerOptions: [
				{ answerText: 'At a coffee/boba shop', petr: 'jolly'},
				{ answerText: 'Anywhere with friends', petr: 'dontTalk'},
        { answerText: 'In the library', petr: 'grad'},
        { answerText: "I don't", petr: 'beachBum'},
			],
		},
    {
			questionText: 'How do you get around?',
			answerOptions: [
				{ answerText: 'Walking', petr: 'thanos'},
				{ answerText: 'Riding my scooter/bike', petr: 'grad'},
				{ answerText: 'Driving', petr: 'jolly'},
        { answerText: 'Taking an Anteater Express Bus', petr: 'newYears'},
			],
    },
    {
			questionText: 'What do you buy on Ring Road?',
			answerOptions: [
				{ answerText: 'Boba', petr: 'romantic'},
				{ answerText: 'Spam musubi', petr: 'dontTalk'},
				{ answerText: 'Costco pizza and churros', petr: 'thanos'},
				{ answerText: "Nothing, I'm broke", petr: 'newYears'},
			],
    },
    {
			questionText: 'What do you do during class?',
			answerOptions: [
				{ answerText: 'Pay attention and take notes', petr: 'grad'},
				{ answerText: 'Browse Confessions at UCI and Zotmemes', petr: 'thanos'},
				{ answerText: 'Sleep', petr: 'beachBum'},
        { answerText: 'Go on Tinder', petr: 'romantic'},
			],
    },
    {
			questionText: 'What do you do after class?',
			answerOptions: [
				{ answerText: 'Work out at the ARC', petr: 'marchMadness'},
				{ answerText: 'Study at Langson', petr: 'grad'},
				{ answerText: 'Grab food at UTC', petr: 'jolly'},
				{ answerText: 'Take a nap', petr: 'beachBum'},
			],
    },
    {
			questionText: 'What are you doing on a Friday night?',
			answerOptions: [
				{ answerText: 'Eating dinner at Diamond Jamboree', petr: 'jolly'},
				{ answerText: 'Hanging out at Turtle Rock', petr: 'thanos'},
				{ answerText: 'Attending a club event', petr: 'jolly'},
        { answerText: 'Staying in', petr: 'beachBum'},
			],
    },
    {
			questionText: 'How do you spend your Saturdays?',
			answerOptions: [
				{ answerText: 'Shopping at Irvine Spectrum', petr: 'jolly'},
				{ answerText: 'Playing sports or hiking', petr: 'marchMadness'},
				{ answerText: 'Studying and homework', petr: 'grad'},
        { answerText: 'Playing video games', petr: 'beachBum'},
			],
    },
    {
			questionText: 'Someone with a clipboard approaches you at Student Center. What do you do?',
			answerOptions: [
				{ answerText: 'Listen to what they have to say', petr: 'jolly'},
				{ answerText: "Pretend you don't see them", petr: 'romantic'},
				{ answerText: 'Tell them you have to go to class', petr: 'grad'},
        { answerText: 'Run away', petr: 'thanos'},
      ],
    }
  ];

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
            <h2>beach bum petr</h2>
            <button onClick={refreshPage}>Take Again</button>
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
