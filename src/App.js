import React, { Component } from 'react';
import './App.css';
import Quiz from './Quiz';


class App extends Component {
  render() {
    return (
      <div>
        <h1 className="QuizQuestion">It's Quiz Time!</h1>
        <Quiz />
      </div>
    );
  }
}

export default App;