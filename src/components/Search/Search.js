import React, { useState, useCallback } from 'react'
import Result from './Result/Result'

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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Searching..."
          value={value}
          onChange={handleChange}
        />
        <button>Поиск</button>
      </form >
      {result && <Result name={result.name} title={result.title} />}
    </div >
  )
}

export default Search
