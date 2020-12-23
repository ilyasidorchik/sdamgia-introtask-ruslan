import React from 'react'

const Button = ({className, disabled, name}) => {
  return (
    <button className={className}>{name}</button>
  )
}

export default Button