import React, { Component } from 'react'
import cn from 'classnames'

const NO_OP = () => null

export default class ToggleButton extends Component {
  constructor (props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

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
          onChange={this.handleChange}/> {this.props.label}
      </label>
    )
  }

  handleChange () {
    this.props.onClick()
  }
}

ToggleButton.defaultProps = {
  onClass: 'fa-pause',
  offClass: 'fa-play',
  onClick: NO_OP
}
