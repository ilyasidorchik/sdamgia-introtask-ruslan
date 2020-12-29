import React, { ReactNode, FC } from 'react'
import { cn } from '@bem-react/classname'
import { classnames as cx } from '@bem-react/classnames'

import './Button.scss'

interface IButtonProps {
  className?: string,
  disabled: boolean,
  children: ReactNode 
}

const Button: FC<IButtonProps> = ({ className, disabled, children}) => {
  const button = cn('Button')

  return (
    <button className={cx(button(), className)}>{children}</button>
  )
}

export default Button