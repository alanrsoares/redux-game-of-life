import React, { Component, createElement } from 'react';
import Tile from './Tile';

export default class Grid extends Component {
  render() {
    console.log(this.props.data.length)
    return (
      <div>
        { this.props.data.map(this.renderRow.bind(this)) }
      </div>
    );
  }

  renderRow(row, y) {
    return (
      <div>
        { row.map(this.renderTile(y)) }
      </div>
    );
  }

  renderTile(y) {
    return (checked, x) =>
      createElement(Tile, { 
        key: `${y}${x}`,
        toggle: this.toggle(y, x),
        checked
      });
  }

  toggle(y, x) {
    return () => console.log('toggle', [y, x]);
  }
}
