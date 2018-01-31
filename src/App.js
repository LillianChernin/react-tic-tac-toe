import React, { Component } from 'react';
import './css/App.css';
import GameBoard from './components/GameBoard';

class App extends Component {
  render() {
    return (
      <div>
        <GameBoard />
      </div>
    );
  }
}

export default App;
