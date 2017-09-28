import React from 'react'
import cn from 'classnames'

const NO_OP = () => null

const iconClasses = (on, onClass, offClass) => cn('fa', 'fa-lg', {
  'active': on,
  [onClass]: on,
  [offClass]: !on
})

const buttonClasses = (on) => cn('btn', 'btn-default', {
  'active': on
})

export default ({
  on,
  label,
  onClass = 'fa-pause',
  offClass = 'fa-play',
  onClick = NO_OP
}) => (
  <label htmlFor='autoplay' className={buttonClasses(on)}>
    <i className={iconClasses(on, onClass, offClass)} />
    <input
      id='autoplay'
      style={{ display: 'none' }}
      type='checkbox'
      onChange={onClick}
    /> {label}
  </label>
)
