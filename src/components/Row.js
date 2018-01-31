import React, {Component} from 'react';
import Square from './Square';

class Row extends Component {
  render() {
    return (
      <div className="row">
        <Square className={"left"}/>
        <Square className={"middle"}/>
        <Square className={"right"}/>
      </div>
    )
  }
}

export default Row;
