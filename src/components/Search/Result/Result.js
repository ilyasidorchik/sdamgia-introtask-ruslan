import React from 'react'
import { useSelector } from 'react-redux'
import { cn } from '@bem-react/classname'

import { selectSubject } from '../../../modules/subject'
import './Result.scss'

const Result = () => {
  const cnResult = cn('Result')
  const subject = useSelector(selectSubject)

  return (
    subject && (
      <div className={cnResult()}>
        {subject.name ? (
          <a
            className={cnResult('Item', { type: 'default' })}
            href={`https://${subject.name}-ege.sdamgia.ru`}
          >
            {subject.title}
          </a>
        ) : (
          <span className={cnResult('Item', { type: 'error' })}>
            Такого предмета нет.
          </span>
        )}
      </div>
    )
  )
}
export default Result
