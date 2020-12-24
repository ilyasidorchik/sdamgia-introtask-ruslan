import React, { ReactNode } from 'react'

interface IButtonProps {
  name?: string,
  className?: string,
  disabled: false,
  children: ReactNode 
}

const Button = ({ className, disabled, name }: IButtonProps) => {
  return (
    <button className={className}>{name}</button>
  )
}

export default Button