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

      const { name, title } = await fetchData()
      const url = `https://${name}-ege.sdamgia.ru`
      const dataLink = {
        title: title,
        url: <a href={url}>{title}</a>
      }

      setResult(dataLink)

    },
    [value, result]
  )
  return (
    <div>
      <form onsubmit={handleClick}>
        <input
          type="text"
          placeholder="Searching..."
          value={value}
          onChange={handleChange}
        />
        <button onClick={handleClick}>Поиск</button>
      </form >
      {result && <div>{result.url}</div>}
    </div >
  )
}

export default Search
