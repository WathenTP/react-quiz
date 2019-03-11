import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Question from './components/Question';

class App extends Component {
  render () {
    return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Thom's Big Fat Quiz of the Year!</h2>
      </div>
      <Question content="Who Killed Anakin Skywalker?" />
    </div>
    )
  }
};

export default App;


