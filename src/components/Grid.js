import React from 'react'

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
  <div className="grid-row" key={y}>
    {row.map(renderTile(toggle, y))}
  </div>
)

export default ({ data, toggle }) => (
  <div className='grid'>
    {data.map(renderRow(toggle))}
  </div>
)
