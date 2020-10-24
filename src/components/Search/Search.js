import React, { useState, useCallback } from 'react'

import Result from './Result/Result'
import './Search.css'

const Search = () => {
  const [value, setValue] = useState('')
  const [result, setResult] = useState(null)

  const handleChange = useCallback(
    (e) => {
      setValue(e.target.value);
    },
    []
  )

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault()

      const fetchData = async () => {
        const url = `https://sdamgia-homework-backend.herokuapp.com/api/search?query=${value}`
        const response = await fetch(url)
        const data = await response.json()

        return data ? data.subject : ''
      }

      const { name, title } = await fetchData()

      setResult({
        title,
        name
      })

    },
    [value]
  )

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="form-search">
        <input
          type="text"
          placeholder="Поиск"
          value={value}
          onChange={handleChange}
          className="form-search__input"
        />
        <button className="form-search__button">Поиск</button>
      </form >
      {result && <Result name={result.name} title={result.title} />}
    </div >
  )
}

export default Search
