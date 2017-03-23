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
  <tr key={y}>
    {row.map(renderTile(toggle, y))}
  </tr>
)

export default ({ data, toggle }) => (
  <table className='grid'>
    <tbody>
      {data.map(renderRow(toggle))}
    </tbody>
  </table>
)
