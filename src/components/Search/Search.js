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

  const search = cn("Search")

  return (
    <div className={search()}>
      <form className={search('Form')} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Searching..."
          value={value}
          onChange={handleChange}
          className={search('Input')}
        />
        <button className={search('Button')}>Поиск</button>
      </form >
      {result && <Result name={result.name} title={result.title} />}
    </div >
  )
}

export default Search
