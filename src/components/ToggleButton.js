import React, { Component } from 'react'
import cn from 'classnames'

const NO_OP = () => null

export default class ToggleButton extends Component {
  render () {
    const iconClasses = cn('fa', 'fa-lg', {
      'active': this.props.on,
      [this.props.onClass]: this.props.on,
      [this.props.offClass]: !this.props.on
    })

    const buttonClasses = cn('btn', 'btn-default', {
      'active': this.props.on
    })

    return (
      <label htmlFor='autoplay' className={buttonClasses}>
        <i className={iconClasses}></i>
        <input
          id='autoplay'
          style={{ display: 'none' }}
          type='checkbox'
          onChange={this.props.onClick}/> {this.props.label}
      </label>
    )
  }
}

ToggleButton.defaultProps = {
  onClass: 'fa-pause',
  offClass: 'fa-play',
  onClick: NO_OP
}
