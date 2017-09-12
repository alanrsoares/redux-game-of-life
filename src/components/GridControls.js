import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import ToggleButton from './ToggleButton'
import { randomizer } from '../lib/utils'

export default class GridControls extends PureComponent {
  render () {
    const { actions, profiler } = this.props
    const marginBottom = `${(!profiler.frameId ? 20 : 0)}px`

    return (
      <div className='grid-controls'>
        <div className='btn-group' role='group' style={{ marginBottom }}>
          <button className='btn btn-danger' onClick={this.reset}>
            RESET
          </button>
          <button className='btn btn-success' onClick={this.random}>
            RANDOMIZE
          </button>
          <button className='btn btn-default' disabled={!!profiler.frameId} onClick={actions.tick}>
            <i className='fa fa-fast-forward fa-lg' /> NEXT
          </button>
          <ToggleButton
            label='AUTO'
            on={profiler.startedAt}
            onClick={this.toggleAutoplay(actions.tick)}
          />
        </div>
        {this.renderFrameRate()}
      </div>
    )
  }

  renderFrameRate () {
    if (!this.props.profiler.startedAt) {
      return
    }

    return (
      <div className='text-muted'>
        {`${this.props.profiler.frameRate} fps`}
      </div>
    )
  }

  toggleAutoplay = (tick) => () => {
    if (this.props.profiler.startedAt) {
      return this.stop()
    }

    this.props.actions.start(Date.now())
    this.start(tick)
  }

  random = () => this.props.actions.random({ randomizer })

  start = (tick) => tick({
    frameId: window.requestAnimationFrame(() => this.start(tick)),
    now: Date.now()
  })

  stop = () => {
    window.cancelAnimationFrame(this.props.profiler.frameId)
    this.props.actions.stop()
  }

  reset = () => {
    if (this.props.profiler.startedAt) {
      this.stop()
    }
    this.props.actions.reset()
  }
}

GridControls.propTypes = {
  profiler: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}
