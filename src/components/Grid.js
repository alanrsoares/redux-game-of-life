import React from 'react'
import PropTypes from 'prop-types'

import Tile from './Tile'

const renderTile = (toggle, y) => (alive, x) => (
  <Tile
    key={x}
    alive={alive}
    toggle={(alive) => toggle({
      coordinates: { y, x },
      current: alive
    })}
  />
)

const renderRow = (toggle) => (row, y) => (
  <div className='grid-row' key={y}>
    {row.map(renderTile(toggle, y))}
  </div>
)

const Grid = ({ data, toggle }) => (
  <div className='grid'>
    {data.map(renderRow(toggle))}
  </div>
)

export const GridShape = PropTypes.arrayOf(
  PropTypes.arrayOf(PropTypes.bool)
)

Grid.propTypes = {
  data: GridShape.isRequired,
  toggle: PropTypes.func.isRequired
}

export default Grid
