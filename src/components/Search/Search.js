import React from 'react'
import { cn } from '@bem-react/classname'

import Result from './Result/Result'
import { useHelpers } from './hooks'
import './Search.scss'

const Search = () => {
  const cnSearch = cn('Search')
  const { value, handleChange, handleSubmit } = useHelpers()

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
      <Result />
    </div>
  )
}

export default Search
