import React, { useState, useCallback } from 'react'

const Search = () => {
  const [value, setValue] = useState('')
  const [result, setResult] = useState(null) 

  const handleChange = useCallback(
    (e) => {
      setValue(e.target.value);
    },
    []
  )

  const handleClick = useCallback(
    async () => {
      const fetchData = async () => {
        const url = `https://sdamgia-homework-backend.herokuapp.com/api/search?query=${value}`
        const response = await fetch(url)
        const data = await response.json()

        return data ? data.subject : ''
      }

      const { name, title } = await fetchData()

      setResult({
        title,
        name: name
      })

    },
    [value]
  )
  return (
    <div>
      <form onSubmit={handleClick} onСlick={event.preventDefault()}>
        <input
          type="text"
          placeholder="Searching..."
          value={value}
          onChange={handleChange}
        />
        <button>Поиск</button>
      </form >
      {result && <div><a href={`https://${result.name}-ege.sdamgia.ru`}>{result.title}</a></div>}
    </div >
  )
}

export default Search
