import React, {Component} from 'react';
import Row from './Row';
import '../css/GameBoard.css';

class GameBoard extends Component {
  render() {
    return (
      <div className='gameBoard'>
        <Row className={"topRow"}/>
        <Row className={"middleRow"}/>
        <Row className={"bottomRow"}/>
      </div>
    )
  }
}

export default GameBoard
