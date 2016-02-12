import React, { Component } from 'react'

export default class Tile extends Component {
  constructor (props) {
    super(props)
    this.onMouseOver = this.onMouseOver.bind(this)
    this.onMouseDown = this.onMouseDown.bind(this)
  }

  render () {
    const style = this.props.alive ? { backgroundColor: '#fff' } : null
    return (
      <td className='tile'
        onMouseOver={this.onMouseOver}
        onMouseDown={this.onMouseDown}
        style={style}></td>
    )
  }

  onMouseDown (e) {
    if (e.nativeEvent.which !== 1) { return }
    this.props.toggle(this.props.alive)
  }

  onMouseOver (e) {
    if (e.nativeEvent.which !== 1) { return }
    this.props.toggle(this.props.alive)
  }
}
