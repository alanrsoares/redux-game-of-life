import React, { Component } from 'react';
import cn from 'classnames';

export default class Tile extends Component {
  render() {
    return (
      <td className={ cn('tile', { alive: this.props.alive }) }
          onMouseOver={ this.onMouseOver.bind(this) }
          onMouseDown={ this.onMouseDown.bind(this) }></td>
    );
  }

  onMouseDown(e) {
    if (e.nativeEvent.which !== 1) { return; }
    this.props.toggle(this.props.alive);
  }

  onMouseOver(e) {
    if (e.nativeEvent.which !== 1) { return; }
    this.props.toggle(this.props.alive);
  }
}
