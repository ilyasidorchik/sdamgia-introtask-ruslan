import React, { useState, useCallback } from 'react'
import { cn } from '@bem-react/classname'

import Result from './Result/Result'
import api from './api'
import './Search.scss'

const Search = () => {
  const [value, setValue] = useState('')
  const [result, setResult] = useState(null)

  const useHelpers = () => {
    return {
      handleChange: useCallback(
        (e) => {
          setValue(e.target.value);
        },
        []
      ),

      handleSubmit: useCallback(
        async (e) => {
          e.preventDefault()

          const { name, title } = await api(value)

          setResult({
            title,
            name
          })
        },
        [value]
      )
    }
  }

  const { handleChange, handleSubmit } = useHelpers()
  const cnSearch = cn("Search")

  return (
    <div className={cnSearch()}>
      <form className={cnSearch('Form')} onSubmit={handleSubmit}>
        <input
          className={cnSearch('Input')}
          type="text"
          placeholder="Searching..."
          value={value}
          onChange={handleChange}
        />
        <button className={cnSearch('Button')}>Поиск</button>
      </form >
      {result && <Result name={result.name} title={result.title} />}
    </div >
  )
}

export default Search
