import React, { Component, createElement } from 'react'
import Tile from './Tile'

export default class Grid extends Component {
  render () {
    return (
      <table className='grid'>
        <tbody>
        {this.props.data.grid.map(this.renderRow.bind(this))}
        </tbody>
      </table>
    )
  }

  renderRow (row, y) {
    return (
      <tr key={y}>
        {row.map(this.renderTile(y))}
      </tr>
    )
  }

  renderTile (y) {
    return (alive, x) =>
      createElement(Tile, {
        key: x,
        toggle: this.toggle(y, x),
        alive
      })
  }

  toggle (y, x) {
    return (alive) => this.props.toggle({
      coordinates: { y, x },
      current: alive
    })
  }
}
