import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import IntroductionParagraph from './IntroductionParagraph';
import ReactMinneapolis from './ReactMinneapolis';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <IntroductionParagraph />
        <ReactMinneapolis />
      </div>
    );
  }
}

export default App;
