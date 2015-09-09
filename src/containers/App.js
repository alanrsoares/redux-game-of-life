import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Grid from '../components/Grid';
import GridControls from '../components/GridControls';
import * as GridActions from '../actions/grid';

class App extends Component {
  render() {
    const { data, dispatch } = this.props;
    const actions = bindActionCreators(GridActions, dispatch);

    return (
      <div>
        <GridControls actions={ actions } />
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

export default connect(({ grid }) => ({ data: grid }))(App);
