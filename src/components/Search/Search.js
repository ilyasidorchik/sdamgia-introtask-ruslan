import React, { useState } from 'react'
import { cn } from '@bem-react/classname'

import Result from './Result/Result'
import { useHelpers } from './hooks/useHelpers'
import './Search.scss'

const Search = () => {
  const [value, setValue] = useState('')
  const [result, setResult] = useState(null)

  const cnSearch = cn("Search")

  const { handleChange, handleSubmit } = useHelpers()

  return (
    <div className={cnSearch()}>
      <form className={cnSearch('Form')} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Searching..."
          value={value}
          onChange={handleChange}
          className={cnSearch('Input')}
        />
        <button className={cnSearch('Button')}>Поиск</button>
      </form >
      {result && <Result name={result.name} title={result.title} />}
    </div >
  )
}

export default Search
