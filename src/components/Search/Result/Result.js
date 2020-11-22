import React from 'react'
import { cn } from '@bem-react/classname'

import './Result.scss'

const Result = ({ name, title }) => {
  const cnResult = cn('Result')

  return (
    <div className={cnResult()}>
      {name ?
        (
          <a
            className={cnResult('Item', { type: 'default' })}
            href={`https://${name}-ege.sdamgia.ru`}
          >
            {title}
          </a>
        ) : (
          <span className={cnResult('Item', { type: 'error' })}>
            Такого предмета нет.
          </span>
        )}
    </div>
  )
}
export default Result