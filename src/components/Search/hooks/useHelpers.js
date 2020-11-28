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

      dispatch(fetchSubject(value))

      // const data = await getSubject(value)

      // const newResult = {
      //   name: data ? data.name : '',
      //   title: data ? data.title : '',
      // }

      // dispatch(fetchSubjectSuccess(newResult))
    },
    [dispatch, value]
  )

  return { value, handleChange, handleSubmit }
}
