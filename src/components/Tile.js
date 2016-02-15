import React from 'react'

const onMouseEvent = (toggle) => (e) => {
  if (e.nativeEvent.which !== 1) { return }
  toggle(this.props.alive)
}

export default ({ alive, toggle }) =>
  <td className='tile'
    onMouseOver={onMouseEvent(toggle)}
    onMouseDown={onMouseEvent(toggle)}
    style={alive ? { backgroundColor: '#fff' } : null}>
  </td>
