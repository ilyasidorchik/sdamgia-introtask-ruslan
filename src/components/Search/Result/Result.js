import React from 'react'

import './Result.css'

const Result = ({ name, title }) => {
  const result = cn('Result')

  return (
    <div className={result()}><a className={result('Link')} href={`https://${name}-ege.sdamgia.ru`}>{title}</a></div>
  )
}
export default Result