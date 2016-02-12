import React, { Component } from 'react'
import ToggleButton from './ToggleButton'

export default class GridControls extends Component {
  constructor (props) {
    super(props)
    this.state = {
      frameId: null,
      startedAt: null,
      ticks: 0
    }
  }

  get frameRate () {
    return Math.ceil(this.state.ticks / ((Date.now() - this.state.startedAt) / 1000))
  }

  render () {
    const marginBottom = `${(!this.state.frameId ? 20 : 0)}px`
    return (
      <div className='grid-controls'>
        <div className='btn-group' role='group' style={{ marginBottom }}>
          <button className='btn btn-danger' onClick={this.props.actions.clear}>
            CLEAR
          </button>
          <button className='btn btn-success' onClick={this.props.actions.random}>
            RANDOMIZE
          </button>
          <button className='btn btn-default' disabled={!!this.state.frameId} onClick={this.props.actions.tick}>
            <i className='fa fa-fast-forward fa-lg'></i> NEXT
          </button>
          <ToggleButton label='AUTO' onClick={this.toggleAutoplay(this.props.actions.tick)}/>
        </div>
        {this.renderFrameRate()}
      </div>
    )
  }

  renderFrameRate () {
    if (!this.state.frameId) {
      return
    }

    return (
      <div className='text-muted'>
        {`${this.frameRate} fps`}
      </div>
    )
  }

  toggleAutoplay (tick) {
    return () => {
      if (!this.state.frameId) {
        this.setState({ startedAt: Date.now() })
        return this.start(tick)
      }

      this.stop()
    }
  }

  start (tick) {
    this.setState({
      frameId: window.requestAnimationFrame(() => this.start(tick)),
      ticks: this.state.ticks + 1
    })

    tick()
  }

  stop () {
    window.cancelAnimationFrame(this.state.frameId)
    this.setState({ frameId: null, startedAt: null, ticks: 0 })
  }

}
