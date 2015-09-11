import React, { Component } from 'react';
import cn from 'classnames';

const NO_OP = () => null;

export default class ToggleButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      on: props.on
    };
  }

  render() {
    const classes = cn('fa', 'fa-lg', {
      [this.props.onClass]: this.state.on,
      [this.props.offClass]: !this.state.on
    });

    return (
      <label htmlFor="autoplay" className="btn btn-default">
        <i className={ classes }></i>
        <input
          id="autoplay"
          style={{ display: 'none' }}
          type="checkbox"
          onChange={ this.handleChange.bind(this) }/> { this.props.label }
      </label>
    );
  }

  handleChange() {
    this.setState({ on: !this.state.on });
    this.props.onClick();
  }
}


ToggleButton.defaultProps = {
  onClass: 'fa-pause',
  offClass: 'fa-play',
  onClick: NO_OP
}
