import { useState, useCallback } from 'react'

import { getSubject } from '../api'

export const useHelpers = () => {
  const [value, setValue] = useState('')
  const [result, setResult] = useState(undefined)

  const handleChange = useCallback(
    (e) => {
      setValue(e.target.value)
    },
    [setValue]
  )

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault()

      const data = await getSubject(value)
      const newResult = {
        name: data ? data.name : '',
        title: data ? data.title : '',
      }

      setResult(newResult)
    },
    [value, setResult]
  )

  return { value, result, handleChange, handleSubmit }
}
