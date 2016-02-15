import React, { Component, PropTypes } from 'react'
import ToggleButton from './ToggleButton'

export default class GridControls extends Component {
  render () {
    const marginBottom = `${(!this.props.profiler.frameId ? 20 : 0)}px`

    return (
      <div className='grid-controls'>
        <div className='btn-group' role='group' style={{ marginBottom }}>
          <button className='btn btn-danger' onClick={this.props.actions.clear}>
            CLEAR
          </button>
          <button className='btn btn-success' onClick={this.props.actions.random}>
            RANDOMIZE
          </button>
          <button className='btn btn-default' disabled={!!this.props.profiler.frameId} onClick={this.props.actions.tick}>
            <i className='fa fa-fast-forward fa-lg'></i> NEXT
          </button>
          <ToggleButton label='AUTO' onClick={this.toggleAutoplay(this.props.actions.tick)}/>
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

  toggleAutoplay (tick) {
    return () => {
      if (this.props.profiler.startedAt) {
        return this.stop()
      }

      this.props.actions.start(Date.now())
      this.start(tick)
    }
  }

  start (tick) {
    tick({ frameId: window.requestAnimationFrame(() => this.start(tick)) })
  }

  stop () {
    window.cancelAnimationFrame(this.props.profiler.frameId)
    this.props.actions.stop()
  }
}

GridControls.propTypes = {
  profiler: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}
