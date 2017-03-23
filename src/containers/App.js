import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import GridControls from '../components/GridControls'
import Grid from '../components/Grid'
import ForkMeOnGithubRibbon from '../components/ForkMeOnGithubRibbon'
import * as GridActions from '../actions/grid'

class App extends Component {
  render () {
    return (
      <div>
        <GridControls
          actions={this.props.actions}
          profiler={this.props.profiler}
        />
        <div>
          <Grid
            data={this.props.grid}
            toggle={this.props.actions.toggle}
          />
        </div>
        <ForkMeOnGithubRibbon />
      </div>
    )
  }
}

App.propTypes = {
  grid: PropTypes.array.isRequired,
  profiler: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default connect(
  // map state to props
  (state) => ({ ...state }),
  // map dispatch to props,
  (dispatch) => ({ actions: bindActionCreators(GridActions, dispatch) })
)(App)
