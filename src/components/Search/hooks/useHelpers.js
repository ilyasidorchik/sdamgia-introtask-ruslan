import React, { useState, useCallback } from 'react'

import { getSubject } from './api'

export const useHelpers = () => {
  const handleChange = () => {
    useCallback(
      (e) => {
        setValue(e.target.value);
      },
      []
    )
  }

  const handleSubmit = () => {
    useCallback(
      async (e) => {
        e.preventDefault()

        const { name, title } = await getSubject(value)

        setResult({
          title,
          name
        })
      },
      [value]
    )
  }

  return { handleChange, handleSubmit }
}

