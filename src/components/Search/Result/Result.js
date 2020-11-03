import React from 'react'

import './Result.scss'

const Result = ({ name, title }) => {
  const cnResult = cn('Result')

  return (
    <div className={cnResult()}><a className={cnResult('Link')} href={`https://${name}-ege.sdamgia.ru`}>{title}</a></div>
  )
}
export default Result