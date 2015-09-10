import React, { Component } from 'react';
import ToggleButton from './ToggleButton';

export default class GridControls extends Component {
  constructor(props) {
    super(props);
    this.frameId = null;
  }

  render() {
    return (
      <div className="grid-controls">
        <div className="btn-group" role="group">
          <button className="btn btn-danger" onClick={ this.props.actions.clear }>
            CLEAR
          </button>
          <button className="btn btn-success" onClick={ this.props.actions.random }>
            RANDOMIZE
          </button>
          <button className="btn btn-default" onClick={ this.props.actions.tick }>
            <i className="fa fa-forward fa-lg"></i> NEXT
          </button>
          <ToggleButton label="AUTO" onClick={ this.toggleAutoplay(this.props.actions.tick) }/>
        </div>
      </div>
    );
  }

  toggleAutoplay(tick) {
    return () => {
      if (!this.frameId) {
        return this.start(tick);
      };
      this.stop();
    };
  }

  start(tick) {
    this.frameId = requestAnimationFrame(() => this.start(tick));
    tick();
  }

  stop() {
    cancelAnimationFrame(this.frameId);
    this.frameId = null;
  }

}
