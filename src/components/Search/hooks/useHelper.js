import { getSubject } from './api'

export const useHelpers = () => {
  return {
    handleChange: useCallback(
      (e) => {
        setValue(e.target.value);
      },
      []
    ),

    handleSubmit: useCallback(
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
}