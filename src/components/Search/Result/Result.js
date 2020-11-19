import React from 'react'
import { cn } from '@bem-react/classname'

import './Result.scss'

const Result = ({ name, title }) => {
  const cnResult = cn('Result')

  return (
    <div className={cnResult()}>
      {name === undefined ?
        <p className={cnResult('Error')}>Такого предмета нет.</p> :
        <a className={cnResult('Link')} href={`https://${name}-ege.sdamgia.ru`}>{title}</a>}
    </div>
  )
}
export default Result