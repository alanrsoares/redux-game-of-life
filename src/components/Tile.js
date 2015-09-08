import React, { Component } from 'react';

export default class Tile extends Component {
  render() {
    return (
      <input
        type="checkbox"
        checked={ !!this.props.checked }
        onChange={ () => this.props.toggle(!!this.props.checked) }
      />
    );
  }
}
