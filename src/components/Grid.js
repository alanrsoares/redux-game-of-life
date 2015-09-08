import React, { Component, createElement } from 'react';
import Tile from './Tile';

export default class Grid extends Component {

  render() {
    return (
      <div>
        { this.props.data.map(this.renderRow.bind(this)) }
      </div>
    );
  }

  renderRow(row, y) {
    return (
      <div key={ y }>
        { row.map(this.renderTile(y)) }
      </div>
    );
  }

  renderTile(y) {
    return (checked, x) =>
      createElement(Tile, {
        key: x,
        toggle: this.toggle(y, x),
        checked
      });
  }

  toggle(y, x) {
    return (checked) => console.log('toggle', [y, x], checked);
  }
}
