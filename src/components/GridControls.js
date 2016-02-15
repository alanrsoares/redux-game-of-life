import React, { Component, PropTypes } from 'react'
import ToggleButton from './ToggleButton'

export default class GridControls extends Component {
  constructor (props) {
    super(props)
    this.clear = this.clear.bind(this)
  }

  render () {
    const { actions, profiler } = this.props
    const marginBottom = `${(!profiler.frameId ? 20 : 0)}px`

    return (
      <div className='grid-controls'>
        <div className='btn-group' role='group' style={{ marginBottom }}>
          <button className='btn btn-danger' onClick={this.clear}>
            CLEAR
          </button>
          <button className='btn btn-success' onClick={actions.random}>
            RANDOMIZE
          </button>
          <button className='btn btn-default' disabled={!!profiler.frameId} onClick={actions.tick}>
            <i className='fa fa-fast-forward fa-lg'></i> NEXT
          </button>
          <ToggleButton label='AUTO' on={profiler.startedAt} onClick={this.toggleAutoplay(actions.tick)}/>
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
    tick({
      frameId: window.requestAnimationFrame(() => this.start(tick)),
      now: Date.now()
    })
  }

  stop () {
    window.cancelAnimationFrame(this.props.profiler.frameId)
    this.props.actions.stop()
  }

  clear () {
    if (this.props.profiler.startedAt) {
      this.stop()
    }
    this.props.actions.clear()
  }
}

GridControls.propTypes = {
  profiler: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}
