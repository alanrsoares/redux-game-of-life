import React, { Component } from 'react';
import cn from 'classnames';

export default class Tile extends Component {
  render() {
    return (
      <span
        className={ cn('tile', { active: this.props.checked }) }
        onClick={ () => this.props.toggle(this.props.checked) }
      >{ '' }</span>
    );
  }
}
