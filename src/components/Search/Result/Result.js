import React from 'react'

const Result = (props) => {
  return (
    <div>
      <a href={`https://${props.name}-ege.sdamgia.ru`}>{props.title}</a>
    </div>
  )
}

export default Result