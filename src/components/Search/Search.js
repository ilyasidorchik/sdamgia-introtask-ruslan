import React from 'react'
import { cn } from '@bem-react/classname'

import Result from './Result/Result'
import { useHelpers } from './hooks'
import './Search.scss'

const Search = () => {
  const cnSearch = cn('Search')
  const { value, result, handleChange, handleSubmit } = useHelpers()

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
      </form>

      {result !== undefined && (
        <Result
          name={result ? result.name : ''}
          title={result ? result.title : ''}
        />
      )}
    </div>
  )
}

export default Search
