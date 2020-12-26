import React, { ReactNode, FC } from 'react'

interface IButtonProps {
  className?: string,
  disabled: false,
  children: ReactNode 
}

const Button: FC<IButtonProps> = ({ className, disabled, children}) => {
  return (
    <button className={className}>{children}</button>
  )
}

export default Button