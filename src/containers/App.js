import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Grid from '../components/Grid';
import * as GridActions from '../actions/grid';

class App extends Component {
  render() {
    const { data, dispatch } = this.props;
    const actions = bindActionCreators(GridActions, dispatch);

    return (
      <div>
        <div> { "Conway's Game of Life" } </div>
        <div>
          <button onClick={ actions.tick }> next </button>
        </div>
        <div>
          <Grid data={ data } toggle={ actions.toggle }/>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  data: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    data: state.grid
  };
}

export default connect(mapStateToProps)(App);
