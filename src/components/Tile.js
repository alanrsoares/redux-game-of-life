import React from 'react'

const onMouseEvent = (toggle, alive) => (e) => {
  if (e.nativeEvent.which !== 1) { return }
  toggle(alive)
}

export default ({ alive, toggle, color = '#FFF' }) => (
  <div className='grid-tile'
    onMouseOver={onMouseEvent(toggle, alive)}
    onMouseDown={onMouseEvent(toggle, alive)}
    style={alive ? { backgroundColor: color } : null}
  />
)
