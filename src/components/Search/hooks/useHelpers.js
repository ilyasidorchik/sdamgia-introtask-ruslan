import { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'

import { fetchSubject } from '../../../modules/subject'

export const useHelpers = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  const handleChange = useCallback(
    (e) => {
      setValue(e.target.value)
    },
    [setValue]
  )

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault()

      // Получаем данные с сервера 
      // и кладём в store с помощью dispatch()
      dispatch(fetchSubject(value))

    },
    [dispatch, value]
  )

  return { value, handleChange, handleSubmit }
}
