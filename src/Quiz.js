import React, { Component } from 'react';
import QuizQuestion from './QuizQuestion.js';
import QuizEnd from './QuizEnd.js';

let quizData = require('./quiz_data.json');


class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quiz_position: 1
    };
  }

  render() {
    console.log(quizData);
    const isQuizEnd = function(){
      return (this.state.quiz_position-1 === quizData.quiz_questions.length);
    };

    return (
      <div>
        <div className="QuizQuestion">
				{ isQuizEnd  		// if true
					?  <QuizEnd />		// show quiz end dialog, otherwise:
					: <QuizQuestion   // show questions
          quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]}
          /> }
        </div>
      </div>
    );
  }
}


export default Quiz;


// Conditionally displaying components in the Quiz JSX

// Write a condition in JSX that displays QuizEnd component if the isQuizEnd constant is true.

// If it is false, display QuizQuestion component keeping the quiz_question prop that's already there.

// Note: until we get the full logic set up, you can test if this is working by manually setting isQuizEnd to true or false.