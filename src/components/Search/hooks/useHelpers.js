import React, { useCallback } from 'react'

import { getSubject } from '../api'

export const useHelpers = (value, setValue, setResult) => {
  const handleChange = useCallback(
    (e) => {
      setValue(e.target.value);
    },
    [setValue]
  )

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault()

      const { name, title } = await getSubject(value)

      setResult({
        title,
        name
      })
    },
    [value, setResult]
  )

  return { handleChange, handleSubmit }
}