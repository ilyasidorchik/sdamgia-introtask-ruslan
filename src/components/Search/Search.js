import React, { useState, useCallback } from 'react'

const Search = () => {
  const [value, setValue] = useState('')
  const [result, setResult] = useState('')

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

      const { name } = await fetchData()
      const url = `https://${name}-ege.sdamgia.ru`

      setResult(url)

    },
    [value]
  )
  return (
    <div>
      <form onSubmit={handleClick}>
        <input
          type="text"
          placeholder="Searching..."
          value={value}
          onChange={handleChange}
        />
        <button>Поиск</button>
      </form >
      {result && <div><a href={`${result.url}`}>{`${result.url}`}</a></div>}
    </div >
  )
}

export default Search
