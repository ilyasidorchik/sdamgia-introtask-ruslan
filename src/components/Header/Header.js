import React from 'react'
import { useSelector } from 'react-redux'
import { cn } from '@bem-react/classname'

import { selectSubject } from '../../modules/subject'
import './Header.scss'

const Header = () => {
  const cnHeader = cn('Header')
  const subject = useSelector(selectSubject)

  return (
    <header className={cnHeader()}>
      {subject && `Давай учи предмет «${subject.title}»`}
    </header>
  )
}
export default Header
