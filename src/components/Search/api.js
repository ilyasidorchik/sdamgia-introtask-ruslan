export const getSubject = async (value) => {
  const url = `https://sdamgia-homework-backend.herokuapp.com/api/search?query=${value}`

  try {
    const response = await fetch(url)
    const data = await response.json()

    return data.subject ? data.subject : ''
  } catch (error) {
    console.log('Такого предмета нет.')
  }

  return {
    name: undefined,
    title: undefined,
  }
}