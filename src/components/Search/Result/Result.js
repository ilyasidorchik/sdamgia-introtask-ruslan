import React from 'react'

import './Result.css'

const Result = ({ name, title }) => <div className="Container-Result"><a href={`https://${name}-ege.sdamgia.ru`}>{title}</a></div>

export default Result