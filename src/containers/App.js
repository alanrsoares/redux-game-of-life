import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import GridControls from '../components/GridControls'
import Grid from '../components/Grid'
import ForkMeOnGithubRibbon from '../components/ForkMeOnGithubRibbon'
import * as GridActions from '../actions/grid'

class App extends Component {
  render () {
    const { data, dispatch } = this.props
    const actions = bindActionCreators(GridActions, dispatch)

    return (
      <div>
        <GridControls actions={actions} />
        <div>
          <Grid data={data} toggle={actions.toggle}/>
        </div>
        <ForkMeOnGithubRibbon />
      </div>
    )
  }
}

App.propTypes = {
  data: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
}

export default connect(
  // map state to props
  ({ grid }) => ({ data: grid })
)(App)
