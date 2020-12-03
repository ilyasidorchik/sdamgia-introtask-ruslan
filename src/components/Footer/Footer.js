import React from 'react'
import { useSelector } from 'react-redux'
import { cn } from '@bem-react/classname'

import { selectSubject } from '../../modules/subject'
import './Footer.scss'

const Footer = () => {
  const footer = cn('Footer')
  const subject = useSelector(selectSubject)

  return (
    <footer className={footer()}>
      {subject ? <span className={footer('Subject')}>{`${subject.title}`}</span> : null}
    </footer>
  )
}

export default Footer