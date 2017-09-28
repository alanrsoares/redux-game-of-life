import React from 'react'
import PropTypes from 'prop-types'

const onMouseEvent = (toggle, alive) => (e) => {
  if (e.nativeEvent.which !== 1) { return }
  toggle(alive)
}

const Tile = ({ alive, toggle, color = '#FFF' }) => (
  <div className='grid-tile'
    onMouseOver={onMouseEvent(toggle, alive)}
    onMouseDown={onMouseEvent(toggle, alive)}
    style={{ backgroundColor: alive ? color : null }}
  />
)

Tile.propTypes = {
  alive: PropTypes.bool,
  toggle: PropTypes.func,
  color: PropTypes.string
}

export default Tile
