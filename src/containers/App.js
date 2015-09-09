import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Grid from '../components/Grid';
import ToggleButton from '../components/ToggleButton';
import * as GridActions from '../actions/grid';

let frameId = null;

class App extends Component {

  render() {
    const { data, dispatch } = this.props;
    const actions = bindActionCreators(GridActions, dispatch);

    return (
      <div>
        <div className="btn-group" role="group">
          <button className="btn btn-primary" onClick={ actions.clear }>NEW</button>
          <button className="btn btn-success">SAVE</button>
          <button className="btn btn-default" onClick={ actions.tick }>NEXT</button>
          <ToggleButton onClick={ this.toggleAutoplay(actions.tick) }/>
        </div>
        <div>
          <Grid data={ data } toggle={ actions.toggle }/>
        </div>
      </div>
    );
  }

  toggleAutoplay(tick) {
    return () => {
      if (!frameId) {
        return this.start(tick);
      };
      this.stop();
    };
  }

  start(tick) {
    frameId = requestAnimationFrame(() => this.start(tick));
    tick();
  }

  stop() {
    cancelAnimationFrame(frameId);
    frameId = null;
  }
}

App.propTypes = {
  data: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect(({ grid }) => ({ data: grid }))(App);
