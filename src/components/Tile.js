import React from 'react'

const onMouseEvent = (toggle, alive) => (e) => {
  if (e.nativeEvent.which !== 1) { return }
  toggle(alive)
}

export default ({ alive, toggle }) =>
  <td className='tile'
    onMouseOver={onMouseEvent(toggle, alive)}
    onMouseDown={onMouseEvent(toggle, alive)}
    style={alive ? { backgroundColor: '#fff' } : null}>
  </td>
